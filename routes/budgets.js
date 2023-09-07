const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
router.get('/', budgetsCtrl.index);
router.get('/new', ensureLoggedIn, budgetsCtrl.new);
router.get('/:id', budgetsCtrl.show);
router.delete('/:id', ensureLoggedIn, budgetsCtrl.delete);
router.post('/', ensureLoggedIn, budgetsCtrl.create);
	
module.exports = router;
