

const UnknowRequest = require('../models/UnknowRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let r = await UnknowRequest.find({ botId: botId});
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[UnknowRequest:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { requestId } = req.params;
            let r = await UnknowRequest.findById(requestId);

            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[UnknowRequest:getById]: ' + error);
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



    // remove method with id
    remove: async (req, res) => {
        try {

            let { requestId } = req.params;
            let r = await UnknowRequest.findByIdAndRemove(requestId);
            if (r) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[UnknowRequest:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}