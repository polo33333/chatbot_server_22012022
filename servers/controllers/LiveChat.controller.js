

const LiveChat = require('../models/LiveChat.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Zalo = require('../functions/P_Zalo.function');
const FaceBook = require('../functions/P_Facebook.function');
const M_Message_handling = require('../functions/M_Message_handling.function');
const config = require('../../config');
const Config = require('../models/Config.model');

const C_String = require('../functions/C_String.function');


module.exports = {


    // get with botId
    getById: async (req, res) => {
        try {

            let { botId, customerId } = req.params;
            let chat = await LiveChat.find({ senderId: customerId }).sort({ createdAt: -1 }).limit(50);
            if (chat)
                return sR.sendResponse(res, 200, chat.reverse(), message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[LiveChat:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {
            let { botId } = req.params;
            let obj = req.body;
            let con = await Config.findOne({ botId: botId });
            //console.log(obj)
            if (obj.channel == C_String.zalo)
                await Zalo.sendMessage(obj.senderId, obj, con.zalo_token, botId);
            else if (obj.channel == C_String.face)
                await FaceBook.sendMessage(obj.senderId, obj, con.fa_page_token, botId);
            //await M_Message_handling.handleLiveChat(obj, obj.senderId, false, null, botId);

            return sR.sendResponse(res, 200, null, message.getSuccess);

        } catch (error) {

            console.log('Error[Live:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { LiveChatId } = req.params;
            const chat = await LiveChat.findByIdAndRemove(LiveChatId);
            if (chat) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[LiveChat:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}