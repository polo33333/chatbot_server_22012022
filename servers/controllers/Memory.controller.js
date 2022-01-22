
const Config = require('../models/Config.model');
const Memory = require('../models/Memory.model');
const Entity = require('../models/Entity.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');

module.exports = {


    // get by id
    getById: async (req, res) => {
        try {
            let { senderId, botId } = req.params;
            let his = await Memory.findOne({senderId: senderId}); 
            let ent = await Entity.find({ botId: botId }); 
            let result = [];
            if(his!= undefined && ent != undefined)  {
                his.variables.forEach(pro => {
                    let temp = ent.filter(o => o._id == pro._id);
                    if ( temp.length != 0) {
                        result.push({key: temp[0].name, value: pro.value});
                    }
                });
            }        
            return sR.sendResponse(res, 200, result, message.getSuccess);

        } catch (error) {

            console.log('Error[Memory:getById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

};
