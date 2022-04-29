const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename:(req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
})

//settings
app.set('port', process.env.PORT || 4000);

//middleweres
app.use(cors());
app.use(express.json());
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/images'),
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
}).single('image'));

//routes
app.use(require('./routes/characters.routes'));
app.use(require('./routes/movies.routes'));
 
module.exports = app;