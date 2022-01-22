var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        timeOut: { type: Number, default: 0},
        botId: String,


    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Reminder', serviceSchema);