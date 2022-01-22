const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const P_Wit = require('../functions/P_Wit.function');

module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let r = await P_Wit.getUtterances(botId);
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[UnknowRequest:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getByIntent: async (req, res) => {
        try {

            let { botId, intent } = req.params;
            let r = await P_Wit.getUtterancesByIntent(botId, intent, 5);
            return sR.sendResponse(res, 200, r, message.getSuccess);

        } catch (error) {

            console.log('Error[UnknowRequest:getByIntent]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId } = req.params;
            let obj = req.body;
            let r = await P_Wit.deleteUtterances([{ text: obj.text }], botId);
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