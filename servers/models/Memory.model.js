var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        senderId: String,
        channel: String,
        variables: [
            { _id: String, value: String }
        ],
        works: [
            Object
        ],
        botId: String,

    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Memory', serviceSchema);