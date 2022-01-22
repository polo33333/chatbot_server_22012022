
const Step = require('../models/Step.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');

module.exports = {
    uploadSingleFile: async (req, res) => {
        try {
            if (req.file) {

                return sR.sendResponse(res, 200,req.file.filename , message.updateSuccess);
            }

            return sR.sendResponse(res, 400, null, message.updateFail);
        } catch (error) {
            return sR.sendResponse(res, 400, null, error);
        }

    },
    uploadMultipleFiles: async (req, res) => {
        res.json(req.files)
    },

}