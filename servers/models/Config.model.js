var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema(
    {
        _Id: Schema.Types.ObjectId,
        botId: String,
        zalo_token: { type: String, default: '' },
        zalo_webhook: { type: String, default: '' },
        fa_page_token: { type: String, default: '' },
        fa_webhook: { type: String, default: '' },
        fa_verify_token: { type: String, default: '' },
        fa_linked_user: { type: Object, default: null },
        fa_linked_page : { type: Object, default: null },
        isReminder: { type: Boolean, default: true },
        reminder_timeout: { type: Number, default: 5 },
        reminder_content: { type: String, default: 'Đã {{reminder_timeout}} phút chúng tôi chưa nhận phản hồi từ bạn.Nếu bạn có bất cứ thắc mắc gì xin liên hệ với chúng tôi để biết thêm chi tiết. Xin cảm ơn!' },
        isActive: { type: Boolean, default: true },
        isFacebook: { type: Boolean, default: true },
        pageId: { type: String, default: '' },
        isZalo: { type: Boolean, default: true },
        isGuest: { type: Boolean, default: true },
        isSuggest: { type: Boolean, default: true },
        confidence: { type: Number, default: 80 },
        host: { type: String, default: 'smtp.gmail.com' },
        port: { type: Number, default: 587 },
        encryption: { type: String, default: 'None' },
        adminMail: { type: String, default: '' },
        passAdminMail: { type: String, default: null },

    },
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('Config', serviceSchema);