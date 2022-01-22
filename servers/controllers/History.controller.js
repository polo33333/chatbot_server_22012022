
const Config = require('../models/Config.model');
const History = require('../models/History.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');

module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let his = await History.find({ botId: botId }).sort({ createdAt: -1 }).limit(500);
            return sR.sendResponse(res, 200, his, message.getSuccess);

        } catch (error) {

            console.log('Error[Answer:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { historyId } = req.params;
            let his = await History.findById(historyId);
            return sR.sendResponse(res, 200, his, message.getSuccess);

        } catch (error) {

            console.log('Error[History:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // search
    search: async (req, res) => {
        try {
            let { botId } = req.params;
            let obj = req.body;
            obj.fromDate = converDateTime(obj.fromDate, 'start');
            obj.toDate = converDateTime(obj.toDate, 'end');

            let search = {
                botId: botId,
                bot_detected: { $regex: obj.botDetected, $options: 'i' },
                createdAt: {
                    $gte: obj.fromDate,
                    $lte: obj.toDate
                }
            }
            if (obj.botDetected == null || obj.botDetected == '' || obj.botDetected == undefined) {
                delete search.bot_detected;
            }
            if (obj.fromDate == null || obj.fromDate == '' || obj.fromDate == undefined) {
                delete search.createdAt.$gte;
            }
            if (obj.toDate == null || obj.toDate == '' || obj.toDate == undefined) {
                delete search.createdAt.$lte;
            }
            if ((obj.fromDate == null && obj.toDate == null) || (obj.fromDate == '' && obj.toDate == '') || (obj.fromDate == undefined && obj.toDate == undefined)) {
                delete search.createdAt;
            }
            let his = await History.find(search).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, his, message.getSuccess);

        } catch (error) {

            console.log('Error[History:search]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { historyId } = req.params;
            let his = await History.findByIdAndRemove(historyId);
            if (his) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[History:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },
};


function converDateTime(date, option) {

    if (date != null) {
        if (date.day != undefined &&
            date.month != undefined &&
            date.year != undefined) {

            if (option == 'start')
                date = new Date(date.year, date.month - 1, date.day, 0, 0, 0);
            else if (option == 'end')
                date = new Date(date.year, date.month - 1, date.day, 23, 59, 59);
            else
                date = new Date(date.year, date.month - 1, date.day);
        } else {

            date = date.split("/");
            if (option == 'start')
                date = new Date(date[2], date[1] - 1, date[0], 0, 0, 0);
            else if (option == 'end')
                date = new Date(date[2], date[1] - 1, date[0], 23, 59, 59);
            else
                date = new Date(date[2], date[1] - 1, date[0]);
        }
    }
    return date;
}