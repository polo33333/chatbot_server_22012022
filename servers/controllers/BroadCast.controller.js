
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
// const fetch = require('node-fetch');
// const conf = require('../../config');
const M_BroadCast_handling = require('../functions/M_BroadCast_handling.function');
const zalo = 'zalo';
const face = 'facebook';

module.exports = {

    // get histrory
    getHistrory: async (req, res) => {
        try {

            let { botId } = req.params;
            let ans = await BroadCast.find({ 'isSchedule': false, botId: botId }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[BroadCast:getHistrory]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get Schedule
    getSchedule: async (req, res) => {
        try {
            let { botId } = req.params;
            let ans = await BroadCast.find({ 'isSchedule': true, botId: botId }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, ans, message.getSuccess);

        } catch (error) {

            console.log('Error[BroadCast:getSchedule]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {
        try {

            let { botId } = req.params;
            let con = await Config.findOne({ botId: botId });
            let obj = req.body;
            if (!obj.isSchedule) {
                switch (obj.channel) {
                    case zalo:
                        {
                            await M_BroadCast_handling.handleZaloBroadCast(obj.blockId, botId);
                        }
                        break;
                    case face:
                        {
                            await M_BroadCast_handling.handleFaceBroadCast(obj.blockId, botId);
                        }
                        break;

                    default: {
                        await M_BroadCast_handling.handleFaceBroadCast(obj.blockId, botId);
                        await M_BroadCast_handling.handleZaloBroadCast(obj.blockId, botId);
                    }
                        break;
                }

            }
            await BroadCast.create(obj);
            return sR.sendResponse(res, 200, null, message.createSuccess);

        } catch (error) {

            console.log('Error[BroadCast:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {
            return sR.sendResponse(res, 400, null, error);

        } catch (error) {

            console.log('Error[BroadCast:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { broadCastId } = req.params;
            await BroadCast.findByIdAndRemove(broadCastId);
            return sR.sendResponse(res, 200, null, message.deleteSuccess);

        } catch (error) {

            console.log('Error[BroadCast:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}

