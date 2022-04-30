const express = require('express');

//controllers
const {
  transfer
} = require('../controllers/transfers.controller');

//router
const router = express.Router();

//Functions
router.route(`/`)
    .post(transfer)
//export default router es igual a:
module.exports = { transfersRouter: router };
