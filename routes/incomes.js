var express = require('express');
var router = express.Router();
const incomesCtrl = require('../controllers/incomes');

router.get('/incomes/new', incomesCtrl.index);
router.post('/users/:id/incomes', incomesCtrl.create);

module.exports = router;