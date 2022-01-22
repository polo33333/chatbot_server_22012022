


const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Customer = require('../models/Customer.model');
const UnknowRequest = require('../models/UnknowRequest.model');
const SupportRequest = require('../models/SupportRequest.model');
const Block = require('../models/Block.model');
const History = require('../models/History.model');
const LiveChat = require('../models/LiveChat.model');




module.exports = {



    getInfo: async (req, res) => {
        try {

            const { botId } = req.params;
            let obj = {
                comsumer_number: 0,
                supportRequest_number: 0,
                messageBot_number: 0,
                intent_number: 0,
                entity_number: 0,
                unknowRequest_number: 0,
                block_number: 0
            }

            let int = await Intent.find({ botId: botId });
            let ent = await Entity.find({ botId: botId });
            let cus = await Customer.find({ botId: botId });
            let unk = await UnknowRequest.find({ botId: botId });
            let sup = await SupportRequest.find({ botId: botId });
            let bloc = await Block.find({ botId: botId, isParent: false });
            let live = await LiveChat.find({ botId: botId, isSender: false });

            obj.comsumer_number = cus == undefined ? 0 : cus.length;
            obj.intent_number = int == undefined ? 0 : int.length;
            obj.entity_number = ent == undefined ? 0 : ent.length;
            obj.unknowRequest_number = unk == undefined ? 0 : unk.length;
            obj.supportRequest_number = sup == undefined ? 0 : sup.length;
            obj.block_number = bloc == undefined ? 0 : bloc.length;
            obj.messageBot_number = live == undefined ? 0 : live.length;

            return sR.sendResponse(res, 200, obj, message.getSuccess);


        } catch (error) {

            console.log('Error[Statistic:getInfo]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getChart1: async (req, res) => {
        try {

            const { botId, typeId } = req.params;
            let live = await LiveChat.find({ botId: botId, isSender: true });

            if (typeId == 7) {
                let arr = Array(7).fill(0);
                let arrDate = getDayAvariable(7);
                if (live) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < live.length; i++) {
                            let el = live[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }



            if (typeId == 30) {
                let arr = Array(30).fill(0);
                let arrDate = getDayAvariable(30);
                if (live) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < live.length; i++) {
                            let el = live[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }

            if (typeId == 12) {
                let arr = Array(12).fill(0);
                let arrDate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                if (live) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        let currYear = new Date().getFullYear();
                        for (let i = 0; i < live.length; i++) {
                            let el = live[i];
                            if (el.createdAt.getFullYear() == currYear && el.createdAt.getMonth() == curr) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr, message.getSuccess);
            }


        } catch (error) {

            console.log('Error[Statistic:getChart1]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getChart2: async (req, res) => {
        try {

            const { botId, typeId } = req.params;
            let his = await History.find({ botId: botId });
            let unsuccess = await History.find({ botId: botId, way_handling: 0 });
            let success = (his == undefined ? 0 : his.length) - (unsuccess == undefined ? 0 : unsuccess.length);
            let data = [unsuccess == undefined ? 0 : unsuccess.length, success]
            return sR.sendResponse(res, 200, data, message.getSuccess);

        } catch (error) {

            console.log('Error[Statistic:getChart2]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getChart3: async (req, res) => {
        try {

            const { botId, typeId } = req.params;
            let cus = await Customer.find({ botId: botId });
            if (typeId == 7) {
                let arr = Array(7).fill(0);
                let arrDate = getDayAvariable(7);
                if (cus) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < cus.length; i++) {
                            let el = cus[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }

            if (typeId == 30) {
                let arr = Array(30).fill(0);
                let arrDate = getDayAvariable(30);
                if (cus) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < cus.length; i++) {
                            let el = cus[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }

            if (typeId == 12) {
                let arr = Array(12).fill(0);
                let arrDate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                if (cus) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let currYear = new Date().getFullYear();
                        let curr = arrDate[i0];
                        for (let i = 0; i < cus.length; i++) {
                            let el = cus[i];
                            if (el.createdAt.getFullYear() == currYear && el.createdAt.getMonth() == curr) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr, message.getSuccess);
            }


        } catch (error) {

            console.log('Error[Statistic:getChart3]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    getChart4: async (req, res) => {
        try {

            const { botId, typeId } = req.params;
            let sup = await SupportRequest.find({ botId: botId });

            if (typeId == 7) {
                let arr = Array(7).fill(0);
                let arrDate = getDayAvariable(7);
                if (sup) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < sup.length; i++) {
                            let el = sup[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }


            if (typeId == 30) {
                let arr = Array(30).fill(0);
                let arrDate = getDayAvariable(30);
                if (sup) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let curr = arrDate[i0];
                        for (let i = 0; i < sup.length; i++) {
                            let el = sup[i];
                            if (el.createdAt.getFullYear() == curr.getFullYear() && el.createdAt.getMonth() == curr.getMonth() && el.createdAt.getDate() == curr.getDate()) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr.reverse(), message.getSuccess);
            }

            if (typeId == 12) {
                let arr = Array(12).fill(0);
                let arrDate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                if (sup) {
                    let j = 0;
                    for (let i0 = 0; i0 < arrDate.length; i0++) {
                        let currYear = new Date().getFullYear();
                        let curr = arrDate[i0];
                        for (let i = 0; i < sup.length; i++) {
                            let el = sup[i];
                            if (el.createdAt.getFullYear() == currYear && el.createdAt.getMonth() == curr) {
                                arr[j] += 1;

                            }
                        }
                        j++;
                    }

                }

                return sR.sendResponse(res, 200, arr, message.getSuccess);
            }


        } catch (error) {

            console.log('Error[Statistic:getChart4]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

}

function getDayAvariable(x) {

    //let arrDay = [null,null,null,null,null,null,null];
    let arrDay = Array(x).fill(null);
    for (let i = 0; i < arrDay.length; i++) {
        let el = arrDay[i];
        let curr = new Date(); // get current date
        curr.setDate(curr.getDate() - i);
        arrDay[i] = (curr)

    }
    return arrDay;
}


function getChartForType(typeId, botId) {

}