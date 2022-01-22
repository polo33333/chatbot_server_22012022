
const Block = require('../models/Block.model');
const Step = require('../models/Step.model');
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const config = require('../../config');


module.exports = {

    // get all with blockid
    getAll: async (req, res) => {
        try {

            const { blockId } = req.params;
            const bloc = await Step.find({ blockId: blockId }).sort({ position: 1 });
            return sR.sendResponse(res, 200, bloc, message.getSuccess);

        } catch (error) {

            console.log('Error[Step:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            const { stepId } = req.params;
            let step = await Step.findById(stepId);
            return sR.sendResponse(res, 200, step, message.getSuccess);

        } catch (error) {

            console.log('Error[Step:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            const { botId, blockId } = req.params;
            var obj = req.body;

            obj.blockId = blockId;
            obj.botId = botId;
            obj.position = 0;
            let step_list = await Step.find({ blockId: blockId });
            if (step_list.length > 0) {
                obj.position = step_list[step_list.length - 1].position + 1;
            }
            let step = await Step.create(obj);
            if (step)
                return sR.sendResponse(res, 200, step, message.createSuccess);
            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Step:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },
    // update method with id
    update: async (req, res) => {
        try {

            // const { botId, stepId } = req.params;
            var obj = req.body;
            switch (obj.update_type) {
                case 'card_info':
                    {
                        await update_Card_Info(res, obj);
                    }
                    break;
                case 'card_item':
                    {
                        await update_Card_Item(res, obj);
                    }
                    break;
                case 'card_button':
                    {
                        await update_Card_Button(res, obj);
                    }
                    break;
                case 'card_condition':
                    {
                        await update_Card_Condition(res, obj);
                    }
                    break;
                case 'card_status':
                    {
                        await update_Card_Status(res, obj);
                    }
                    break;
                default: {
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
                //break;
            }

            //return sR.sendResponse(res, 400, null, message.updateFail);

        } catch (error) {

            console.log('Error[Step:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            const { stepId } = req.params;
            const step = await Step.findByIdAndRemove(stepId);
            if (step) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Step:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}

update_Card_Info = async (res, obj) => {
    try {
        let step = await Step.findById(obj._id);
        if (step) {
            if (obj.name != undefined) {
                step.name = obj.name;
            } else if (obj.position != undefined) {
                await update_Card_Position(obj.position, step.blockId);
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            }
            await step.save();
            return sR.sendResponse(res, 200, null, message.updateSuccess);
        }
        return sR.sendResponse(res, 400, null, message.updateFail);
    } catch (error) {
        console.log('Error[Step:update_Card_Info]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

update_Card_Item = async (res, obj) => {
    try {
        var step = await Step.findById(obj._id);
        switch (obj.type) {
            case 'text-card':
                {
                    if (step.items.length != 0) {
                        step.items[0].content = obj.content;

                        step.markModified('items');
                    }
                    else
                        step.items.push({ content: obj.content, button: [], template_type: "text" });
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);

                }
            //break;
            case 'form-card':
                {
                    if (obj.action == 'add')
                        step.items.push({ variable_id: null, validation: null, content: null, button: [], template_type: "text" });
                    else if (obj.action == 'update') {
                        if (obj.variable_id != undefined)
                            step.items[obj.index].variable_id = obj.variable_id;
                        if (obj.validation != undefined)
                            step.items[obj.index].validation = obj.validation;
                        if (obj.content != undefined)
                            step.items[obj.index].content = obj.content;

                    } else if (obj.action == 'delete') {
                        if (obj.index != undefined)
                            step.items.splice(obj.index, 1);
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'info-card':
                {
                    if (obj.action == 'add')
                        step.items[0].elememts.push({ title: null, subtitle: null, image_url: config.default_image, button: [] });
                    else if (obj.action == 'update') {
                        if (obj.title != undefined)
                            step.items[0].elememts[obj.index].title = obj.title;
                        if (obj.subtitle != undefined)
                            step.items[0].elememts[obj.index].subtitle = obj.subtitle;
                        if (obj.image_url != undefined)
                            step.items[0].elememts[obj.index].image_url = '/images/' + obj.image_url;

                    } else if (obj.action == 'delete') {
                        if (obj.index != undefined)
                            step.items[0].elememts.splice(obj.index, 1);
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'product-card':
                {
                    if (obj.action == 'add')
                        step.items[0].elememts.push({ title: null, subtitle: null, value: null, image_url: config.default_image, button: [] });
                    else if (obj.action == 'update') {
                        if (obj.variable_id != undefined)
                            step.items[0].variable_id = obj.variable_id;
                        if (obj.title != undefined)
                            step.items[0].elememts[obj.index].title = obj.title;
                        if (obj.subtitle != undefined)
                            step.items[0].elememts[obj.index].subtitle = obj.subtitle;
                        if (obj.value != undefined)
                            step.items[0].elememts[obj.index].value = obj.value;
                        if (obj.image_url != undefined)
                            step.items[0].elememts[obj.index].image_url = '/images/' + obj.image_url;

                    } else if (obj.action == 'delete') {
                        if (obj.index != undefined)
                            step.items[0].elememts.splice(obj.index, 1);
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'go-to-card':
                {
                    if (step.items.length != 0) {
                        step.items[0].blockId = obj.blockId;
                        step.markModified('items');
                    } else
                        step.items.push({ blockId: obj.blockId, button: [], template_type: "text" });
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'image-card':
                {
                    if (obj.title != undefined)
                        step.items[0].title = obj.title;
                    if (obj.image_url != undefined)
                        step.items[0].image_url = '/images/' + obj.image_url;

                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'memory-card':
                {
                    if (obj.action == 'add')
                        step.items[0].setVariables.push({ variable_id: null, value: null });
                    else if (obj.action == 'update') {
                        if (obj.isRemoveAll != undefined)
                            step.items[0].isRemoveAll = obj.isRemoveAll;
                        if (obj.removeVariables != undefined)
                            step.items[0].removeVariables = obj.removeVariables;

                        if (obj.variable_id != undefined)
                            step.items[0].setVariables[obj.index].variable_id = obj.variable_id;
                        if (obj.value != undefined)
                            step.items[0].setVariables[obj.index].value = obj.value;

                    } else if (obj.action == 'delete') {
                        if (obj.index != undefined)
                            step.items[0].setVariables.splice(obj.index, 1);
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'api-card':
                {
                    if (obj.action == 'add')
                        step.items[0].headers.push({ name: null, value: null });
                    else if (obj.action == 'update') {
                        if (obj.method != undefined)
                            step.items[0].method = obj.method;
                        if (obj.url != undefined)
                            step.items[0].url = obj.url;
                        if (obj.body != undefined)
                            step.items[0].body = obj.body;
                        if (obj.name != undefined)
                            step.items[0].headers[obj.index].name = obj.name;
                        if (obj.value != undefined)
                            step.items[0].headers[obj.index].value = obj.value;
                        if (obj.show_error != undefined)
                            step.items[0].show_error = obj.show_error;
                        if (obj.show_error_content != undefined)
                            step.items[0].show_error_content = obj.show_error_content;

                    } else if (obj.action == 'delete') {
                        if (obj.index != undefined)
                            step.items[0].headers.splice(obj.index, 1);
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            // break;
            case 'support-card':
                {
                    if (obj.content != undefined) {
                        step.items[0].content = obj.content;

                        step.markModified('items');
                        await step.save();
                    }
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }

            case 'phone-card':
                {
                    if (obj.content != undefined) {
                        step.items[0].content = obj.content;
                    }
                    if (obj.saveToVariable != undefined) {
                        step.items[0].saveToVariable = obj.saveToVariable;
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }

            case 'email-card':
                {
                    if (obj.content != undefined) {
                        step.items[0].content = obj.content;
                    }
                    if (obj.saveToVariable != undefined) {
                        step.items[0].saveToVariable = obj.saveToVariable;
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            case 'admin-via-email-card':
                {
                    if (obj.title != undefined) {
                        step.items[0].title = obj.title;
                    }
                    if (obj.emailAddress != undefined) {
                        step.items[0].emailAddress = obj.emailAddress;
                    }
                    if (obj.emailBody != undefined) {
                        step.items[0].emailBody = obj.emailBody;
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            case 'survey-card':
                {
                    if (obj.content != undefined) {
                        step.items[0].content = obj.content;
                    }
                    if (obj.surveyId != undefined) {
                        step.items[0].surveyId = obj.surveyId;
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            case 'order-card':
                {
                    // if (step.items.length != 0) {
                    //     step.items[0].content = obj.content;

                    //     step.markModified('items');
                    // }
                    // else
                    //     step.items.push({ content: obj.content, button: [], template_type: "text" });
                    if (obj.action == 'update') {
                        if (obj.content != undefined)
                            step.items[0].content = obj.content;
                        if (obj.k_customer != undefined)
                            step.items[0].k_customer.key = obj.k_customer;
                        if (obj.k_phone != undefined)
                            step.items[0].k_phone.key = obj.k_phone;
                        if (obj.k_email != undefined)
                            step.items[0].k_email.key = obj.k_email;
                        if (obj.k_product != undefined)
                            step.items[0].k_product.key = obj.k_product;
                        if (obj.k_price != undefined)
                            step.items[0].k_price.key = obj.k_price;
                        if (obj.k_count != undefined)
                            step.items[0].k_count.key = obj.k_count;
                        if (obj.k_address != undefined)
                            step.items[0].k_address.key = obj.k_address;
                        if (obj.k_note != undefined)
                            step.items[0].k_note.key = obj.k_note;

                        step.markModified('items');
                        await step.save();
                        return sR.sendResponse(res, 200, null, message.updateSuccess);

                    }
                }
            case 'elememt_position':
                {
                    if (obj.elememts != undefined) {
                        step.items[0].elememts = obj.elememts;
                    }
                    step.markModified('items');
                    await step.save();
                    return sR.sendResponse(res, 200, null, message.updateSuccess);
                }
            default:
                return sR.sendResponse(res, 400, null, message.updateFail);
        }
    } catch (error) {
        console.log('Error[Step:update_Card_Item]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

update_Card_Button = async (res, obj) => {
    try {

        switch (obj.type) {
            case 'text-card':
                {
                    await card_Button(res, obj);
                }
                break;
            case 'info-card':
                {
                    await item_Card_Button(res, obj);
                }
                break;
            // break;
            case 'product-card':
                {
                    await item_Card_Button(res, obj);
                }
                break;
            case 'image-card':
                {
                    await card_Button(res, obj);
                }
                break;
            case 'order-card':
                {
                    await card_Button(res, obj);
                }
                break;
            default:
                return sR.sendResponse(res, 400, null, message.updateFail);
        }
    } catch (error) {
        console.log('Error[Step:update_Card_Button]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

update_Card_Condition = async (res, obj) => {
    try {
        let step = await Step.findById(obj._id);
        if (obj.action == 'add')
            step.conditions.push({ variable_id: null, math_type: '0', value: null });
        else if (obj.action == 'update') {
            if (obj.variable_id != undefined)
                step.conditions[obj.index].variable_id = obj.variable_id;
            if (obj.math_type != undefined)
                step.conditions[obj.index].math_type = obj.math_type;
            if (obj.value != undefined)
                step.conditions[obj.index].value = obj.value;
        } else if (obj.action == 'delete') {
            if (obj.index != undefined)
                step.conditions.splice(obj.index, 1);
        }

        step.markModified('conditions');
        await step.save();
        return sR.sendResponse(res, 200, step, message.updateSuccess);
    } catch (error) {
        console.log('Error[Step:update_Card_Condition]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }

}

update_Card_Status = async (res, obj) => {
    try {
        let step = await Step.findById(obj._id);
        step.isActive = !step.isActive;
        await step.save();
        return sR.sendResponse(res, 200, step, message.updateSuccess);
    } catch (error) {
        console.log('Error[Step:update_Card_Status]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

update_Card_Position = async (position, blockId) => {

    let step_list = await Step.find({ blockId: blockId });
    for (let i = 0; i < step_list.length; i++) {
        let el = step_list[i];
        for (let i1 = 0; i1 < position.length; i1++) {
            let el1 = position[i1];
            if (el._id == el1) {
                el.position = i1;
                break;
            }
        }
        await el.save();
    }
    return;
}

card_Button = async (res, obj) => {
    try {
        let step = await Step.findById(obj._id);
        if (step.items[0].button.length <= 3) {

            switch (obj.button_type) {
                case 'callback':
                    {
                        if (obj.action == 'add')
                            step.items[0].button.push({ title: obj.title, type: "callback", redirectToBlock: obj.redirectToBlock, attachmentData: obj.attachmentData });
                        else if (obj.action == 'update') {
                            step.items[0].button[obj.index] = {};
                            step.items[0].button[obj.index] = { title: obj.title, type: "callback", redirectToBlock: obj.redirectToBlock, attachmentData: obj.attachmentData };
                        } else if (obj.action == 'delete') {
                            step.items[0].button.splice(obj.index, 1);
                        }
                    }
                    break;
                case 'url':
                    {
                        if (obj.action == 'add')
                            step.items[0].button.push({ title: obj.title, type: "url", url: obj.url });
                        else if (obj.action == 'update') {
                            step.items[0].button[obj.index] = {};
                            step.items[0].button[obj.index] = { title: obj.title, type: "url", url: obj.url };
                        }
                        else if (obj.action == 'delete') {
                            step.items[0].button.splice(obj.index, 1);
                        }
                    }
                    break;
                case 'phone':
                    {
                        if (obj.action == 'add')
                            step.items[0].button.push({ title: obj.title, type: "phone", phone: obj.phone });
                        else if (obj.action == 'update') {
                            step.items[0].button[obj.index] = {};
                            step.items[0].button[obj.index] = { title: obj.title, type: "phone", phone: obj.phone };
                        }
                        else if (obj.action == 'delete') {
                            step.items[0].button.splice(obj.index, 1);
                        }
                    }
                    break;

                default:
                    break;
            }
            step.markModified('items');
            await step.save();
        }
        return sR.sendResponse(res, 200, null, message.updateSuccess);
    } catch (error) {
        console.log('Error[Step:text_Card_Button]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}

item_Card_Button = async (res, obj) => {
    try {
        let step = await Step.findById(obj._id);
        switch (obj.button_type) {
            case 'callback':
                {
                    if (obj.action == 'add')
                        step.items[0].elememts[obj.index].button.push({ title: obj.title, type: "callback", redirectToBlock: obj.redirectToBlock, attachmentData: obj.attachmentData });
                    else if (obj.action == 'update') {
                        step.items[0].elememts[obj.index].button[obj.index2] = {};
                        step.items[0].elememts[obj.index].button[obj.index2] = { title: obj.title, type: "callback", redirectToBlock: obj.redirectToBlock, attachmentData: obj.attachmentData };
                    } else if (obj.action == 'delete') {
                        step.items[0].elememts[obj.index].button.splice(obj.index2, 1);
                    }
                }
                break;
            case 'url':
                {
                    if (obj.action == 'add')
                        step.items[0].elememts[obj.index].button.push({ title: obj.title, type: "url", url: obj.url });
                    else if (obj.action == 'update') {
                        step.items[0].elememts[obj.index].button[obj.index2] = {};
                        step.items[0].elememts[obj.index].button[obj.index2] = { title: obj.title, type: "url", url: obj.url };
                    }
                    else if (obj.action == 'delete') {
                        step.items[0].elememts[obj.index].button.splice(obj.index2, 1);
                    }
                }
                break;
            case 'phone':
                {
                    if (obj.action == 'add')
                        step.items[0].elememts[obj.index].button.push({ title: obj.title, type: "phone", phone: obj.phone });
                    else if (obj.action == 'update') {
                        step.items[0].elememts[obj.index].button[obj.index2] = {};
                        step.items[0].elememts[obj.index].button[obj.index2] = { title: obj.title, type: "phone", phone: obj.phone };
                    }
                    else if (obj.action == 'delete') {
                        step.items[0].elememts[obj.index].button.splice(obj.index2, 1);
                    }
                }
                break;

            default:
                break;
        }
        step.markModified('items');
        await step.save();

        return sR.sendResponse(res, 200, null, message.updateSuccess);
    } catch (error) {
        console.log('Error[Step:product_Card_Button]: ' + error);
        return sR.sendResponse(res, 400, null, message.updateFail);
    }
}
