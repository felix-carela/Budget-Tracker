const User = require("../models/user");

module.exports = {
    new: newIncome
}

function newIncome(req, res, next) {
    res.render('users/incomes/new');
}
