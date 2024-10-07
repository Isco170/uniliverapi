var express = require('express');
var transaction_data_controller = require('../controller/transaction_data.controller')
// const isAuthenticated = require('../middlewares/isAuthenticate');
var router = express.Router()

router.post('/create', transaction_data_controller.createTransaction);
router.get('/read/:user/:password', transaction_data_controller.readTransaction);
router.get('/read/dates/:from/:to', transaction_data_controller.readTransactionBetween);
router.delete('/data_delete', transaction_data_controller.deleteTransaction)
router.post('/createuser', transaction_data_controller.createUser);
router.delete('/destroy', transaction_data_controller.deletePastTransaction);

module.exports = router;