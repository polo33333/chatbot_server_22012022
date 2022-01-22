var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        sender_answer: String,
        bot_detected: String,
        way_handling: Number, // 0 = bot ko hieu; 1 = bot hieu; 2 = nhan nut; 3 = goi y; 4 = nhap du lieu
        confidence: Number,
        botId: String,

    },
    { 
        versionKey: false ,
        timestamps: true
    }
    
)
module.exports = mongoose.model('History', serviceSchema);