const {
    QidoRsService
} = require("./service/QIDO-RS.service");
const { ApiLogger } = require("../../../../utils/logs/api-logger");
const { Controller } = require("../../../controller.class");

class QueryAllStudiesController extends Controller { 
    constructor(req, res) {
        super(req, res);
    }

    async mainProcess() {
        let apiLogger = new ApiLogger(this.request, "QIDO-RS");

        apiLogger.info(`[Query All Studies]`);
    
        try {
    
            let qidoRsService = new QidoRsService(this.request, this.response, "study");
    
            await qidoRsService.getAndResponseDicomJson();
    
        } catch (e) {
            let errorStr = JSON.stringify(e, Object.getOwnPropertyNames(e));
            apiLogger.error(errorStr);

            this.response.writeHead(500, {
                "Content-Type": "application/dicom+json"
            });
            this.response.end(JSON.stringify({
                code: 500,
                message: errorStr
            }));
        }
    }
}

/**
 *
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
module.exports = async function (req, res) {
    let controller = new QueryAllStudiesController(req, res);

    await controller.preProcess();

    await controller.mainProcess();
    
    controller.postProcess();
};

