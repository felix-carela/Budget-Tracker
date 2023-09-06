var express = require('express');
var router = express.Router();
const expensesCtrl = require('../controllers/expenses');

router.get('/users/incomes/new', expensesCtrl.index);
router.post('/users/:id/expenses', expensesCtrl.create);

module.exports = router;