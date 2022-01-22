const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Block = require('../models/Block.model');
const Config = require('../models/Config.model');
const Auth = require('../models/Auth.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');
const P_Wit = require('../functions/P_Wit.function');
const M_Copy = require('../functions/M_CopyBot.function');

const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');


const data_botdefault = {
    bots: {

    },
    intents: [
        {
            name: 'chao_hoi',
            isSystem: true,
        },
        {
            name: 'tam_biet',
            isSystem: true,
        },
    ],
    entites: [
        {
            name: '$sender_id',
            roles: 'sender_id',
            type: 'String',
            desc: '[Biến hệ thống]: Id người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$sender_name',
            roles: 'sender_name',
            type: 'String',
            desc: '[Biến hệ thống]: Tên người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$gender',
            roles: 'gender',
            type: 'String',
            desc: '[Biến hệ thống]: Giới tính người gửi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$channel',
            roles: 'channel',
            type: 'String',
            desc: '[Biến hệ thống]: Kênh trao đổi',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$last_chat',
            roles: 'last_chat',
            type: 'String',
            desc: '[Biến hệ thống]: Thời gian chat cuối cùng',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },
        {
            name: '$last_intent',
            roles: 'last_intent',
            type: 'String',
            desc: '[Biến hệ thống]: Ý định cuối cùng',
            isSystem: true,
            isActive: true,
            isEntity: false,
        },



    ],
    blocks: [
        {

            isActive: true,
            isDefaut: true,
            isParent: false,
            name: "Trả lời mặc định",
            intentName: "$default_answer",
            position: 0
        },
        {

            isDefaut: true,
            isActive: true,
            isParent: false,
            name: "Welcome",
            intentName: "chao_hoi",
            position: 0
        }

    ],
    steps: [
    ],
    configs: [
        {
            fa_verify_token: Date.now().toString(),
        }
    ]

}




module.exports = {

    //get all
    getAllByAdmin: async (req, res, next) => {
        try {
            let result = await Bot.find({ isDelete: false });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // get bot by email
    getAll: async (req, res, next) => {
        try {
            let { email } = req.params;
            let { isActive } = req.query;
            let _curentUser = await Auth.findOne({ userName: email.toLowerCase(), isDelete: false });
            if (_curentUser) {
                let _ids = _curentUser.apps;
                if (isActive == 'true') {
                    let _result = await Bot.find({ isDelete: false, isActive: true }).where('botId').in(_ids).exec();
                    return sR.sendResponse(res, 200, _result, message.getSuccess);
                } else {
                    let _result = await Bot.find({ isDelete: false }).where('botId').in(_ids).exec();
                    return sR.sendResponse(res, 200, _result, message.getSuccess);
                }

            } else
                return sR.sendResponse(res, 404, null, message.getFail);


        } catch (error) {

            console.log('Error[Bot:getAll]: ' + error);

        }
    },

    // get by id
    getById: async (req, res) => {
        try {

            let { botId } = req.params;
            let result = await Bot.findOne({ botId: botId });
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // copy
    copy: async (req, res,callback) => {
        try {

            // let { botId } = req.params;
            // let result = await Bot.findOne({ botId: botId });
            // return sR.sendResponse(res, 200, result, message.getSuccess);
            let obj = req.body;

            let fileName = obj.name + Date.now().toString();
            let url = await P_Wit.export(null, obj.botId);
            let file = fs.createWriteStream("wit_resource/" + fileName + ".zip");
            let request =  await http.get(url.uri, function (response) {
                response.pipe(file);
                file.on('finish', async function() {
                   await M_Copy.copyBot(obj, obj.botId, fileName);
                  });
               
            });
            //let x = ;   
            return sR.sendResponse(res, 200, null, message.getSuccess);

        } catch (error) {

            console.log('Error[Bot:copy]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let obj = req.body;
            obj.appName = obj.name + Date.now().toString();
            let json = await P_Wit.import(obj.appName, './wit_resource/bot_v2-2020-07-11-07-29-06.zip', config.access_token);
            //let json = await P_Wit.import(obj.name,'./wit_resource/bot_v3-2020-07-26-02-18-25.zip',config.access_token);
            //console.log(obj)
            if (json.error == undefined) {
                obj.appId = json.app_id;
                obj.botId = json.access_token;
                obj.partners = [{ userName: obj.owner, owner: true, role: 0 }]
                let bot = await Bot.create(obj);
                if (bot) {
                    let _auth = await Auth.findOne({ userName: obj.owner.toLowerCase() })
                    _auth.apps.push(bot.botId);
                    await _auth.save();

                    let item = data_botdefault;
                    //let item = data_botdefault_test;
                    if (item['intents'].length > 0)
                        for (let i = 0; i < item['intents'].length; i++) {
                            let temp = item['intents'][i];
                            temp.botId = bot.botId;
                            await Intent.create(temp);
                        }
                    if (item['entites'].length > 0)
                        for (let i = 0; i < item['entites'].length; i++) {
                            let temp = item['entites'][i];
                            temp.botId = bot.botId;
                            await Entity.create(temp);

                        }
                    if (item['blocks'].length > 0)
                        for (let i = 0; i < item['blocks'].length; i++) {
                            let temp = item['blocks'][i];
                            temp.botId = bot.botId;
                            await Block.create(temp);

                        }

                    if (item['configs'].length > 0)
                        for (let i = 0; i < item['configs'].length; i++) {
                            let temp = item['configs'][i];
                            temp.botId = bot.botId;
                            temp.zalo_webhook = config.server_url + '/' + bot.botId + '/Zalo/Webhook';
                            temp.fa_webhook = config.server_url + '/' + bot.botId + '/Facebook/Webhook';
                            await Config.create(temp);

                        }


                    return sR.sendResponse(res, 200, bot, message.createSuccess);
                }

                return sR.sendResponse(res, 400, bot, message.createFail);
            }
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Bot:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {

        try {

            let obj = req.body;
            let bot = await Bot.findById(obj._id);
            if (bot) {
                bot.isActive = obj.isActive;
                await bot.save();
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            } else

                return sR.sendResponse(res, 404, null, message.notFound);


        } catch (error) {

            console.log('Error[Bot:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { botId } = req.params;
            let _temp = await Bot.findOne({ botId: botId });
            if (_temp) {
                _temp.isDelete = true;
                let _bot = await _temp.save();
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, _bot, message.deleteFail);

        } catch (error) {

            console.log('Error[Bot:removeUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    }
}