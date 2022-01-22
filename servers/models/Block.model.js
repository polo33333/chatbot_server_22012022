var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        name: String,
        type: String,
        intentName: String,
        isParent: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        isDefaut: { type: Boolean, default: false },
        position: { type: Number, default: 0 },
        blockId: String,
        botId: String,
        _oldId: String,

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Block', serviceSchema);