var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    text: String,
    intentId: String,
    botId: String,
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Sample', serviceSchema);