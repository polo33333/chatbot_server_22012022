var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: { type: String, default: 'Form Khảo Sát' },
    isDesign: { type: Boolean, default: false },
    items: [Object],
    isActive: { type: Boolean, default: true },
    sender_name: String,
    senderId: String,
    botId: String,
    isSynchronized: { type: Boolean, default: false },

},
    {
        timestamps: true
    },
    { versionKey: false }
);

module.exports = mongoose.model('Survey', serviceSchema);