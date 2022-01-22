const Entity = require('../models/Entity.model');
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
            let result = await Entity.find({ botId: botId, isActive: true, isEntity: true });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Entity:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // test
    getEntities: async (req, res) => {
        try {
            let { botId } = req.params;
            let { isActive, isEntity } = req.query;
            let result = null;
            if (isEntity == undefined) {
                result = await Entity.find({ botId: botId, isActive: isActive });
            }
            if (isActive == undefined) {
                result = await Entity.find({ botId: botId, isEntity: isEntity });
            }
            if (isActive == undefined && isEntity == undefined) {
                result = await Entity.find({ botId: botId, isActive: isActive, isEntity: isEntity });
            }

            if (isActive != undefined && isEntity != undefined) {
                result = await Entity.find({ botId: botId, isActive: isActive, isEntity: isEntity });
            }
            if (result) {
                return sR.sendResponse(res, 200, result, message.getSuccess);
            }
            return sR.sendResponse(res, 400, null, message.getFail);
        } catch (error) {
            console.log('Error[Entity:getEntities]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {

            let { botId, entityId } = req.params;
            let result = await Entity.findById(entityId);
            if (result) {
                return sR.sendResponse(res, 200, result, message.getSuccess);
            }

            return sR.sendResponse(res, 200, null, message.getFail);
        } catch (error) {

            console.log('Error[Entity:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getInfo: async (req, res) => {
        try {

            let { botId, entityId } = req.params;
            let ent = await Entity.findById(entityId);
            if (ent) {
                let json = await P_Wit.getEntity(ent.name, botId);
                return sR.sendResponse(res, 200, json, message.getSuccess);
            }

            return sR.sendResponse(res, 400, null, message.getFail);
        } catch (error) {

            console.log('Error[Entity:getInfo]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let { botId } = req.params;
            let obj = req.body;
            obj.botId = botId;
            obj.roles = obj.name;
            let temp = obj.lookups;
            obj.lookups = obj.lookups == 3 ? ['free-text', 'keywords'] : obj.lookups == 1 ? ['keywords'] : ['free-text'];
            let json = await P_Wit.createEntity(obj, botId);
            obj.lookups = temp;
            if (json.error == undefined) {
                let ent = await Entity.create(obj);
                return sR.sendResponse(res, 200, ent, message.createSuccess);
            }
            return sR.sendResponse(res, 200, null, message.createFail);

        } catch (error) {

            console.log('Error[Entity:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update method with id
    update: async (req, res) => {
        try {

            let { botId, entityId } = req.params;
            let obj = req.body;
            let ent = await Entity.findById(entityId);
            let entityName = ent.name;
            let ojw = {};

            if (obj.name != undefined) {
                ojw.name = obj.name;
                ojw.roles = [obj.name];
                ent.name = obj.name;
                ent.roles = obj.name;
            } else {
                ojw.name = ent.name;
                ojw.roles = [ent.name];
            }
            if (obj.lookups != undefined) {
                ojw.lookups = obj.lookups == '3' ? ['free-text', 'keywords'] : obj.lookups == '1' ? ['keywords'] : ['free-text'];
                ent.lookups = Number(obj.lookups);
            }

            let json = await P_Wit.updateEntity(entityName, ojw, botId);
            if (json.error == undefined) {
                let entity = await ent.save();
                return sR.sendResponse(res, 200, entity, message.createSuccess);
            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Entity:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {


            let { botId, entityId } = req.params;
            let curr = await Entity.findById(entityId);
            if (curr) {
                let json = await P_Wit.deleteEntity(curr.name, botId);
                if (json) {
                    let ent = await Entity.findByIdAndDelete(entityId);
                    return sR.sendResponse(res, 200, ent, message.deleteSuccess);
                }

                return sR.sendResponse(res, 400, null, message.deleteFail);
            }
            return sR.sendResponse(res, 200, null, null);
        } catch (error) {

            console.log('Error[Entity:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}

// check is wit entity if start name  wit/...
isCheckSystem = (name) => {
    let wit_entity = name.slice(4);
    if (wit_entity == 'wit/')
        return true;
    return false;

}