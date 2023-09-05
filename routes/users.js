var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/incomes/new', usersCtrl.newIncome);
router.get('/expenses/new', usersCtrl.newExpense);

module.exports = router;
