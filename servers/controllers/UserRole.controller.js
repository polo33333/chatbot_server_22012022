
const Auth = require('../models/Auth.model');
const Bot = require('../models/Bot.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let result = await Bot.findOne({ "botId": botId });
            return sR.sendResponse(res, 200, result.partners, message.getSuccess);

        } catch (error) {

            console.log('Error[UserRole:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { botId, userName } = req.params;
            //let bot = await Bot.findOne( { "botId": botId, "partners": { $elemMatch: { userName: userName.toLowerCase() } } } );
            let bot = await Bot.findOne({ "botId": botId })
            if (bot) {
                let result = bot.partners.filter(f => f.userName.toLowerCase() == userName.toLowerCase())
                return sR.sendResponse(res, 200, result[0], message.getSuccess);
            }

            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[UserRole:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {
            let { botId } = req.params;

            let obj = req.body;
            obj.botId = botId;
            let bot = await Bot.findOne({ botId: botId });
            let auth = await Auth.findOne({ userName: obj.userName.toLowerCase(), numberTag: obj.numberTag,isActive: true, isDelete: false });
            if (auth) {
                auth.apps.push(botId);
                await auth.save();
                bot.partners.push({ userName: obj.userName, numberTag: obj.numberTag, owner: false, role: obj.role });
                await bot.save();

                return sR.sendResponse(res, 200, null, message.createSuccess);
            } else
                return sR.sendResponse(res, 400, null, error);
        } catch (error) {

            console.log('Error[UserRole:create]: ' + error);
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

            console.log('Error[UserRole:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {
            let { botId, userName } = req.params;

            let bot = await Bot.findOne({ botId: botId });
            bot.partners = bot.partners.filter(f => f.userName.toLowerCase() != userName.toLowerCase());
            await bot.save();

            let user = await Auth.findOne({ userName: userName.toLowerCase() });
            user.apps = user.apps.filter(f => f.toLowerCase() != botId.toLowerCase());
            await user.save();
            return sR.sendResponse(res, 200, null, message.deleteSuccess);
        } catch (error) {

            console.log('Error[UserRole:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    }
}