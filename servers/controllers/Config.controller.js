
var Config = require('../models/Config.model');
var sR = require('../functions/M_SendResponse.function');
var message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config_host = require('../../config');

// get script by botid method
exports.getAll = async function (req, res) {
    try {
        let result = await Config.findOne({ botId: req.params.botId });
        if (result) {
            return sR.sendResponse(res, 200, result, message.getSuccess);
        }
        return sR.sendResponse(res, 404, null, message.notFound);
    }
    catch (error) {
        console.log('Error[Config:getAll]: ' + error);
        return sR.sendResponse(res, 400, null, message.getFail);
    }
}

// update script method

exports.update = async function (req, res) {

    try {
        let object = req.body;
        let currentConfig = await Config.findOne({ botId: req.params.botId });

        currentConfig.zalo_token = object.zalo_token;
        currentConfig.zalo_webhook = object.zalo_webhook;
        currentConfig.fa_page_token = object.fa_page_token;
        currentConfig.fa_verify_token = object.fa_verify_token;
        currentConfig.fa_webhook = object.fa_webhook;
        currentConfig.pageId = object.pageId;
        currentConfig.isReminder = object.isReminder;
        currentConfig.reminder_content = object.reminder_content;
        currentConfig.reminder_timeout = object.reminder_timeout;
        currentConfig.isSuggest = object.isSuggest;
        currentConfig.confidence = object.confidence;
        currentConfig.isActive = object.isActive;
        currentConfig.isFacebook = object.isFacebook;
        currentConfig.isZalo = object.isZalo;
        currentConfig.host = object.host;
        currentConfig.port = object.port;
        currentConfig.encryption = object.encryption;
        currentConfig.adminMail = object.adminMail;
        currentConfig.passAdminMail = object.passAdminMail;

        let result = await Config.findOneAndUpdate({ _id: currentConfig._id }, currentConfig, { new: true });
        return sR.sendResponse(res, 200, result, message.updateSuccess);

    } catch (error) {
        console.log('Error[Config:update]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}


exports.fa_connect = async function (req, res) {

    try {
        let object = req.body;
        let currentConfig = await Config.findOne({ botId: req.params.botId });

        currentConfig.fa_linked_user = object;
        if (object) {
            let response = await fetch("https://graph.facebook.com/v6.0/" + object.id + "/accounts?access_token=" + object.authToken, {
                method: "GET",
            });
            let json = await response.json();
            if (json) {
                currentConfig.fa_linked_page = json.data[0];


                if (currentConfig.fa_linked_page.access_token != undefined) {
                    let response2 = await fetch("https://graph.facebook.com/v6.0/" + "oauth/access_token?grant_type=fb_exchange_token&client_id=" + config_host.client_id + "&client_secret=" + config_host.client_secret + "&fb_exchange_token=" + currentConfig.fa_linked_page.access_token, {
                        method: "GET",
                    });


                    let json2 = await response2.json();
                    if (json2) {
                        currentConfig.fa_linked_page.access_token = json2.access_token;
                    }
                    //console.log(json)
                    if (currentConfig.fa_linked_page) {
                        let x = await fetch("https://graph.facebook.com/v6.0/" + currentConfig.fa_linked_page.id + "/subscribed_apps?subscribed_fields=feed,messages,messaging_postbacks,messaging_optins,message_reads,messaging_account_linking,message_reactions&access_token=" + currentConfig.fa_linked_page.access_token, {
                            method: "POST",
                        });

                        let x1 = await x.json();
                    }
                }

            }
        }

        let result = await Config.findOneAndUpdate({ _id: currentConfig._id }, currentConfig, { new: true });
        return sR.sendResponse(res, 200, result, message.updateSuccess);

    } catch (error) {
        console.log('Error[Config:fa_connect]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

exports.fa_disconnect = async function (req, res) {

    try {
        let currentConfig = await Config.findOne({ botId: req.params.botId });
        //console.log(currentConfig)

        if (currentConfig) {
            let response = await fetch("https://graph.facebook.com/v6.0/" + currentConfig.fa_linked_page.id + "/subscribed_apps?access_token=" + currentConfig.fa_linked_page.access_token, {
                method: "DELETE",
            });

            // let response1 = await fetch("https://graph.facebook.com/v6.0/" + currentConfig.fa_linked_user.id + "/permissions?access_token=" + currentConfig.fa_linked_user.authToken, {
            //     method: "DELETE",
            // });
            let json = await response.json();
            //let json1 = await response1.json();
            //console.log(json1)
            if (json.error == undefined) {
                //currentConfig.fa_linked_page = json.data[0];
                currentConfig.fa_linked_user = null;
                currentConfig.fa_linked_page = null;
                //console.log(json)
            }
        }

        let result = await Config.findOneAndUpdate({ _id: currentConfig._id }, currentConfig, { new: true });
        return sR.sendResponse(res, 200, result, message.updateSuccess);

    } catch (error) {
        console.log('Error[Config:fa_disconnect]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}


