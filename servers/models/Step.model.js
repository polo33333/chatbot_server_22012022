var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    type: String,
    conditions: [Object],
    items : [Object],
    isActive: { type: Boolean, default: true },
    blockId: String,
    botId: String,
    position: Number,
    _oldId: String,

},
    {
        timestamps: true
    },
    { versionKey: false }
    );

module.exports = mongoose.model('Step', serviceSchema);