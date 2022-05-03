const Router = require('express');
const router = Router();

const { createMovie, getMovie, updateMovie, deleteMovie, searchMovie } = require('../controllers/movie.controller');

router.route('/movies')
    .get(searchMovie)
    .post(createMovie)

router.route('/movies/:id')
    .get(getMovie)
    .delete(deleteMovie)
    .put(updateMovie)


module.exports = router;