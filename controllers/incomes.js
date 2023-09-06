const User = require("../models/user");

module.exports = {
    index,
    create
}

async function index(req, res, next) {
    res.render("incomes/new", {
        user: req.user,
        name: req.query.name,
        email: req.query.email,
        incomes: req.query.incomes,
        expenses: req.query.expenses,
    });
}

async function create(req, res, next) {
}