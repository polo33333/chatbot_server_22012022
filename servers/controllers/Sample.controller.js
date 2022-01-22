const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Sample = require('../models/Sample.model');
const UnknowRequest = require('../models/UnknowRequest.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');
const P_WitFunction = require('../functions/P_Wit.function');
const { listen } = require('socket.io');


module.exports = {

    // get by IntentId
    getByIntentId: async (req, res) => {
        try {

            let { botId, intentId } = req.params;
            let result = await Intent.findById(intentId);
            if (result) {
                let response = await fetch('https://api.wit.ai/samples?entity_ids=intent&entity_values=' + result.name + '&limit=20', {
                    method: "GET",
                    headers: { Authorization: config.auth + botId },
                });
                let json = await response.json();
                //console.log(json)
                if (json.error == undefined) {
                    return sR.sendResponse(res, 200, json, message.getSuccess);
                }

                return sR.sendResponse(res, 404, null, message.getFail);
            }
            return sR.sendResponse(res, 404, null, message.getFail);

        } catch (error) {

            console.log('Error[Sample:getByIntentId]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getUnderStrand: async (req, res) => {
        try {

            let { botId } = req.params;
            let object = req.body;
            let arr = [];

            let json = await P_WitFunction.getMessage(object.text, botId);
            //console.log(json)
            if (json) {
                let arrKeys = Object.keys(json.entities);
                arrKeys.reverse().forEach(el => {
                    let obj = {};
                    if (json.entities[el]) {
                        obj.entity = json.entities[el][0].name;
                        obj.role = json.entities[el][0].role;
                        obj.value = json.entities[el][0].value;
                        obj.body = json.entities[el][0].body;
                        obj.confidence = json.entities[el][0].confidence;
                        arr.push(obj);
                    }
                });
                json.entities = arr;
                return sR.sendResponse(res, 200, json, message.getSuccess);
            }
            else {
                return sR.sendResponse(res, 400, null, message.getFail);
            }


        } catch (error) {

            console.log('Error[Sample:getUnderStrand]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {
            let { botId } = req.params;
            let obj = req.body;
            //console.log(req.body)
            let json = await P_WitFunction.createUtterances(obj, botId);
            //console.log(json)
            if (json.sent == true) {
                await UnknowRequest.findOneAndDelete({ text: obj.text, botId: botId });
                return sR.sendResponse(res, 200, null, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Sample:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        return sR.sendResponse(res, 400, null, message.updateFail);
    },

    // remove method with id
    remove: async (req, res) => {

        try {
            let { botId } = req.params;
            let obj = req.body;
            //const sam = await Sample.findById(sampleId);

            let response = await fetch('https://api.wit.ai/samples' + config.version, {
                method: "DELETE",
                headers: { Authorization: 'Bearer ' + botId },
                body: JSON.stringify([{
                    text: obj.text,
                }])
            });
            let json = await response.json();
            //console.log(json);
            if (json.error == undefined) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            else {
                return sR.sendResponse(res, 400, null, message.deleteFail);
            }


        } catch (error) {

            console.log('Error[Sample:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}