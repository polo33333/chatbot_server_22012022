const Customer = require('../models/Customer.model');
const Facebook = require('../functions/P_Facebook1.function');
const Zalo = require('../functions/P_Zalo.function');
const Config = require('../models/Config.model');
const Step = require('../models/Step.model');
const C_String = require('./C_String.function');


module.exports = {

    handleFaceBroadCast: async (blockId, botId) => {

        try {
            let cus = await getUserOfChannel(C_String.face, botId);
            let conf = await Config.findOne({ botId: botId })
            let stp = await Step.find({ blockId: blockId, botId: botId }).sort({ position: 1 });
            if (cus && stp)
                for (let i = 0; i < cus.length; i++) {
                    let el = cus[i];
                    await new Promise(resolve => setTimeout(resolve, 200));

                    if (conf.fa_linked_page != null) {
                        // console.log(Date().toString() + ": send face");
                        // console.log(stp[0].items[0]);
                        await Facebook.sendMessage(el.senderId, stp[0].items[0], conf.fa_linked_page.access_token, botId,"broadcast");
                    }


                }
            return;
        } catch (error) {
            console.log('Error[M_BroadCast_handling:handleFaceBroadCast]: ' + error);
            return;
        }
    },

    handleZaloBroadCast: async (blockId, botId) => {

        try {
            let cus = await getUserOfChannel(C_String.zalo, botId);
            let conf = await Config.findOne({ botId: botId })
            let stp = await Step.find({ blockId: blockId }).sort({ position: 1 });
            if (cus && stp)
                for (let i = 0; i < cus.length; i++) {
                    let el = cus[i];
                    await new Promise(resolve => setTimeout(resolve, 100));
                    await Zalo.sendMessage(el.senderId, stp[0].items[0], conf.zalo_token);

                }
            return;
        } catch (error) {
            console.log('Error[M_BroadCast_handling:handleZaloBroadCast]: ' + error);
            return;
        }
    }
};

getUserOfChannel = async (channel, botId) => {

    try {
        let arr_customer = await Customer.find({ botId: botId, channel: channel })
        return arr_customer;

    } catch (error) {
        console.log('Error[M_BroadCast_handling:getUserOfChannel]: ' + error);
        return null;
    }
}