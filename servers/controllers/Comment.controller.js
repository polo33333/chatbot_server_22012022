
const Comment = require('../models/Comment.model');
const Intent = require('../models/Intent.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Config = require('../models/Config.model');
const P_Facebook = require('../functions/P_Facebook.function');
const Core = require('../functions/M_Core.function');
const { compare } = require('bcrypt-nodejs');


module.exports = {

    // get all with botId
    getAll: async (req, res) => {
        try {

            let { botId } = req.params;
            let conf = await Config.findOne({ botId: botId });
            if (conf.fa_linked_page.id != '' && conf.fa_linked_page.id != undefined) {
                let com = await Comment.find({ botId: botId, pageId: conf.fa_linked_page.id, isDelete: false });
                return sR.sendResponse(res, 200, com, message.getSuccess);
            }

            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Comment:getAll]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get by id
    getById: async (req, res) => {
        try {
            let { id } = req.params;
            let co = await Comment.findById(id);
            if (co)
                return sR.sendResponse(res, 200, co, message.getSuccess);
            return sR.sendResponse(res, 400, null, message.getFail);

        } catch (error) {

            console.log('Error[Comment:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get feed for botId
    getFeed: async (req, res) => {
        try {

            let { botId } = req.params;
            let conf = await Config.findOne({ botId: botId });
            if (conf && (conf.fa_linked_page.id != '' && conf.fa_linked_page.id != null)) {
                let feeds = await P_Facebook.getFeedOfFace(conf.fa_linked_page.id, conf.fa_linked_page.access_token);
                if (feeds)
                    return sR.sendResponse(res, 200, feeds.data, message.getSuccess);
            }

            return sR.sendResponse(res, 404, null, message.getFail);
        } catch (error) {

            console.log('Error[Comment:getFeed]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create
    create: async (req, res) => {

        try {

            let { botId } = req.params;
            let obj = req.body;
            obj.botId = botId;
            obj.title = obj.message;
            obj.feedId = obj.id;
            obj.items = [
                {
                    title: "Trả lời bình luận",
                    content: "Xin chào",
                    isActive: true,
                    isDefault: true
                }
            ]
            let conf = await Config.findOne({ botId: botId });
            let fe = await Comment.find({ feedId: obj.feedId });
            if (conf.fa_linked_page.id != '' && conf.fa_linked_page.id != undefined && fe.length == 0) {
                obj.pageId = conf.fa_linked_page.id;
                let co = await Comment.create(obj);
                if (co)
                    return sR.sendResponse(res, 200, co, message.createSuccess);
                return sR.sendResponse(res, 400, null, message.createFail);

            }

            return sR.sendResponse(res, 400, null, message.createFail);

        } catch (error) {

            console.log('Error[Comment:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // test
    test: async (req, res) => {

        try {

            let { botId } = req.params;
            let obj = req.body;
            let x = await Core.handleFeed(obj.commentId, obj.message, obj.channel_token, botId);
            return sR.sendResponse(res, 200, x, message.createFail);

        } catch (error) {

            console.log('Error[Comment:create]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // update method
    update: async (req, res) => {
        try {

            let { botId } = req.params;
            let obj = req.body;
            let step = await Comment.findById(obj._id);
            //console.log(obj)

            if (obj.type == 'update-item') {
                if (obj.action == 'add')
                    step.items.push({
                        title: "Trả lời bình luận",
                        content: "",
                        intentName: null,
                        isActive: true,
                        isDefault: false
                    });
                else if (obj.action == 'update') {
                    if (obj.title != undefined)
                        step.items[obj.index].title = obj.title;
                    if (obj.content != undefined)
                        step.items[obj.index].content = obj.content;
                    if (obj.intentName != undefined)
                        step.items[obj.index].intentName = obj.intentName;
                    if (obj.isActive != undefined)
                        step.items[obj.index].isActive = obj.isActive;

                } else if (obj.action == 'delete') {
                    if (obj.index != undefined)
                        step.items.splice(obj.index, 1);
                }
                step.markModified('items');
            } else if (obj.type == 'update-card') {
                if (obj.action == 'update') {
                    if (obj.isActive != undefined)
                        step.isActive = obj.isActive;
                }
            }
            let result = await step.save();
            //console.log(result)
            return sR.sendResponse(res, 200, result, message.updateSuccess);

        } catch (error) {

            console.log('Error[Comment:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },


    // update method with id
    updateById: async (req, res) => {
        try {

            let { botId, blockId } = req.params;
            let obj = req.body;
            if (blockId != 'null') {
                let bloc_curr = await Comment.findById(blockId);
                if (obj.name != undefined) {
                    bloc_curr.name = obj.name;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }

                if (obj.intentName != undefined) {
                    bloc_curr.intentName = obj.intentName;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }

                if (obj.isActive != undefined) {
                    bloc_curr.isActive = obj.isActive;
                    let bloc = await bloc_curr.save();
                    if (bloc)
                        return sR.sendResponse(res, 200, bloc, message.updateSuccess);
                    return sR.sendResponse(res, 400, null, message.updateFail);
                }
            }
            if (obj.position != undefined) {

                let block_list = await Block.find({ botId: botId, isParent: true });
                for (let i = 0; i < block_list.length; i++) {
                    let el = block_list[i];
                    for (let i1 = 0; i1 < obj.position.length; i1++) {
                        let el1 = obj.position[i1];
                        if (el._id == el1) {
                            el.position = i1;
                            break;
                        }
                    }
                    await el.save();
                }
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            }


        } catch (error) {

            console.log('Error[Comment:updateById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove method with id
    remove: async (req, res) => {
        try {

            let { id } = req.params;
            let bloc = await Comment.findByIdAndRemove(id);
            if (bloc) {
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Comment:remove]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    }
}