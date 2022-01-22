var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    appName: String,
    lang: { type: String, default: 'vi' },
    desc: String,
    appId: String,
    botId: String,
    owner: String,
    partners: [],
    isDelete: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
},
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Bot', serviceSchema);