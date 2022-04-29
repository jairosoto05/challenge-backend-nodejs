MovieCtrl = {}

const { Op } = require("sequelize");
const { Character, Movie, Genre } = require('../models');

// endpoint para crear peliculas o series
MovieCtrl.createMovie = async (req, res) => {
    const { title, creationDate, rating, characterId, genreId } = req.body;
    const newMovie = await Movie.create({
        image:req.file.filename,
        title,
        creationDate,
        rating,
        genreId
    });
    await newMovie.addCharacters(characterId);
    res.json(newMovie);
}

// endpoint para obtener una pelicula
MovieCtrl.getMovie = async (req, res) => {
    const movieOrSerie = await Movie.findByPk(req.params.id, {
        attributes: ['image', 'title', 'creationDate', 'rating'],
        include: [{
            model: Character,
            as: 'characters',
            required: false,
            attributes: ['image', 'name', 'age', 'weight', 'history'],
            through: {
                attributes: []
            }
        },
        {
            model: Genre,
            as: 'genre',
            required: false,
            attributes: ['image', 'name'],
        }]
    });
    res.json(movieOrSerie);
}

//endpoint para buscar peliculas o series
MovieCtrl.searchMovie = async (req, res) => {
    if(Object.keys(req.query).length > 0 && !req.query.order) {
        const movieOrSeries = await Movie.findAll({
            attributes: ['image', 'title', 'creationDate', 'rating'],
            include: [{
                model: Character,
                as: 'characters',
                required: false,
                attributes: ['image', 'name', 'age', 'weight', 'history'],
                through: {
                    attributes: []
                },
            },
            {
                model: Genre,
                as: 'genre',
                required: false,
                attributes: ['image', 'name'],
            }],
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${req.query.name}%` } },
                    { genreId: { [Op.eq]: req.query.genreId } },
                    
                ],
            },
            order: [
                ['creationDate', req.query.order ? req.query.order: 'ASC']
            ]
        });
        res.json(movieOrSeries);
    }else{
        const movieOrSeries = await Movie.findAll({
            attributes: ['image', 'title', 'creationDate'],
            order: [
                ['creationDate', req.query.order ? req.query.order: 'ASC']
            ]
        });
        res.json(movieOrSeries);
    }
}

//endpoint para actualizar peliculas o series
MovieCtrl.updateMovie = async (req, res) => {
    const { title, creationDate, rating, characterId, genreId } = req.body;
    const movieOrSerie = await Movie.findByPk(req.params.id);
    if(req.file) {
        await movieOrSerie.update({
            image:req.file.filename,
            title,
            creationDate,
            rating,
            genreId
        });
    }else{
        await movieOrSerie.update({
            title,
            creationDate,
            rating,
        });
    }
    await movieOrSerie.setCharacters(characterId);
    res.json(movieOrSerie);
}

//endpoint para eliminar peliculas o series
MovieCtrl.deleteMovie = async (req, res) => {
    const movieOrSerie = await Movie.findByPk(req.params.id);
    await movieOrSerie.destroy();
    res.json({
        message: 'Movie or serie deleted'
    });
}


module.exports = MovieCtrl;