const Budget = require('../models/budget');

module.exports = {
  index,
  show,
  new: newBudget,
  create,
  delete: deleteBudget
};

async function index(req, res) {
  const budgets = await Budget.find({});
  res.render('budgets/index', { budgets });
}

async function show(req, res) {
  console.log('Budgets show function:', req.params)
  const budget = await Budget.findById(req.params.id);
  res.render('budgets/show', { budget });
}

function newBudget(req, res) {
  res.render('budgets/new');
}

async function create(req, res) {
  console.log('Budgets create function:', req.body)
  req.body.passMonth = !!req.body.passMonth;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const budget = await Budget.create(req.body);
    res.redirect(`/budgets/${budget._id}`);
  } catch (err) {
    console.log(err);
    res.render('budgets/new', { errorMsg: err.message });
  }
}

async function deleteBudget(req, res) {
  console.log('Budgets delete function:', req.params)
  await Budget.findByIdAndDelete(req.params.id);
  res.redirect('/budgets');
}