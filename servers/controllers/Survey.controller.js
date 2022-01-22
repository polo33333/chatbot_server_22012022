

const Survey = require('../models/Survey.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Customer = require('../models/Customer.model');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId }).sort({ createdAt: -1 });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get all with Is Design
    getByIsDesign: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId, isDesign: true }).sort({ createdAt: -1 });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getByIsDesign]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get all with Is User
    getByIsUser: async (req, res) => {
        try {

            let { botId } = req.params;

            let sur = await Survey.find({ botId: botId, isDesign: false }).sort({ createdAt: -1 });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getByIsUser]: ' + error);
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
                isDesign: false,
                name: { $regex: obj.name, $options: 'i' },
                createdAt: {
                    $gte: obj.fromDate,
                    $lte: obj.toDate
                }
            }
            if (obj.name == null || obj.name == '' || obj.name == undefined) {
                delete search.name;
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

            let sur = await Survey.find(search).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, sur, message.getSuccess);

        } catch (error) {

            console.log('Error[Survey:search]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { surveyId } = req.params;
            let sur = await Survey.findById(surveyId);
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Survey:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // create
    create: async (req, res) => {

        try {
            //let { botId } = req.params;
            let obj = req.body;
            if (!obj.isDesign) {
                let cus = await Customer.findOne({ senderId: obj.sender_id });

                if (cus) {
                    obj.sender_name = cus.name;
                    obj.botId = cus.botId;
                    obj.senderId = cus.senderId;
                }

                // for (let i = 0; i < obj.items.length; i++) {
                //     let el = obj.items[i];
                //     if(obj.data[el.value] == undefined || obj.data[el._id] == '' )
                //     obj.items[i].value = null;
                //     else
                //     obj.items[i].value = obj.data[el._id];
                // }

            }
            //console.log(obj)
            let sur = await Survey.create(obj);
            if (sur)
                return sR.sendResponse(res, 200, sur, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Survey:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update
    update: async (req, res) => {

        try {
            let { botId, surveyId } = req.params;
            let object = req.body;

            let sur = await Survey.findById(surveyId);
            sur.name = object.name;
            sur.items = object.items;
            await sur.save();
            return sR.sendResponse(res, 200, sur, message.updateSuccess);
        } catch (error) {

            console.log('Error[Survey:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { surveyId } = req.params;
            let r = await Survey.findByIdAndRemove(surveyId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Survey:remove]: ' + error);
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