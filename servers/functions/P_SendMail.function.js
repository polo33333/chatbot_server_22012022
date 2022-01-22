const nodeMailer = require('nodemailer')
const mailHost = 'smtp.gmail.com'
const mailPort = 587
const bcrypt = require('bcrypt-nodejs');

const sendMail = (to, subject, htmlContent, host, port, encryption, adminMail, passAdminMail) => {

    // Khởi tạo một thằng transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
    const transporter = nodeMailer.createTransport({
        host: host == null ? mailHost : host,
        port: port == null ? mailPort : port,
        secure: encryption == 'None' ? false : encryption == 'TLS' ? true : false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
        auth: {
            user: adminMail,
            pass: passAdminMail
        }
    })
    const options = {
        from: adminMail, // địa chỉ admin email bạn dùng để gửi
        to: to, // địa chỉ gửi đến
        subject: subject, // Tiêu đề của mail
        html: htmlContent // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
    }
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    return transporter.sendMail(options)
}



module.exports = {
    sendMail: sendMail
}