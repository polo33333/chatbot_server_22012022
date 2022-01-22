
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const P_Wit = require('../functions/P_Wit.function');
const fetch = require('node-fetch');
const config = require('../../config');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let int = await Intent.find({ botId: botId });
            return sR.sendResponse(res, 200, int, message.getSuccess);

        } catch (error) {

            console.log('Error[Intent:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { intentId } = req.params;
            let int = await Intent.findById(intentId);
            return sR.sendResponse(res, 200, int, message.getSuccess);

        } catch (error) {

            console.log('Error[Intent:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let { botId } = req.params;
            let obj = req.body;
            obj.botId = botId;
            let json = await P_Wit.createIntent(obj.name, botId);
            if (json.error == undefined) {
                let int = await Intent.create(obj);
                return sR.sendResponse(res, 200, int, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Intent:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            let { botId, intentId } = req.params;
            let obj = req.body;
            let int = await Intent.findById(intentId);
            let ojw = {};
            let intentName = int.name;
            if (obj.name != undefined) {
                ojw.id = obj.name;
                int.name = obj.name;
            }
            if (obj.desc != undefined) {
                ojw.doc = obj.desc;
                int.desc = obj.desc;
            }
            let resWit = await fetch('https://api.wit.ai/entities/intent/values' + intentName + config.version, {
                method: "PUT",
                headers: { Authorization: config.auth + botId },
                body: JSON.stringify(ojw)

            });
            let json = await resWit.json();
            if (json.error == undefined) {
                let int1 = await Ịntent.updateOne({ _id: int._id }, int);
                return sR.sendResponse(res, 200, int1, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Intent:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId, intentId } = req.params;
            let curr = await Intent.findById(intentId);
            if (curr) {
                let json = await P_Wit.deleteIntent(curr.name, botId);
                if (json) {
                    let ent = await Intent.findByIdAndDelete(intentId);
                    return sR.sendResponse(res, 200, ent, message.deleteSuccess);
                }

                return sR.sendResponse(res, 400, null, message.deleteFail);
            }
            return sR.sendResponse(res, 200, null, null);

        } catch (error) {

            console.log('Error[Intent:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}