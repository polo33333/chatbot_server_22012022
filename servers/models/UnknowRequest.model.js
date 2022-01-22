var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        text: String,
        botId: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('UnknowRequest', serviceSchema);