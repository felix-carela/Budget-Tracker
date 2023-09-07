const express = require('express');
const router = express.Router();
const expensesCtrl = require('../controllers/expenses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/budgets/:id/expenses', ensureLoggedIn, expensesCtrl.create);
router.delete('/expenses/:id', ensureLoggedIn, expensesCtrl.delete);

module.exports = router;