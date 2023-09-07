const express = require('express');
const router = express.Router();
const incomesCtrl = require('../controllers/incomes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/budgets/:id/incomes', ensureLoggedIn, incomesCtrl.create);
router.delete('/incomes/:id', ensureLoggedIn, incomesCtrl.delete);

module.exports = router;