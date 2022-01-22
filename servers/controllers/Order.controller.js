

const Order = require('../models/Order.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;

            let r = await Order.find({ botId: botId }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[Order:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { id } = req.params;
            let r = await Order.findById(id);

            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[Order:getById]: ' + error);
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



    // search
    search: async (req, res) => {
        try {
            let { botId } = req.params;
            let obj = req.body;
            obj.fromDate = converDateTime(obj.fromDate, 'start');
            obj.toDate = converDateTime(obj.toDate, 'end');


            let search = {
                botId: botId,
                k_customer: { $regex: obj.k_customer, $options: 'i' },
                k_email: { $regex: obj.k_email, $options: 'i' },
                k_phone: { $regex: obj.k_phone, $options: 'i' },
                k_product: { $regex: obj.k_product, $options: 'i' },
                createdAt: {
                    $gte: obj.fromDate,
                    $lte: obj.toDate
                }
            }


            if (obj.k_customer == null || obj.k_customer == '' || obj.k_customer == undefined) {
                delete search.k_customer;
            }
            if (obj.k_product == null || obj.k_product == '' || obj.k_product == undefined) {
                delete search.k_product;
            }
            if (obj.k_email == null || obj.k_email == '' || obj.k_email == undefined) {
                delete search.k_email;
            }

            if (obj.k_phone == null || obj.k_phone == '' || obj.k_phone == undefined) {
                delete search.k_phone;
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
            let or = await Order.find(search).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, or, message.getSuccess);

        } catch (error) {

            console.log('Error[Order:search]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update method with id
    update: async (req, res) => {

        try {
            let { id } = req.params;
            let obj = req.body;
            let r = await Order.findById(id);
            r.status = obj.status;
            await r.save();
            return sR.sendResponse(res, 200, r, message.updateSuccess);

        } catch (error) {

            console.log('Error[Order:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { id } = req.params;
            let r = await Order.findByIdAndRemove(id);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Order:remove]: ' + error);
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