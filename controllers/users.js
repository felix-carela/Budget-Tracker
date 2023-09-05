const User = require("../models/user");
const Income = require("../models/income");
const Expense = require("../models/expense");

module.exports = {
    index
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

