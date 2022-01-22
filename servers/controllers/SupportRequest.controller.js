

const SupportRequest = require('../models/SupportRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;

            let r = await SupportRequest.find({ botId: botId }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { requestId } = req.params;
            let r = await SupportRequest.findById(requestId);

            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // search
    search: async (req, res) => {
        try {
            let { botId } = req.params;
            let obj = req.body;
            obj.fromDate = converDateTime(obj.fromDate,'start');
            obj.toDate = converDateTime(obj.toDate,'end');

            if (obj.status != null && obj.status != 'null') {
                obj.status = parseInt(obj.status)
            } else {
                obj.status = null;
            }

            let search = {
                botId: botId,
                name: { $regex: obj.name, $options: 'i' },
                email: { $regex: obj.email, $options: 'i' },
                phone: { $regex: obj.phone, $options: 'i' },
                intentName: { $regex: obj.intentName, $options: 'i' },
                status: obj.status,
                createdAt: {
                    $gte: obj.fromDate,
                    $lte: obj.toDate
                }
            }

           
            if (obj.name == null || obj.name == '' || obj.name == undefined) {
                delete search.name;
            }
            if (obj.intentName == null || obj.intentName == '' || obj.intentName == undefined) {
                delete search.intentName;
            }
            if (obj.email == null || obj.email == '' || obj.email == undefined) {
                delete search.email;
            }
            if (search.status == null) {
                delete search.status;
            }
            if (obj.phone == null || obj.phone == '' || obj.phone == undefined) {
                delete search.phone;
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
            let sup = await SupportRequest.find(search).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, sup, message.getSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:search]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    // create: async (req, res) => {

    //     try {
    //         const { botId } = req.params;
    //         var object = req.body;

    //         const intent = await Intent.create(obj);
    //         return sR.sendResponse(res, 404, null, message.notFound);


    //     } catch (error) {

    //         console.log('Error[UnknowRequest:create]: ' + error);
    //         return sR.sendResponse(res, 400, null, error);
    //     }
    // },

    // update method with id
    update: async (req, res) => {

        try {
            let { requestId } = req.params;
            let obj = req.body;
            let r = await SupportRequest.findOne({ _id: requestId });
            r.status = obj.status;
            await r.save();
            return sR.sendResponse(res, 200, r, message.updateSuccess);

        } catch (error) {

            console.log('Error[SupportRequest:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { requestId } = req.params;
            let r = await SupportRequest.findByIdAndRemove(requestId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[SupportRequest:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}


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