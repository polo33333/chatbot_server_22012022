var multer = require('multer');
const path =require('path')



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
        cb(null, './assets/images/'); //hỉnh ảnh sẽ chưa trong folder uploads
       
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      }
})

var upload = multer({storage:storage}); //save trên local của server khi dùng multer

module.exports = upload;