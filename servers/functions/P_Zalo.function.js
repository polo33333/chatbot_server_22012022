
const Core = require('../functions/M_Core.function');
const M_Message_handling = require('./M_Message_handling.function');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const Config = require('../models/Config.model');
const config = require('../../config');
const C_String = require('./C_String.function');



exports.webhook = async (req, res) => {
    try {

        let zaloTemp = req.body;
        let con = await Config.findOne({ botId: req.params.botId });
        let _token = con.zalo_token;

        if (zaloTemp.event_name == 'user_send_text') {
            await M_Message_handling.handleCustomer(zaloTemp.sender.id, C_String.zalo, _token, req.params.botId);
            let isActive = await M_Message_handling.handleSupport(zaloTemp.sender.id, req.params.botId)
            let chechText = zaloTemp.message.text.search('{');

            if (chechText != -1) {
                await M_Message_handling.handleLiveChat(zaloTemp.message.text, zaloTemp.sender.id, true, 'btn', req.params.botId);
                if (isActive)
                    await Core.handlePostbackPlaform(zaloTemp.sender.id, zaloTemp.message.text, C_String.zalo, _token, req.params.botId);
            }
            else {
                await M_Message_handling.handleLiveChat(zaloTemp.message.text, zaloTemp.sender.id, true, 'text', req.params.botId);
                if (isActive)
                    await Core.handleText(zaloTemp.sender.id, zaloTemp.message.text, C_String.zalo, _token, req.params.botId);
            }
            return sR.sendResponse(res, 200, null, message.getSuccess);
        }
        return sR.sendResponse(res, 200, null, message.getSuccess);
    } catch (error) {
        console.log('Error[Zalo:webhook]: ' + error);
        return sR.sendResponse(res, 200, null, error);
    }
};

// send message
exports.sendMessage = async (senderId, temp_message, access_token, botId) => {
    try {
        var sendObject = null;
        //console.log(temp_message)
        switch (temp_message.template_type) {
            case "text":
                sendObject = text_template(senderId, temp_message);
                break;
            case "list":
                sendObject = list_template(senderId, temp_message);
                break;
            case "list_product": {
                for (let i = 0; i < temp_message['elememts'].length; i++) {
                    let el = temp_message.elememts[i];
                    sendObject = list_product_template(senderId, el);

                    await fetch("https://openapi.zalo.me/v2.0/oa/message?access_token=" + access_token, {
                        method: "POST",
                        body: JSON.stringify(
                            sendObject
                        )
                    });
                    await new Promise(resolve => setTimeout(resolve, 300));
                }
                return;
            }
            case "media":
                sendObject = media_template(senderId, temp_message);
                break;
            default:
                sendObject = request_user_info_template(senderId, temp_message);
                break;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await fetch("https://openapi.zalo.me/v2.0/oa/message?access_token=" + access_token, {
            method: "POST",
            body: JSON.stringify(
                sendObject
            )
        });

        const json = await response.json();
        if (json.error == 0)
            await M_Message_handling.handleLiveChat(temp_message, senderId, false, temp_message.template_type, botId);
        return;
    } catch (error) {

        console.log('Error[Zalo:sendMessage]: ' + error);
        return;
    }
};



text_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            text: "",
            attachment: {
                type: "template",
                payload: {
                    buttons: [
                    ]
                }
            }
        },
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.text = temp_message.content == null ? '' : temp_message.content;
    if (temp_message.button.length > 0)
        sendObject.message.attachment.payload.buttons = add_button(temp_message.button)

    return sendObject;
}

list_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "list",
                    elements: [
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.attachment.payload.elements = add_element(temp_message.elememts);
    return sendObject;

}

list_product_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            attachment: {
                type: "template",
                payload: {
                    template_type: "list",
                    elements: [
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    sendObject.message.attachment.payload.elements[0] = { title: temp_message.title, subtitle: temp_message.subtitle == null ? ' ' : temp_message.subtitle == '' ? ' ' : temp_message.subtitle, image_url: config.host_url + temp_message.image_url };
    sendObject.message.attachment.payload.buttons = add_button(temp_message.button);

    return sendObject;

}

media_template = (senderId, temp_message) => {
    let sendObject = {
        recipient: {
            user_id: "",
        },
        message: {
            text: "",
            attachment: {
                type: "template",
                payload: {
                    template_type: "media",
                    elements: [{
                        media_type: "image",
                        url: ""
                    }
                    ],
                    buttons: [

                    ]
                }
            }
        }
    };
    sendObject.recipient.user_id = senderId;
    if (temp_message.title == undefined || temp_message.title == null || temp_message.title == '')
        sendObject.message.text = '';
    else
        sendObject.message.text = temp_message.title;
    sendObject.message.attachment.payload.elements[0].url = config.host_url + temp_message.image_url;
    sendObject.message.attachment.payload.buttons = add_button(temp_message.button);
    return sendObject;

}

add_button = (button) => {
    try {

        let buttons = [];
        for (let ibtn = 0; ibtn < button.length; ibtn++) {
            switch (button[ibtn].type) {
                case "url":
                    {
                        let elbtn = {
                            title: "",
                            payload: {
                                url: ""
                            },
                            type: "oa.open.url"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.payload.url = button[ibtn].url;
                        buttons.push(elbtn);

                    }
                    break;
                case "phone":
                    {
                        let elbtn = {
                            title: "",
                            payload: {
                                phone_code: ""
                            },
                            type: "oa.open.phone"
                        };
                        elbtn.title = button[ibtn].title;
                        elbtn.payload.phone_code = button[ibtn].phone;
                        buttons.push(elbtn);

                    }
                    break;
                case "callback":
                    {
                        let elbtn = {
                            title: "",
                            payload: "",
                            type: "oa.query.hide"
                        };
                        elbtn.title = button[ibtn].title;
                        if (button[ibtn].redirectToBlock == undefined || button[ibtn].redirectToBlock == '')
                            button[ibtn].redirectToBlock = null;
                        // if (button[ibtn].key == undefined || button[ibtn].key == '')
                        //     button[ibtn].key = null;
                        // if (button[ibtn].value == undefined || button[ibtn].value == '')
                        //     button[ibtn].value = null;
                        if (button[ibtn].attachmentData == undefined || button[ibtn].attachmentData == '')
                        button[ibtn].attachmentData = null;
                        let payData = {
                            redirectToBlock: button[ibtn].redirectToBlock,
                            // key: button[ibtn].key,
                            // value: button[ibtn].value
                            attachmentData:  button[ibtn].attachmentData
                        }
                        elbtn.payload = JSON.stringify(payData);
                        buttons.push(elbtn);
                    }
                    break;

                default:
                    break;
            }

        }
        return buttons;
    } catch (error) {
        console.log('Error[Zalo:addbutton]: ' + error);
        return [];
    }

}

add_default_action = function (action) {
    try {
        if (action) {
            switch (action.type) {
                case "url":
                    {
                        let el = {
                            url: "",
                            type: "oa.open.url"
                        };
                        el.url = action.url;
                        return el;
                    }
                case "phone":
                    {
                        let el = {
                            payload: {
                                phone_code: ""
                            },
                            type: "oa.open.phone"
                        };
                        el.payload.phone_code = action.phone;

                        return el;
                    }
                case "callback":
                    {
                        let el = {
                            payload: "",
                            type: "oa.query.hide"
                        };

                        if (action.value == undefined || action.value == '')
                            action.value = null;
                        let payData = {
                            redirectToBlock: action.redirectToBlock == undefined ? null : action.redirectToBlock,
                            value: action.value
                        }
                        el.payload = JSON.stringify(payData);
                        return el;
                    }

                default:
                    break;
            }
        }
    } catch (error) {
        console.log('Error[Zalo:adddefautaction]: ' + error);
        return [];
    }

}

add_element = (elememts) => {
    try {
        let items = [];
        for (let it = 0; it < elememts.length; it++) {
            let elit = {
            };

            elit.title = elememts[it].title;
            elit.subtitle = elememts[it].subtitle == null ? ' ' : elememts[it].subtitle == '' ? ' ' : elememts[it].subtitle;
            elit.image_url = config.host_url + elememts[it].image_url;
            elit.default_action = add_default_action(elememts[it].button[0]);
            items.push(elit);
        }
        return items;
    } catch (error) {
        console.log('Error[Zalo:addElement]: ' + error);
        return [];
    }

}

// comming soon
request_user_info_template = (senderId, temp_message) => {

}
