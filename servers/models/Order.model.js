var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        k_customer: String,
        k_phone: String,
        k_email: String,
        k_product: String,
        k_price: String,
        k_count: String,
        k_amount: String,
        k_address: String,
        k_note: String,
        senderId: String,
        content: String,
        isDelete: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        botId: String,
        channel: String,

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Order', serviceSchema);