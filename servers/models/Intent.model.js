var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        name: String,
        isSystem: { type: Boolean, default: false },
        botId: String,
        _oldId: String,
        isActive: { type: Boolean, default: true },
    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Intent', serviceSchema);