const Router = require('express');
const router = Router();

const { checkDuplicateUsernameOrEmail } = require('../middleware/verifyUserRegister');
const { createUser, loginUser } = require('../controllers/user.controller');

router.route('/login')
    .post(loginUser)

router.route('/register')
.post(checkDuplicateUsernameOrEmail, createUser)

module.exports = router;