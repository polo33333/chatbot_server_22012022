const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');
const P_WitFunction = require('../functions/P_Wit.function');


module.exports = {


    // add new keyword to entity
    create: async (req, res) => {
        try {

            let { botId, entityId } = req.params;
            let obj = req.body;
            let ent = await Entity.findById(entityId);
            if (ent) {

                let json = await P_WitFunction.createKeyword(ent.name, obj.value, botId);
                if (json.error == undefined) {
                    return sR.sendResponse(res, 200, json, message.createSuccess);
                }
                return sR.sendResponse(res, 400, null, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);
        } catch (error) {

            console.log('Error[Keywords:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // remove keyword of entity
    remove: async (req, res) => {
        try {
            let { botId, entityId } = req.params;
            let obj = req.body;
            let ent = await Entity.findById(entityId);
            if (ent) {
                let json = await P_WitFunction.deleteKeyword(ent.name, obj.value, botId);
                if (json.error == undefined) {

                    return sR.sendResponse(res, 200, null, message.deleteSuccess);
                }
                else {
                    return sR.sendResponse(res, 400, null, message.deleteFail);
                }
            }
            return sR.sendResponse(res, 400, null, null);
        } catch (error) {

            console.log('Error[Keywords:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}