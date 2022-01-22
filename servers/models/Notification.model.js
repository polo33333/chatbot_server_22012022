var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        title: String,
        type: String,
        data: Object,
        botId: String,


    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Notification', serviceSchema);