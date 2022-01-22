var jwt = require('jsonwebtoken');
var config = require('../../config');
var sR = require('./M_SendResponse.function');
var message = require('./C_String.function');

var get_cookies = (request) => {
    var cookies = {};
    if (request.headers.cookie)
        request.headers && request.headers.cookie.split(';').forEach(function (cookie) {
            var parts = cookie.match(/(.*?)=(.*)$/)
            cookies[parts[1].trim()] = (parts[2] || '').trim();
        });
    return cookies;
};


// protect router if you want
exports.verifyToken = (token, secretKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
}


// module.exports = verifyToken;