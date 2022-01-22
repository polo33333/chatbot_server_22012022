var schedule = require('node-schedule');
const BroadCast = require('../models/BroadCast.model');
const Config = require('../models/Config.model');
const Reminder = require('../models/Reminder.model');
const M_BroadCast_handling = require('../functions/M_BroadCast_handling.function');
const Zalo = require('../functions/P_Zalo.function');
const FaceBook = require('../functions/P_Facebook.function');
const Customer = require('../models/Customer.model');
const C_String = require('./C_String.function');

var scheduler = {
    scheduleJob: function () {
        var job = schedule.scheduleJob('*/1 * * * *', async function () {
            var bro = await BroadCast.find({ 'isSchedule': true });
            let currDate = new Date();
            try {
                await reminder_user();

                bro.forEach(async el => {
                    //none
                    if (el.sendingTime.repeat == 'none') {
                        if (
                            el.sendingTime.day == currDate.getDate()
                            && el.sendingTime.month == currDate.getMonth() + 1
                            && el.sendingTime.year == currDate.getFullYear()
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()
                        ) {

                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.isSchedule = false;
                            el.save(el);

                        }
                    }


                    //daily
                    if (el.sendingTime.repeat == 'daily') {


                        if (
                            el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()
                        ) {

                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.save(el);

                        }
                    }


                    //weekly
                    if (el.sendingTime.repeat == 'weekly') {


                        if (
                            new Date(el.sendingTime.year, el.sendingTime.month - 1, el.sendingTime.day).getDay() == currDate.getDay()
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()
                        ) {

                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.save(el);

                        }
                    }



                    //monthly
                    if (el.sendingTime.repeat == 'monthly') {

                        if (
                            el.sendingTime.day == currDate.getDate()
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()
                        ) {

                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.save(el);

                        }
                    }


                    //weekends
                    if (el.sendingTime.repeat == 'weekends') {

                        if (
                            (currDate.getDay() == 6 
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()) ||
                            ( currDate.getDay() == 0 
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes())
                        ) {

                            
                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.save(el);

                        }
                    }


                    //workdays
                    if (el.sendingTime.repeat == 'workdays') {

                        if (
                            (currDate.getDay() != 6 && currDate.getDay() != 0)
                            && el.sendingTime.hour == currDate.getHours()
                            && el.sendingTime.minute == currDate.getMinutes()
                        ) {

                            switch (bro.channel) {
                                case C_String.zalo:
                                    {

                                        await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                    }
                                    break;
                                case C_String.face:
                                    {

                                        await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    }
                                    break;

                                default: {
                                    await M_BroadCast_handling.handleFaceBroadCast(el.blockId, el.botId);
                                    await M_BroadCast_handling.handleZaloBroadCast(el.blockId, el.botId);
                                }
                                    break;
                            }
                            el.save(el);


                        }
                    }

                });



            } catch (error) {
                console.log('Error[M_Schedule:jobs]: ' + error);
            }
        });
        return job;
    }
}

reminder_user = async () => {



    try {
        let arrReminder = await Reminder.updateMany(
            { timeOut: { $gt: 0 }, },
            { $inc: { "timeOut": -1 } },
        );

        let temp = await Reminder.find({ timeOut: 0 });
        if (temp.length > 0)
            for (let i = 0; i < temp.length; i++) {
                let el = temp[i];
                if (el.timeOut == 0) {
                    let conf = await Config.findOne({ botId: el.botId });
                    if(conf.reminder_content != null){
                        let cus = await Customer.findOne({ senderId: el.senderId, botId: el.botId });
                        let obj_pro = {};
                        obj_pro['content'] = (conf.reminder_content).replace("{{reminder_timeout}}", conf.reminder_timeout);
                        obj_pro['button'] = [];
                        obj_pro['template_type'] = 'text';
                        obj_pro['type'] = 'text-card';
                        //console.log(obj_pro);
                        if (cus.channel == C_String.zalo)
                            await Zalo.sendMessage(el.senderId, obj_pro, conf.zalo_token, el.botId);
                        else if (cus.channel == C_String.face && conf.fa_linked_page != null)
                            await FaceBook.sendMessage(el.senderId, obj_pro, conf.fa_linked_page.access_token, el.botId);
                    }
                    await Reminder.deleteOne({ senderId: el.senderId, botId: el.botId });
                }


            }

        return;
    } catch (error) {
        console.log('Error[M_Schedule:reminder_user]: ' + error);
        return;
    }
}

module.exports = scheduler;