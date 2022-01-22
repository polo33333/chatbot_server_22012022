var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        title: String,
        feedId: String,
        pageId: String,
        items: [],
        isActive: { type: Boolean, default: true },
        isDelete: { type: Boolean, default: false },
        botId: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model('Comment', serviceSchema);