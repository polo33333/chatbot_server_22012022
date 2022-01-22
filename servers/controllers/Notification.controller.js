

const Notification = require('../models/Notification.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Zalo = require('../functions/P_Zalo.function');
const FaceBook = require('../functions/P_Facebook.function');
const M_Message_handling = require('../functions/M_Message_handling.function');
const config = require('../../config');
const Config = require('../models/Config.model');
const sever = require('../../server');
const zalo = 'zalo';
const face = 'facebook';

module.exports = {



    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let noti = await Notification.find({ botId: botId }).sort({ createdAt: -1 }).limit(50);
            if (noti)
                return sR.sendResponse(res, 200, noti, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Notification:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (botId, title, type, obj) => {

        try {
            let data = {};
            data.botId = botId;
            data.type = type;
            data.title = title;
            data.data = obj;
            await Notification.create(data)
            sever.callsocket('notification', obj)
            return;

        } catch (error) {

            console.log('Error[Notification:create]: ' + error);
            return;
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId, notificationId } = req.params;
            let noti = await Notification.findByIdAndRemove(notificationId);
            if (noti) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Notification:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },

    // remove method with all
    removeAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let noti = await Notification.deleteMany({});
            if (noti) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Notification:removeAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },
}