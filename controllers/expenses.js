const User = require('../models/user');

module.exports = {
    new: newExpense
}

function newExpense(req, res, next) {
    res.render('expenses/new');
}
  