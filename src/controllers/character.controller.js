characterCtrl = {}

const { Op } = require('sequelize');
const { Character, Movie, Character_Movie } = require('../models');
console.log(Character);

// endpoint para crear personajes
characterCtrl.createCharacter = async (req, res) => {
    const { name, age, weight, history, movieId } = req.body;
    console.log(req.body.data);
    const newCharacter = await Character.create({
        image: req.file.filename,
        name,
        age,
        weight,
        history
    });
    await newCharacter.addMovies(movieId);
    res.json(newCharacter);
}

//endpoint para obtener un personaje
characterCtrl.getCharacter = async (req, res) => {
    const character = await Character.findByPk(req.params.id,{
        attributes: ['image', 'name', 'age', 'weight', 'history'],
        include: [{
            model: Movie,
            as: 'movies',
            required: false,
            attributes: ['image', 'title'],
            through: {
                attributes: []
            }
        }]
    });
    res.json(character);
}

//endpoint para buscar personajes
characterCtrl.searchCharacter = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        const characters = await Character.findAll({
            attributes: ['image', 'name', 'age', 'weight', 'history'],
            include: [{
                model: Movie,
                as: 'movies',
                required: false,
                attributes: ['id','image', 'title', 'creationDate', 'rating'],
                through: {
                    attributes: [],
                },
            }],
                
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${req.query.name}%` } },
                    { age: { [Op.eq]: req.query.age } },
                    { '$movies.id$': { [Op.eq]: req.query.movieId } }
                ]
            },
        });
        res.json(characters);
    }else{
        const characters = await Character.findAll({
            attributes: ['image', 'name'],
        });
        res.json(characters);
    }
}



// endpoint para obtener todos los personajes
characterCtrl.getCharacters = async (req, res) => {
    const characters = await Character.findAll({
        attributes: ['image', 'name',],
        include: [{
            model: Movie,
            as : 'movies',
            attributes: ['title', 'image', 'creationDate', 'rating'],
            through: {
                attributes: []
            }
        }]
      });
    res.json(characters);
}

// endpoint para actualizar personajes
characterCtrl.updateCharacter = async (req, res) => {
    const { image, name, age, weight, history, movieId } = req.body;
    const character = await Character.findByPk(req.params.id);
    if (req.file) {
        await character.update({
            image: req.file.filename,
            name,
            age,
            weight,
            history
        })
    } else {
        await character.update({
            name,
            age,
            weight,
            history
        })
    }
    await character.setMovies(movieId);
    res.json(character);

}



// endpoint para eliminar personajes
characterCtrl.deleteCharacter = async (req, res) => {
    const { id } = req.params;
    const character = await Character.findByPk(id);
    if (!character) {
        res.status(404).json({
            message: 'Personaje no encontrado'
        });
    }
    await character.destroy();
    res.json({
        message: 'Personaje eliminado'
    });
}

module.exports = characterCtrl;