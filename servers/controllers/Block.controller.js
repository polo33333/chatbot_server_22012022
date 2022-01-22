
const Block = require('../models/Block.model');
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let bloc = await Block.find({ botId: botId, isParent: false });
            return sR.sendResponse(res, 200, bloc, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // get menu with botId
    getMenu: async (req, res) => {
        try {

            let { botId } = req.params;
            let parent = await Block.find({ botId: botId, isParent: true }).sort({ position: 1 });
            let menu = [];
            for (let i = 0; i < parent.length; i++) {
                let el = {};
                el['item'] = parent[i];
                let child = await Block.find({ botId: botId, blockId: parent[i]._id });
                el['childs'] = child;
                menu.push(el);
            }
            return sR.sendResponse(res, 200, menu, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getMenu]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get menu with botId
    getIntentInvalid: async (req, res) => {
        try {

            let { botId } = req.params;
            let intent = await Intent.find({ botId: botId });
            let parent = await Block.find({ botId: botId, isParent: false })
            let menu = [];
            for (let i = 0; i < intent.length; i++) {
                let el = intent[i];
                let count = 0;
                for (let i2 = 0; i2 < parent.length; i2++) {
                    let el2 = parent[i2];
                    if (el.name == el2.intentName) {
                        count = 0;
                        break;
                    } else {
                        count++;
                    }
                }
                if (count > 0)
                    menu.push({ name: el.name, disabled: true });
                else
                    menu.push({ name: el.name, disabled: false });
            }
            return sR.sendResponse(res, 200, menu, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getIntentInvalid]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // get defaut with botId
    getDefaut: async (req, res) => {
        try {

            let { botId } = req.params;
            let bloc = await Block.findOne({ isDefaut: true, botId: botId });
            return sR.sendResponse(res, 200, bloc, message.getSuccess);

        } catch (error) {

            console.log('Error[Block:getDefaut]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // get by id
    getById: async (req, res) => {
        try {
            let { blockId } = req.params;
            let bloc = await Block.findById(blockId);
            if (bloc)
                return sR.sendResponse(res, 200, bloc, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Block:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let { botId } = req.params;
            let obj = req.body;
            obj.botId = botId;
            if (obj.isParent) {
                let parent = await Block.find({ botId: botId, isParent: true });
                if (parent.length > 0) {
                    obj.position = parent.length;
                    obj.name = obj.name + ' ' + (obj.position + 1).toString()
                }

            }
            let bloc = await Block.create(obj);
            if (bloc)
                return sR.sendResponse(res, 200, bloc, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Block:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            let { botId, blockId } = req.params;
            let obj = req.body;
            if (blockId != 'null') {
                let bloc_curr = await Block.findById(blockId);
                if (obj.name != undefined) {
                    bloc_curr.name = obj.name;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }

                if (obj.intentName != undefined) {
                    bloc_curr.intentName = obj.intentName;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }

                if (obj.isActive != undefined) {
                    bloc_curr.isActive = obj.isActive;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }
            }
            if (obj.position != undefined) {

                let block_list = await Block.find({ botId: botId, isParent: true });
                for (let i = 0; i < block_list.length; i++) {
                    let el = block_list[i];
                    for (let i1 = 0; i1 < obj.position.length; i1++) {
                        let el1 = obj.position[i1];
                        if (el._id == el1) {
                            el.position = i1;
                            break;
                        }
                    }
                    await el.save();
                }
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            }


        } catch (error) {

            console.log('Error[Block:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { blockId } = req.params;
            let bloc = await Block.findByIdAndRemove(blockId);
            if (bloc) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Block:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}