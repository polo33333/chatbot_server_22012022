
const CoreGuest = require('../functions/M_Core_Guest.function');
//const M_Message_handling = require('./M_Message_handling.function');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const Config = require('../models/Config.model');
const Bot = require('../models/Bot.model');
//const config = require('../../config');
const C_String = require('./C_String.function');



exports.webhook = async (req, res) => {
    try {

        let guestTemp = req.body;
        let bot = await Bot.findOne({ botId: req.params.botId, isActive: true, isDelete: false });
        let conf = await Config.findOne({ botId: req.params.botId, isActive: true, isGuest: true, _id: guestTemp.token });
        //console.log(guestTemp);

        if (guestTemp.event_name == 'user_send_text') {
            let chechText = guestTemp.message.search('{');
            let re = null
            if (chechText != -1) {
                if (conf && bot) {
                    re = await CoreGuest.handlePostback_guest(guestTemp.senderId, guestTemp.message, C_String.guest, null, req.params.botId);
                }
            } else {
                if (conf && bot) {
                    re = await CoreGuest.handleText_guest(guestTemp.senderId, guestTemp.message, C_String.guest, null, req.params.botId);
                }

            }
            return sR.sendResponse(res, 200, re, message.getSuccess);
        }
        return sR.sendResponse(res, 200, null, message.notSupport);
    } catch (error) {
        console.log('Error[Guest:webhook]: ' + error);
        return sR.sendResponse(res, 200, null, error);
    }
};
