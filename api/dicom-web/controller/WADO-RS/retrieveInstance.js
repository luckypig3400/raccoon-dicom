const wadoService = require("./service/WADO-RS.service");
const { WADOZip } = require("./service/WADOZip");
const { ApiLogger } = require("../../../../utils/logs/api-logger");
const { Controller } = require("../../../controller.class");
class RetrieveInstanceOfSeriesOfStudiesController extends Controller {
    constructor(req, res) {
        super(req, res);
    }

    async mainProcess() {
        let apiLogger = new ApiLogger(this.request, "WADO-RS");
        apiLogger.addTokenValue();

        apiLogger.logger.info(`Get study's series' instances, study UID: ${this.request.params.studyUID}, series UID: ${this.request.params.seriesUID}`);
        apiLogger.logger.info(`Request Accept: ${this.request.headers.accept}`);
    
        try {
            
            if (this.request.headers.accept.toLowerCase() === "application/zip") {
                return await this.responseZip();
            } else if (this.request.headers.accept.includes("multipart/related")) {
                return await this.responseMultipartRelated();
            } else if (this.request.headers.accept.includes("*")){
                this.request.headers.accept = "multipart/related; type=\"application/dicom\"";
                return await this.responseMultipartRelated();
            }

            return wadoService.sendNotSupportedMediaType(this.response, this.request.headers.accept);
        } catch(e) {
            let errorStr = JSON.stringify(e, Object.getOwnPropertyNames(e));
            apiLogger.logger.error(errorStr);
    
            this.response.writeHead(500, {
                "Content-Type": "application/dicom+json"
            });
            this.response.end(JSON.stringify({
                code: 500,
                message: errorStr
            }));
        }
    }

    async responseZip() {
        let wadoZip = new WADOZip(this.request.params, this.response);
        let zipResult = await wadoZip.getZipOfInstanceDICOMFile();
        if (zipResult.status) {
            return this.response.end();
        } else {
            this.response.writeHead(zipResult.code, {
                "Content-Type": "application/dicom+json"
            });
            return this.response.end(JSON.stringify(zipResult));
        }
    }

    async responseMultipartRelated() {
        let type = wadoService.getAcceptType(this.request);
        let isSupported = wadoService.supportInstanceMultipartType.indexOf(type) > -1;
        if (!isSupported) {
            return wadoService.sendNotSupportedMediaType(this.response, type);
        }

        let imageMultipartWriter = new wadoService.ImageMultipartWriter(
            this.request,
            this.response,
            wadoService.InstanceImagePathFactory,
            wadoService.multipartContentTypeWriter[type]
        );

        return await imageMultipartWriter.write();
    }
}


/**
 * 
 * @param {import("http").IncomingMessage} req 
 * @param {import("http").ServerResponse} res 
 */
module.exports = async function(req, res) {
    let controller = new RetrieveInstanceOfSeriesOfStudiesController(req, res);

    await controller.doPipeline();
};