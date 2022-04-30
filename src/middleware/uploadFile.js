const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
    filename:(req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
})

const uploadImage = multer({
    storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb('Error: Archivo no válido');
    }
}).single('image');

const uploadFile = {
   uploadImage: uploadImage
}

module.exports = uploadFile;