var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    roles: String,
    type: { type: String, default: 'String'}, // String, Boolean, Number
    desc: { type: String, default: 'Thực thể người dùng tự định nghĩa.' },
    lookups: { type: Number, default: 1 },  // 1: lookups = keyword; 2: lookups = freetext; 3: lookups = keyword & freetext
    isEntity: { type: Boolean, default: true },
    isSystem: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
    _oldId: String,
    botId: String,
},
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Entity', serviceSchema);