const express = require('express');

//controllers
const {
  signup,
  login,
  history
} = require('../controllers/users.controller');

//router
const router = express.Router();

//Funciones Verbo
router.post('/signup', signup);

router.post('/login', login);

router.get('/:id/history', history)


//export default router es igual a:
module.exports = { usersRouter: router };
