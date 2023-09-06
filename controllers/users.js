const User = require("../models/user");

module.exports = {
    index,
}

async function index(req, res, next) {
    res.render("users/index", {
        user: req.user,
        name: req.query.name,
        email: req.query.email,
        incomes: req.query.incomes,
        expenses: req.query.expenses,
    });
}

// async function newIncome(req, res, next) {
//     res.render('users/incomes/new');
// }

// async function newExpense(req, res, next) {
//     res.render('users/expenses/new');
// }

// async function create(req, res, next) {
//     try {
//         await User.create(req.body);
//         res.redirect("/users");
//     } catch (err) {
//         res.redirect("/users");
//     }
// }


// const user = await User.findOne({ googleId: req.user.googleId });