var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        sendingTime: {
            day: Number,
            month: Number,
            year: Number,
            hour: Number,
            minute: Number,
            repeat: String,
        },
        name: String,
        blockId: String,
        isSchedule: { type: Boolean, default: false },
        channel: { type: String, default: 'all'}, // facebook;zalo
        botId: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('BroadCast', serviceSchema);