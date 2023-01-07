const path = require("path");
const moment = require("moment-timezone");
moment.tz.setDefault("GMT");
const { raccoonConfig } = require("../../config-class");
const {
    rootPath: STORE_DICOM_ROOT_PATH
} = raccoonConfig.dicomWebConfig;


/**
 *
 * @param {Object} iQuery
 * @param {string} colName
 * @param {boolean} isRegex
 * @param {string} format
 * @returns
 */
function mongoDateQuery(iQuery, colName, isRegex, format = "YYYYMMDD") {
    if (iQuery[colName]) {
        if (isRegex) {
            iQuery[colName] = iQuery[colName].source;
        }
        let dateCondition = getDateCondition(iQuery[colName]);
        let date = getDateStr(iQuery[colName]);
        iQuery[colName] = dateCallBack[dateCondition](date, format);
    }
    return iQuery;
}

function getDateCondition(iDate) {
    if (iDate.indexOf("-") == 0) {
        //Only end date (end to date)
        return "<=";
    } else if (iDate.indexOf("-") == iDate.length - 1) {
        //Only start date (start from date)
        return ">=";
    } else if (iDate.includes("-")) {
        return "-";
    }
    return "=";
}

function getDateStr(iDate) {
    return iDate.match(/\d+/g);
}

function gt_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $gt: moment(i_Date[0], format).toDate()
    };
    return query;
}

function lt_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $lt: moment(i_Date[0], format).toDate()
    };
    return query;
}

function gte_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $gte: moment(i_Date[0], format).toDate()
    };
    return query;
}

function lte_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $lte: moment(i_Date[0], format).toDate()
    };
    return query;
}

function between_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $gte: moment(i_Date[0], format).toDate(),
        $lte: moment(i_Date[1], format).toDate()
    };
    return query;
}

function ne_Date(i_Date, format = "YYYYMMDD") {
    let query = {
        $ne: moment(i_Date[0], format).toDate()
    };
    return query;
}

function eq_Date(i_Date, format = "YYYYMMDD") {
    let d = moment(i_Date[0], format);
    if (format == "HHmmss") {
        if (!i_Date[1]) {
            i_Date[1] = "000000";
        }
        let query = {
            $gte: moment(i_Date[0], format).toDate(),
            $lte: moment(i_Date[0], format).toDate()
        };
        return query;
    } else if (i_Date[0].length <= 4) {
        let end = moment(i_Date[0], format).endOf("year");
        return between_Date([d, end], format);
    } else if (i_Date[0].length >= 5 && i_Date[0].length <= 6) {
        let end = moment(i_Date[0], format).endOf("month");
        return between_Date([d, end], format);
    } else {
        let end = moment(i_Date[0], format).endOf("day");
        return between_Date([d, end], format);
    }
}

const dateCallBack = {
    ">": gt_Date,
    "<": lt_Date,
    "<=": lte_Date,
    ">=": gte_Date,
    "<>": ne_Date,
    "-": between_Date,
    "=": eq_Date
};

function getStoreDicomFullPathGroup(pathGroup) {
    let fullPathGroup = [];

    for (let i = 0; i < pathGroup.length; i++) {
        pathGroup[i].instancePath = getStoreDicomFullPath(pathGroup[i]);

        fullPathGroup.push(pathGroup[i]);
    }

    return fullPathGroup;
}

function getStoreDicomFullPath(storeInstanceObj) {
    return path.join(
        STORE_DICOM_ROOT_PATH,
        storeInstanceObj.instancePath
    );
}

module.exports.mongoDateQuery = mongoDateQuery;
module.exports.getStoreDicomFullPathGroup = getStoreDicomFullPathGroup;
module.exports.getStoreDicomFullPath = getStoreDicomFullPath;