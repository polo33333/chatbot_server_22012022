var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        name: String,
        intentName: String,
        phone: { type: String, default: ''},
        email: { type: String, default: ''},
        status: { type: Number, default: 0},
        items: [],
        gender: Number,
        channel: String,
        botId: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('SupportRequest', serviceSchema);