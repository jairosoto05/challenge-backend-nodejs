const Router = require('express');
const router = Router();

const { uploadImage } = require('../middleware/uploadFile');
const { createMovie, getMovie, updateMovie, deleteMovie, searchMovie } = require('../controllers/movie.controller');

router.route('/movies')
    .get(searchMovie)
    .post(uploadImage, createMovie)

router.route('/movies/:id')
    .get(getMovie)
    .delete(deleteMovie)
    .put(uploadImage, updateMovie)


module.exports = router;