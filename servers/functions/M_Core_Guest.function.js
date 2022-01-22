const Memory = require('../models/Memory.model');
const Block = require('../models/Block.model');
const Step = require('../models/Step.model');
const SupportRequest = require('../models/SupportRequest.model');
const Customer = require('../models/Customer.model');
const Order = require('../models/Order.model');
const Entity = require('../models/Entity.model');
const Config = require('../models/Config.model');
const Zalo = require('../functions/P_Zalo.function');
const FaceBook = require('../functions/P_Facebook.function');
const Notification = require('../controllers/Notification.controller');
const M_Message_handling = require('./M_Message_handling.function');
const P_Wit = require('./P_Wit.function');
const M_Condition = require('../functions/M_Condition.function');
const fetch = require('node-fetch');
const config = require('../../config');
const sever = require('../../server');
const C_String = require('./C_String.function');
const M_MappingValue = require('./M_MappingValue.function');
const Mail = require('../functions/P_SendMail.function');


// ***main function***
// handle message type  text
exports.handleText_guest = async (sender_id, message, channel, channel_token, botId) => {

    try {
        let mem = await getMemmory_guest(sender_id, channel, botId);
        let works = mem.works;
        let is_mapping = false;
        let wit_object = await wit_understanding_guest(message, botId);
        let conf = await Config.findOne({ botId: botId });
        let works_default = await getWorks_guest(C_String.default_answer, null, botId);
        await M_Message_handling.handleCustomer(sender_id, channel, channel_token, botId);

        if (wit_object != null) {
            if (wit_object.intents.length != 0) {
                let intents = await intents_invalid_guest(wit_object.intents, conf);
                if (intents.length == 1) {
                    works = await getWorks_guest(intents[0].name, null, botId);
                    if (Object.keys(wit_object.entities).length != 0)
                        await saveVariable_guest(mem._id, wit_object.entities, true);
                    // await M_Message_handling.handleHistory(sender_id, message, intents[0].name, 1, intents[0].confidence, botId);

                }
                //
                if (intents.length == 0) {
                    await M_Message_handling.handleUnknowRequest(message, sender_id, botId);
                    //await M_Message_handling.handleHistory(sender_id, message, null, 0, null, botId);
                    works = mergeArray_guest(works_default, works);
                }
                // bot suggest
                if (intents.length > 1) {
                    //await M_Message_handling.handleHistory(sender_id, message, null, 3, null, botId);
                    if (conf.isSuggest)
                        return await bot_suggest(sender_id, intents, channel, channel_token, botId);
                    else {
                        works = await getWorks_guest(intents[0].name, null, botId);
                        if (Object.keys(wit_object.entities).length != 0)
                            await saveVariable_guest(mem._id, wit_object.entities, true);
                        //await M_Message_handling.handleHistory(sender_id, message, intents[0].name, 1, intents[0].confidence, botId);
                    }
                }

            } else {
                if (works.length == 0) {
                    await M_Message_handling.handleUnknowRequest(message, sender_id, botId);
                    //await M_Message_handling.handleHistory(sender_id, message, null, 0, null, botId);
                    works = mergeArray_guest(works_default, works);
                } else {
                    is_mapping = true;
                    //await M_Message_handling.handleHistory(sender_id, message, null, 4, null, botId);
                }
            }

            mem.works = works;
            await mem.save();
            return await bot_brain_guest(message, sender_id, mem._id, is_mapping, channel, channel_token, botId);
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:handleText]: ' + error);
        return null;
    }
};

// handle message type  postback
exports.handlePostback_guest = async (sender_id, message, channel, channel_token, botId) => {

    try {
        let mem = await getMemmory_guest(sender_id, channel, botId);
        let works = mem.works;
        let obj = JSON.parse(message);

        if (obj.redirectToBlock != null) {

            works = await getWorks_guest(null, obj.redirectToBlock, botId);
            //await M_Message_handling.handleHistory(sender_id, message, null, 2, null, botId);

            // if (obj.key != null && obj.value != null)
            //     await saveVariable_guest(mem._id, [{ _id: obj.key, value: obj.value }], false);
            if (obj.attachmentData != null) {
                for (let i = 0; i < obj.attachmentData.length; i++) {
                    let el = obj.attachmentData[i];
                    await saveVariable(mem._id, [{ _id: el.key, value: el.value }], false);
                }

                //console.log(v)
            }


            mem.works = works;
            await mem.save();
            let re = await bot_brain_guest(message, sender_id, mem._id, false, channel, channel_token, botId);
            return re;
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:handlePostback]: ' + error);
        return null;
    }
}

// ***end main function***

// ***AI function***

// mapping template for steps
bot_brain_guest = async (message, sender_id, memoryId, is_mapping, channel, channel_token, botId) => {
    try {
        let mem = await Memory.findById(memoryId);
        let ent = await Entity.find({ botId: botId });
        let data = [];

        while (mem.works[0] != undefined) {
            if (!M_Condition.condition_checking(mem.works[0].conditions, ent, mem))
                mem.works.shift();
            else
                switch (mem.works[0].type) {
                    case C_String.text_card:
                        {
                            mem.works[0].items[0].content = M_MappingValue.mapping(mem.works[0].items[0].content, mem.variables, ent);
                            data.push(mem.works[0].items[0]);
                            //await bot_send_guest(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            mem.works.shift();
                        }
                        break;
                    case C_String.image_card:
                        {
                            //await bot_send_guest(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            data.push(mem.works[0].items[0])
                            mem.works.shift();
                        }
                        break;
                    case C_String.info_card:
                        {
                            //await bot_send_guest(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                            data.push(mem.works[0].items[0])
                            mem.works.shift();
                        }
                        break;
                    case C_String.product_card:
                        {
                            let pros = mem.works[0].items[0];
                            let variable_search = mem.variables.filter(o => o._id === pros.variable_id);
                            let result = [];
                            if (variable_search.length > 0)
                                pros.elememts.forEach(pro => {
                                    if (variable_search[0].value.toLowerCase() == pro.value.toLowerCase()) {
                                        result.push(pro);
                                    }
                                });

                            if (result.length > 0) {
                                let obj_pro = {};
                                obj_pro['elememts'] = result;
                                obj_pro['template_type'] = 'list';
                                data.push(obj_pro);
                                //await bot_send_guest(sender_id, obj_pro, channel, channel_token, botId);
                            } else {
                                let obj_pro = {};
                                obj_pro['content'] = C_String.not_found_item;
                                obj_pro['button'] = [];
                                obj_pro['template_type'] = 'text';
                                data.push(obj_pro)
                                //await bot_send_guest(sender_id, obj_pro, channel, channel_token, botId);
                            }

                            mem.works.shift();
                        }
                        break;
                    case C_String.go_to_card:
                        {
                            works = await getWorks_guest(null, mem.works[0].items[0].blockId, botId);
                            mem.works = works;

                        }
                        break;
                    case C_String.form_card:
                        {
                            if (is_mapping) {
                                if (Validate_guest(mem.works[0].validation, message)) {
                                    let value = await wit_value_checking_guest(mem.works[0].validation, mem.works[0].variable_id, message, botId)
                                    mem.variables.push({ _id: mem.works[0].variable_id, value: value });
                                    mem.works.shift();
                                    is_mapping = false;
                                }
                                else {
                                    //await bot_send_guest(sender_id, mem.works[0], channel, channel_token, botId);
                                    await mem.save();
                                    data.push(mem.works[0]);
                                    return data;
                                }
                            } else {
                                let variable_check = mem.variables.find(o => o._id === mem.works[0].variable_id);
                                if (variable_check) {
                                    mem.works.shift();
                                } else {
                                    data.push(mem.works[0]);
                                    //await bot_send_guest(sender_id, mem.works[0], channel, channel_token, botId);
                                    await mem.save();
                                    return data;
                                }
                            }

                        }
                        break;
                    case C_String.memory_card:
                        {
                            if (mem.works[0].items[0].isRemoveAll) {
                                let ent = await Entity.find({ botId: botId, isActive: true, isSystem: true, isEntity: false });
                                mem.variables = mem.variables.filter(m => {
                                    return ent.find(e => e._id == m._id);
                                });
                            }
                            else {
                                if (mem.works[0].items[0].removeVariables.length > 0) {
                                    for (let i1 = 0; i1 < mem.works[0].items[0].removeVariables.length; i1++) {
                                        let el1 = mem.works[0].items[0].removeVariables[i1];
                                        let temp = mem.variables.find(o => o._id === el1);
                                        if (temp) {
                                            let index = mem.variables.indexOf(temp);
                                            mem.variables.splice(index, 1);

                                        }
                                    }
                                }
                            }

                            if (mem.works[0].items[0].setVariables.length > 0) {
                                for (let i2 = 0; i2 < mem.works[0].items[0].setVariables.length; i2++) {
                                    const el2 = mem.works[0].items[0].setVariables[i2];

                                    let temp2 = mem.variables.find(o => o._id === el2.variable_id);
                                    if (temp2) {
                                        let index2 = mem.variables.indexOf(temp2);
                                        mem.variables[index2].value = el2.value;
                                    } else {
                                        mem.variables.push({ _id: el2.variable_id, value: el2.value });
                                    }

                                }
                            }
                            mem.works.shift();

                        }
                        break;
                    case C_String.api_card:
                        {
                            await apifunc_guest(memoryId, mem.works[0].items[0]);
                            mem.works.shift();
                        }
                        break;
                    case C_String.support_card:
                        {

                            mem.works[0].items[0].content = M_MappingValue.mapping(mem.works[0].items[0].content, mem.variables, ent);
                            data.push(mem.works[0].items[0]);
                            await supportfunc_guest(memoryId, mem.works[0].items[0], channel_token);
                            mem.works.shift();
                        }
                        break;
                    case C_String.phone_card:
                        {

                            if (Validate_guest(mem.works[0].items[0].validation, message)) {
                                if (mem.works[0].items[0].saveToVariable) {
                                    await saveVariable_guest(memoryId, [{ _id: mem.works[0].items[0].saveToVariable, value: message.replace(/\s/g, '') }], false);

                                }
                                mem = await Memory.findById(memoryId);
                                mem.works.shift();

                                let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
                                if (cus) {
                                    cus.phone = message.replace(/\s/g, '');
                                    await cus.save();
                                }
                                message = null;
                            }
                            else {
                                await mem.save();
                                data.push(mem.works[0].items[0]);
                                //await bot_send_guest(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                                return data;
                            }
                        }
                        break;
                    case C_String.email_card:
                        {

                            if (Validate_guest(mem.works[0].items[0].validation, message)) {
                                if (mem.works[0].items[0].saveToVariable) {
                                    await saveVariable_guest(memoryId, [{ _id: mem.works[0].items[0].saveToVariable, value: message.replace(/\s/g, '') }], false);
                                }
                                mem = await Memory.findById(memoryId);
                                mem.works.shift();

                                let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
                                if (cus) {
                                    cus.email = message.replace(/\s/g, '');
                                    await cus.save();
                                }
                                message = null;
                            }
                            else {
                                await mem.save();
                                data.push(mem.works[0].items[0]);
                                //await bot_send_guest(sender_id, mem.works[0].items[0], channel, channel_token, botId);
                                return data;
                            }
                        }
                        break;
                    case C_String.admin_via_email_card:
                        {
                            // do something
                            let temp = await Config.findOne({ botId: botId });
                            //console.log(temp)
                            let emailBody = M_MappingValue.mapping(mem.works[0].items[0].emailBody, mem.variables, ent)
                            await Mail.sendMail(mem.works[0].items[0].emailAddress, mem.works[0].items[0].title, emailBody, temp.host, temp.port, temp.encryption, temp.adminMail, temp.passAdminMail);
                            mem.works.shift();
                            message = null;
                        }
                        break;
                    case C_String.survey_card:
                        {
                            let data1 = mem.works[0].items[0];
                            data1.button = [{
                                title: "Đi đến Khảo sát",
                                type: "url",
                                url: config.server_url + '/surveys?id=' + data1.surveyId + '&sender_id=' + sender_id,
                                //url: config.server_url,
                            }];
                            data.push(mem.works[0].items[0]);
                            mem.works.shift();
                            //await bot_send_guest(sender_id, data, channel, channel_token, botId);
                        }
                        break;
                    case C_String.order_card:
                        {
                            mem.works[0].items[0].content = M_MappingValue.mapping(mem.works[0].items[0].content, mem.variables, ent);
                            let dataOrder = {
                                senderId: sender_id,
                                channel: channel,
                                botId: botId,
                                k_customer: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_customer.key, mem.variables),
                                k_phone: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_phone.key, mem.variables),
                                k_email: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_email.key, mem.variables),
                                k_price: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_price.key, mem.variables),
                                k_count: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_count.key, mem.variables),
                                k_amount: Number(mem.works[0].items[0].k_price.value) * (mem.works[0].items[0].k_count.value == null ? 1 : Number(mem.works[0].items[0].k_count.value)),
                                k_product: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_product.key, mem.variables),
                                k_address: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_address.key, mem.variables),
                                k_note: M_MappingValue.mappingForOrder(mem.works[0].items[0].k_note.key, mem.variables)
                            }

                            dataOrder.k_amount = Number(dataOrder.k_count) * Number(dataOrder.k_price);

                            // mem.works[0].items[0].k_customer.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_customer.key, mem.variables);
                            // mem.works[0].items[0].k_phone.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_phone.key, mem.variables);
                            // mem.works[0].items[0].k_email.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_email.key, mem.variables);
                            // mem.works[0].items[0].k_price.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_price.key, mem.variables);
                            // mem.works[0].items[0].k_count.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_count.key, mem.variables);
                            // mem.works[0].items[0].k_amount.value = mem.works[0].items[0].k_price.value * mem.works[0].items[0].k_count;
                            // mem.works[0].items[0].k_product.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_product.key, mem.variables);
                            // mem.works[0].items[0].k_address.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_address.key, mem.variables);
                            // mem.works[0].items[0].k_note.value = M_MappingValue.mappingForOrder(mem.works[0].items[0].k_note.key, mem.variables);

                            await Order.create(dataOrder);
                            // await Order.create({ senderId: sender_id, content: mem.works[0].items[0].content, channel: channel, botId: botId })
                            data.push(mem.works[0].items[0]);
                            mem.works.shift();
                        }
                        break;
                    default:
                        return;
                }
        }
        await mem.save();
        return data;
    } catch (error) {
        console.log('Error[M_CoreGuest:bot_brain_guest]: ' + error);
        return;
    }
};
// suggest intent
suggest_guest = async (sender_id, intents, channel, channel_token, botId) => {
    try {

        let data = {};
        data['template_type'] = 'list';
        data['elememts'] = [{
            title: "Gợi ý",
            subtitle: 'Ý định của bạn là?',
            image_url: config.server_url + config.suggest_image,
            button: []
        }];

        intents.forEach(item => {
            let element = {};
            element.subtitle = item.name;
            element.subtitle = '';
            element.image_url = config.server_url + config.suggest_image;
            element.button = [{
                title: "",
                type: "callback",
                redirectToBlock: "item.name",
                blockId: null,
                key: null,
                value: null,
            }];
            data['elememts'].push(element);
        });

        return await bot_send_guest(sender_id, data, channel, channel_token, botId);
    } catch (error) {
        console.log('Error[M_Core:bot_suggest]: ' + error);
        return;
    }
}
// call send message fuction of channel 
bot_send_guest = async (sender_id, data, channel, channel_token, botId) => {
    try {

        if (channel == C_String.zalo)
            await Zalo.sendMessage(sender_id, data, channel_token, botId);
        else if (channel == C_String.face)
            await FaceBook.sendMessage(sender_id, data, channel_token, botId);
    } catch (error) {
        console.log('Error[M_Core:bot_send_guest]: ' + error);
        return;
    }
}
// ***end AI function***

// ***sub function***

// get current mem for sender_id
getMemmory_guest = async (sender_id, channel, botId) => {

    try {
        let mem = await Memory.findOne({ senderId: sender_id, botId: botId });
        if (!mem) {
            let obj = {};
            //let cus = await Customer.findOne({ senderId: sender_id, botId: botId });
            let ent = await Entity.find({ botId: botId });
            let $sender_id = ent.find(f => f.name == '$sender_id') == undefined ? null : ent.find(f => f.name == '$sender_id')._id;
            let $sender_name = ent.find(f => f.name == '$sender_name') == undefined ? null : ent.find(f => f.name == '$sender_name')._id;
            let $channel = ent.find(f => f.name == '$channel') == undefined ? null : ent.find(f => f.name == '$channel')._id;
            let $gender = ent.find(f => f.name == '$gender') == undefined ? null : ent.find(f => f.name == '$gender')._id;
            let $last_chat = ent.find(f => f.name == '$last_chat') == undefined ? null : ent.find(f => f.name == '$last_chat')._id;

            let default_variables = [
                { _id: $sender_id, value: sender_id },
                { _id: $sender_name, value: 'Guest' },
                { _id: $channel, value: channel },
                { _id: $gender, value: '' },
                { _id: $last_chat, value: new Date().toISOString() }
            ];
            obj.senderId = sender_id;
            obj.botId = botId;
            obj.variables = default_variables;
            obj.works = [];
            obj.channel = channel;
            let curr = await Memory.create(obj);
            return curr;

        }
        return mem;
    } catch (error) {
        console.log('Error[M_Core:getMemmory_guest_guest]: ' + error);
        return null;
    }

}
// save variable in  message
saveVariable_guest = async (memoryId, variables, isCheck) => {
    try {
        //console.log(variables )
        let mem = await Memory.findById(memoryId);
        let ent = await Entity.find({ botId: mem.botId });

        if (isCheck) {
            ent.forEach(item => {
                let ent_role = item.name + ':' + item.roles;
                if (variables[ent_role] != undefined) {
                    let obj = mem.variables.find(o => o._id === item._id);
                    if (obj) {
                        let index = mem.variables.indexOf(obj);
                        mem.variables[index] = { _id: item._id, value: variables[ent_role][0].value };
                    }
                    else {

                        mem.variables.push({ _id: item._id, value: variables[ent_role][0].value });
                    }

                }
            });
        }
        else {
            let obj = mem.variables.find(o => o._id === variables[0]._id);

            if (obj) {

                let index = mem.variables.indexOf(obj);
                mem.variables[index] = { _id: variables[0]._id, value: variables[0].value };
            }
            else {

                mem.variables.push({ _id: variables[0]._id, value: variables[0].value });
            }

        }

        mem.markModified('variables');
        return await mem.save();

    } catch (error) {
        console.log('Error[M_Core_Guest:saveVariable_guest]: ' + error);
        return;
    }
}
// get value of Variable
getVariable_guest = (id, mem) => {
    try {
        let temp = mem.variables.find(o => o._id === id);
        if (temp) {
            return temp.value;
        }
        return null;
    } catch (error) {
        console.log('Error[M_Core:getVariable_guest]: ' + error);
        return null;
    }
}
// return json of wit
wit_understanding_guest = async (text, botId) => {
    try {
        let json = await P_Wit.getMessage(text, botId)
        if (json.error == undefined)
            return json;
        return null;
    } catch (error) {
        console.log('Error[M_Core:wit_understanding_guest]: ' + error);
        return null;
    }
}

// return value of wit entities with lookup is keywords
wit_value_checking_guest = async (type, key, value, botId) => {
    try {
        let ent = await Entity.findOne({ name: key });
        if (ent && ent.lookups == 1 && type == null) {
            let wit_object = await wit_understanding_guest(value, botId);
            if (Object.keys(wit_object.entities).length != 0) {
                let ent_fullname = ent.name + ':' + ent.role;
                if (wit_object.entities[ent_fullname] != undefined)
                    return wit_object.entities[ent_fullname][0].value;
            }
        }
        return value;
    } catch (error) {
        console.log('Error[M_Core:wit_value_checking_guest]: ' + error);
        return null;
    }
}
// return list intent invalid
intents_invalid_guest = async (intents, conf) => {
    try {
        let confidence = conf.confidence * 0.01;
        return intents.filter(item => item.confidence >= confidence);
    } catch (error) {
        console.log('Error[M_Core:intents_invalid_guest]: ' + error);
        return [];
    }
}

// return list work
getWorks_guest = async (intentName, blocId, botId) => {
    try {

        let works = [];
        let bloc = null;
        let work_temp = [];
        if (intentName != null)
            bloc = await Block.findOne({ intentName: intentName, botId: botId, isActive: true });
        else
            bloc = await Block.findOne({ _id: blocId, isActive: true });

        if (bloc)
            work_temp = await Step.find({ blockId: bloc._id, isActive: true }).sort({ position: 1 })

        work_temp.forEach(item => {
            switch (item.type) {
                case C_String.text_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == '')) {
                            works.push(item);
                        }
                    }
                    break;
                case C_String.info_card:
                    {
                        if (item.items[0].elememts.length > 0) {
                            let el = item.items[0].elememts;
                            let count = 0;
                            el.forEach(i => {
                                if (i.title == null || i.title == '')
                                    item.items[0].elememts.splice(count, 1);
                                count++;
                            });
                        }
                        works.push(item);
                    }
                    break;
                case C_String.product_card:
                    {
                        if (item.items[0].elememts.length > 0) {
                            let el = item.items[0].elememts;
                            let count = 0;
                            el.forEach(i => {
                                if (i.title == null || i.title == '')
                                    item.items[0].elememts.splice(count, 1);
                                count++;
                            });
                        }
                        works.push(item);
                    }
                    break;
                case C_String.image_card:
                    {
                        if (!(item.items[0].title == null || item.items[0].title == ''))
                            works.push(item);
                    }
                    break;
                case C_String.form_card:
                    {
                        item.items.forEach(f => {
                            if (!(f.variable_id == null || f.content == null || f.content == ''))
                                f.type = C_String.form_card;
                            f.conditions = item.conditions;
                            works.push(f);
                        });

                    }
                    break;
                case C_String.go_to_card:
                    {
                        if (!(item.items[0].blockId == null))
                            works.push(item);
                    }
                    break;
                case C_String.memory_card:
                    {
                        works.push(item);
                    }
                    break;
                case C_String.phone_card:
                    {

                        if (!(item.items[0].content == null || item.items[0].content == ''))
                            works.push(item);
                    }
                    break;
                case C_String.email_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == ''))
                            works.push(item);
                    }
                    break;
                case C_String.admin_via_email_card:
                    {
                        if (!(item.items[0].title == null || item.items[0].emailAddress == null || item.items[0].emailBody == null))
                            works.push(item);
                    }
                    break;
                case C_String.support_card:
                    {
                        // if (!(item.items[0].content == null || item.items[0].content == ''))
                        works.push(item);
                    }
                    break;
                case C_String.api_card:
                    {
                        works.push(item);
                    }
                    break;
                case C_String.survey_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == '' || item.items[0].surveyId == null)) {
                            works.push(item);
                        }

                    }
                    break;
                case C_String.order_card:
                    {
                        if (!(item.items[0].content == null || item.items[0].content == '')) {
                            works.push(item);
                        }
                    }
                default:
                    break;
            }
        });
        return works;
    } catch (error) {
        console.log('Error[M_Core:getWorks_guest]: ' + error);
        return [];
    }
}

// return merger arr = arr1 + arr2
mergeArray_guest = (arr1, arr2) => {
    try {
        let arr = [];
        arr = arr1.concat(arr2);
        return arr;
    } catch (error) {
        console.log('Error[M_Core:mergeArray_guest]: ' + error);
        return [];
    }
}
// api process
apifunc_guest = async (memoryId, obj) => {
    try {
        let mem = await Memory.findById(memoryId);
        let myHeaders = {};
        if (obj.headers.length > 0) {
            for (let i = 0; i < obj.headers.length; i++) {
                let el = obj.headers[i];
                myHeaders[el.name] = el.value;
            }
        }
        if (obj.method == 'GET') {

            let getRes = await fetch(obj.url, {
                method: "GET",
                headers: myHeaders
            });
            let jsong = await getRes.json();
            //console.log(jsong);
            if (jsong) {
                //do something
            }
        }
        if (obj.method == 'POST') {
            let obj_temp = {};
            if (obj.body.length > 0) {
                for (let i2 = 0; i2 < obj.body.length; i2++) {
                    let el2 = obj.body[i2];
                    obj_temp[el2] = getVariable_guest(el2, mem);
                }
            }
            let postRes = await fetch(obj.url, {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(obj_temp)
            });
            let jsonp = await postRes.json();
            if (jsonp) {
                //do something
            }

        }
        //await mem.save();
        return;

    } catch (error) {
        console.log('Error[M_Core:apifunc_guest]: ' + error);
        return;
    }
}
// support process
supportfunc_guest = async (memoryId, obj, channel_token) => {
    try {
        let mem = await Memory.findById(memoryId);
        if (mem) {
            let cus = await Customer.findOne({ senderId: mem.senderId, botId: mem.botId });
            let temp = {};
            temp.senderId = mem.senderId;
            temp.name = cus.name;
            temp.phone = cus.phone;
            temp.email = cus.email;
            temp.botId = mem.botId;
            temp.items = mem.variables;
            temp.gender = cus.gender;
            temp.channel = cus.channel;
            temp.intentName = obj.intentName;

            if (obj.content != null || obj.console != '') {
                let obj_pro = {};
                obj_pro['content'] = obj.content;
                obj_pro['button'] = [];
                obj_pro['template_type'] = 'text';
                await bot_send_guest(mem.senderId, obj_pro, mem.channel, channel_token, mem.botId);
            }
            await SupportRequest.create(temp);
            sever.callsocket('support_request', { senderId: mem.senderId, botId: mem.botId });
            await Notification.create(mem.botId, 'Yêu cầu hỗ trợ', 'support_request', { senderId: mem.senderId, botId: mem.botId })
        }

        return;

    } catch (error) {
        console.log('Error[M_Core:supportfunc_guest]: ' + error);
        return;
    }
}
// Validate_guest for data type
Validate_guest = (type, text) => {

    try {
        let phoneno = /^\d{10}$/;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let numbers = /^[0-9]+$/;

        if (text)
            switch (type) {
                case null:
                    {
                        return true;
                    }
                case "null":
                    {
                        return true;
                    }
                case 'phone':
                    {
                        if (text.replace(/\s/g, '').match(phoneno))
                            return true;
                        return false;
                    }
                //break;
                case 'email':
                    {
                        if (text.replace(/\s/g, '').match(mailformat))
                            return true;
                        return false;
                    }
                // break;
                case 'number':
                    {
                        if (text.replace(/\s/g, '').match(numbers))
                            return true;
                        return false;
                    }
                // break;
                default:
                    return false;
            }

        return false
    } catch (error) {
        console.log('Error[M_Core:Validate_guest]: ' + error);
        return false;
    }
}
// ***end sub function***

