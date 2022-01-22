var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        isSender: { type: Boolean, default: false},
        items: [],
        template_type: String,
        botId: String,
    },
    { 
        versionKey: false ,
        timestamps: true
    }
    
)
module.exports = mongoose.model('LiveChat', serviceSchema);