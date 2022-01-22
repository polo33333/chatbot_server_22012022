
const Customer = require('../models/Customer.model');
const Config = require('../models/Config.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');

module.exports = {

    // get all with intentId
    getAll: async (req, res) => {
        try {

            const { botId } = req.params;
            const cus = await Customer.find({ botId: botId, channel: { "$ne": 'web' }, name: { "$ne": undefined } }).sort({ createdAt: -1 });
            return sR.sendResponse(res, 200, cus, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { botId, customerId } = req.params;
            let cus = await Customer.findOne({ botId: botId, senderId: customerId });
            return sR.sendResponse(res, 200, cus, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getUserFollower: async (req, res) => {
        try {
            const { botId } = req.params;
            let conf = await Config.findOne({ botId: botId });
            let resWit = await fetch('https://openapi.zalo.me/v2.0/oa/getfollowers?data={"offset":0,"count":1}&access_token=' + conf.zalo_token, {
                method: "GET",
            });
            let json = await resWit.json();
            let total = json.data.total;
            for (let i = 0; i < total / 50; i++) {
                let resWit_info = await fetch('https://openapi.zalo.me/v2.0/oa/getfollowers?data={"offset":' + i * 50 + ',"count":50}&access_token=' + conf.zalo_token, {
                    method: "GET",
                });
                let json_info = await resWit_info.json();
                let user = json_info.data.followers;
                await create_UserInFor(botId, user);
            }

            return sR.sendResponse(res, 200, json, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:getUserFollowers]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    update: async (req, res) => {
        try {
            const { botId, customerId } = req.params;
            var obj = req.body;
            const cus = await Customer.findById(obj._id);
            cus.isSupport = obj.isSupport;
            await cus.save();
            return sR.sendResponse(res, 200, cus, message.getSuccess);

        } catch (error) {

            console.log('Error[Customer:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { customerId } = req.params;
            const his = await Customer.findByIdAndRemove(customerId);
            if (his) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Customer:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
};


create_UserInFor = async function (botId, user) {
    try {
        let conf = await Config.findOne({ botId: botId });
        let cus = await Customer.find({ botId: botId });
        for (let i = 0; i < user.length; i++) {
            let el = user[i];
            let his = await Customer.findOne({ senderId: el.user_id });
            if (!his) {
                
                let resWit = await fetch('https://openapi.zalo.me/v2.0/oa/getprofile?data={"user_id":' + el.user_id + '}&access_token=' + conf.zalo_token, {
                    method: "GET",

                });
                let json = await resWit.json();
                if (json) {
                    var obj = {};
                    obj.name = json.data.display_name;
                    obj.gender = json.data.user_gender;
                    obj.phone = null;
                    obj.senderId = json.data.user_id;
                    obj.channel = "zalo";
                    obj.isSupport = false;
                    obj.botId = botId;
                    await Customer.create(obj);
                }
            }


        }

    } catch (error) {
        console.log('Error[Customer:create_UserInFor]: ' + error);
        return;
    }
}