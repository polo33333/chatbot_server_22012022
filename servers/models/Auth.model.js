var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        fullName: String,
        userName: String,
        phone: String,
        pass: { type: String, default: null },
        numberTag: { type: String, default: "0001" },
        token: { type: String, default: null },
        isAdmin: { type: Boolean, default: false },
        isDelete: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        apps: [],
        type: { type: Number, default: 0 },
        note: String,
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Auth', serviceSchema);