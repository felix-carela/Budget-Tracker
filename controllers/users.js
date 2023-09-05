const User = require("../models/user");

module.exports = {
    index,
    newIncome,
    newExpense
}

function index(req, res, next) {
    res.render("users/index", {
        user: req.user,
        name: req.query.name,
        email: req.query.email,
        incomes: req.query.incomes,
        expenses: req.query.expenses,
    });
}

function newIncome(req, res, next) {
    res.render('incomes/new');
}

function newExpense(req, res, next) {
    res.render('expenses/new');
}
