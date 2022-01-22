

const Auth = require('../models/Auth.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const config = require('../../config');
const S_Token = require('../functions/S_Token.function');
const tokenList = {};

module.exports = {


    // get all user
    getAll: async (req, res) => {
        try {

            let _temp = await Auth.find({ isAdmin: false, isDelete: false });
            return sR.sendResponse(res, 200, _temp, message.getSuccess);

        } catch (error) {

            console.log('Error[Auth:getAllUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // get user by id
    getById: async (req, res) => {
        try {
            let { userId } = req.params;
            let _temp = await Auth.findById(userId);

            return sR.sendResponse(res, 200, _temp, message.getSuccess);

        } catch (error) {

            console.log('Error[Auth:getUserById]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // create user
    create: async (req, res) => {

        try {
            let obj = req.body;

            obj.pass = await pass_decrypt(obj.pass);
            obj.userName = obj.userName.toLowerCase();
            let current = await Auth.findOne({ userName: obj.userName });

            if (current == null) {
                let _auth = await Auth.create(obj);
                if (_auth)
                    return sR.sendResponse(res, 200, _auth, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Auth:createUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update user method
    update: async (req, res) => {
        try {
            let { userId } = req.params;
            let obj = req.body;
            let bot = await Auth.findById(userId);
            if (bot) {
                bot.isActive = obj.isActive;
                await bot.save();
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            } else

                return sR.sendResponse(res, 404, null, message.notFound);


        } catch (error) {

            console.log('Error[Auth:update]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // update pass user method
    updatePass: async (req, res) => {
        try {
            let { userId } = req.params;
            let obj = req.body;
            let u = await Auth.findById(userId);
            if (u && await pass_encrypt(u.pass, obj.oldPassword)) {
                u.pass = await pass_decrypt(obj.newPassword);
                await u.save();
                return sR.sendResponse(res, 200, null, message.updateSuccess);
            } else

                return sR.sendResponse(res, 404, null, message.notFound);


        } catch (error) {

            console.log('Error[Auth:updatePass]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // remove user method
    remove: async (req, res) => {
        try {

            let { userId } = req.params;
            let _temp = await Auth.findById(userId);
            if (_temp) {
                _temp.isDelete = true;
                let _auth = await _temp.save();
                return sR.sendResponse(res, 200, null, message.deleteSuccess);
            }
            return sR.sendResponse(res, 400, null, message.deleteFail);

        } catch (error) {

            console.log('Error[Auth:removeUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },

    // register
    register: async (req, res) => {

        try {
            let obj = req.body;

            obj.pass = await pass_decrypt(obj.pass);
            obj.userName = obj.userName.toLowerCase();
            obj.numberTag = Date.now().toString();
            let current = await Auth.findOne({ userName: obj.userName });

            if (current == null) {
                let _auth = await Auth.create(obj);
                if (_auth)
                    return sR.sendResponse(res, 200, _auth, message.createSuccess);
            }
            return sR.sendResponse(res, 400, null, message.createFail);


        } catch (error) {

            console.log('Error[Auth:createUser]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }
    },

    // login method
    login: async (req, res) => {
        try {
            let obj = req.body;
            let user = await Auth.findOne({ userName: obj.userName.toLowerCase(), isDelete: false, isActive: true });
            if (user) {
                let payload = {
                    "uid": user._id,
                    "role": user.apps,
                    "userName": user.userName,
                    "numberTag": user.numberTag
                }

                if (await pass_encrypt(user.pass, obj.pass)) {
                    let token = jwt.sign(payload, config.secret, {
                        expiresIn: config.tokenLife,
                    });
                    let refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
                        expiresIn: config.refreshTokenLife
                    });
                    tokenList[refreshToken] = payload;

                    return sR.sendResponse(res, 200, {
                        access_token: token,
                        refresh_token: refreshToken,
                    }, message.accessSuccess);
                } else {
                    return sR.sendResponse(res, 200, null, message.noMatch);
                }
            } else

                return sR.sendResponse(res, 404, null, message.notFound);

        } catch (error) {

            console.log('Error[Auth:login]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },

    // login admin method
    loginAdmin: async (req, res) => {
        try {
            let obj = req.body;
            let user = await Auth.findOne({ userName: obj.userName.toLowerCase(), isAdmin: true, isDelete: false, isActive: true });
            if (user) {
                let payload = {
                    "role": user.apps,
                    "userName": user.userName
                }

                if (await pass_encrypt(user.pass, obj.pass)) {
                    let token = jwt.sign(payload, config.secret, {
                        expiresIn: config.tokenLife,
                    });
                    let refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
                        expiresIn: config.refreshTokenLife
                    });
                    tokenList[refreshToken] = payload;

                    return sR.sendResponse(res, 200, {
                        access_token: token,
                        refresh_token: refreshToken,
                    }, message.accessSuccess);
                } else {
                    return sR.sendResponse(res, 200, null, message.noMatch);
                }
            } else

                return sR.sendResponse(res, 404, null, message.notFound);

        } catch (error) {

            console.log('Error[Auth:login]: ' + error);
            return sR.sendResponse(res, 400, null, error);
        }

    },

    // refreshToken method
    refreshToken: async (req, res) => {
        // Lấy thông tin mã token được đính kèm trong request
        let { refreshToken } = req.body;
        //console.log(refreshToken)
        if (refreshToken) {
            try {
                // Kiểm tra mã Refresh token
                let data = await S_Token.verifyToken(refreshToken, config.refreshTokenSecret);
                //console.log(data)
                // Lấy lại thông tin user
                let payload = {
                    "uid": data.uid,
                    "role": data.role,
                    "userName":data.userName,
                    "numberTag": data.numberTag
                }
                // Tạo mới mã token và trả lại cho user
                let token = jwt.sign(payload, config.secret, {
                    expiresIn: config.tokenLife,
                });

                let refreshToken1 = jwt.sign(payload, config.refreshTokenSecret, {
                    expiresIn: config.refreshTokenLife
                });

                return sR.sendResponse(res, 200, {
                    access_token: token,
                    refresh_token: refreshToken1,
                }, message.accessSuccess);
            } catch (error) {
                console.log('Error[Auth:refreshToken]: ' + error);
                return sR.sendResponse(res, 403, null, 'Invalid refresh token');
            }
        } else {
            return sR.sendResponse(res, 400, null, 'Invalid request');
        }
    },

    // check token middleware method
    TokenCheck: async (req, res, next) => {
        // Lấy thông tin mã token được đính kèm trong request
        let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.header('Authorization');
        // decode token
        if (token) {
            // Xác thực mã token và kiểm tra thời gian hết hạn của mã
            try {
                let decoded = await S_Token.verifyToken(token, config.secret);
                // Lưu thông tin giã mã được vào đối tượng req, dùng cho các xử lý ở sau
                req.decoded = decoded;
                next();
            } catch (error) {
                // Giải mã gặp lỗi: Không đúng, hết hạn...
                console.log('Error[Auth:TokenCheck]: ' + error);
                return sR.sendResponse(res, 401, null, 'Unauthorized access.');

            }
        } else {
            // Không tìm thấy token trong request
            return sR.sendResponse(res, 403, null, 'No token provided.');
        }
    }


};

//
pass_decrypt = async (pass) => {
    try {
        let hash = bcrypt.hashSync(pass, salt);
        return hash
    } catch (error) {
        console.log('Error[Auth:pass_decrypt]: ' + error);
        return null;
    }

}

pass_encrypt = async (hash, pass) => {

    try {
        let res = bcrypt.compareSync(pass, hash);
        return res;

    } catch (error) {
        console.log('Error[Auth:pass_encrypt]: ' + error);
        return false;
    }
}