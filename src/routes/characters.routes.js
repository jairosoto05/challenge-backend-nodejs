const Router = require('express');
const router = Router();

const {createCharacter, getCharacter, updateCharacter, deleteCharacter, searchCharacter } = require('../controllers/character.controller');

router.route('/characters')
    .get(searchCharacter)
    .post(createCharacter)

router.route('/characters/:id')
    .get(getCharacter)
    .delete(deleteCharacter)
    .put(updateCharacter)

module.exports = router;
