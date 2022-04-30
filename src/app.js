const express = require('express');
const app = express();
const cors = require('cors');
const { uploadImage } = require('./middleware/uploadFile');

const checkAuth = require('./middleware/checkAuth');

// const { uploadImage } = require('../middleware/uploadFile');

//settings
app.set('port', process.env.PORT || 4000);

//middleweres
app.use(cors());
app.use(express.json());
app.use(uploadImage);

//routes
app.use('/auth', require('./routes/user.routes'));
app.use(checkAuth, require('./routes/characters.routes'));
app.use(checkAuth, require('./routes/movies.routes'));

  
module.exports = app;