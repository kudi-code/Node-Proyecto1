const express = require('express');

//controllers
const {
  signup,
  login
} = require('../controllers/users.controller');

const {getTransfers} = require('../controllers/transfers.controller');

//router
const router = express.Router();

//Funciones Verbo
router.post('/signup', signup);

router.post('/login', login);

router.get('/:id/history', getTransfers)


//export default router es igual a:
module.exports = { usersRouter: router };
