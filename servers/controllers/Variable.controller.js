

const Entity = require('../models/Entity.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const { on } = require('../models/Entity.model');


module.exports = {

    // get all with variable
    getAll: async (req, res) => {
        try {
            let { botId } = req.params;
            let result = await Entity.find({ isActive: true, botId: botId });
            if (result)
                return sR.sendResponse(res, 200, result, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Variable:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get  variable by id
    getById: async (req, res) => {
        try {

            let { botId, variableId } = req.params;
            let sur = await Entity.find({ botId: botId, isDesign: true });
            if (sur)
                return sR.sendResponse(res, 200, sur, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Variable:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // create
    create: async (req, res) => {

        try {
            let { botId } = req.params;
            let obj = req.body;
            obj.isEntity = false;
            obj.isActive = true;
            obj.isSystem = false;
            //console.log(obj)
            let check = await Entity.findOne({ name: obj.name });
            if (check == null) {
                let ent = await Entity.create(obj);
                if (ent)
                    return sR.sendResponse(res, 200, ent, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Variable:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update
    update: async (req, res) => {

        try {
            let { botId, variableId } = req.params;
            let obj = req.body;
            let ent = await Entity.findById(variableId);
            let check = await Entity.findOne({ name: obj.name, _id: {'$ne': variableId } });

            if (check == null ) {
                if (obj.name != undefined) {
                    ent.name = obj.name;
                    ent.roles = obj.name;
                }
                if (obj.type != undefined) {
                    ent.type = obj.type;
                }
                let result = await ent.save();
                if (result)
                    return sR.sendResponse(res, 200, result, message.updateSuccess);
            }
            return sR.sendResponse(res, 400, null, message.updateFail);
        } catch (error) {

            console.log('Error[Variable:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId, variableId } = req.params;
            let result = await Entity.findByIdAndRemove(variableId);
            if (result)
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Variable:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}