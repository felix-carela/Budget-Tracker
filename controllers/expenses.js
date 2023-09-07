const Budget = require('../models/budget');

module.exports = {
  create,
  delete: deleteExpenses
};

async function deleteExpenses(req, res) {
  const budget = await Budget.findOne({ 'expenses._id': req.params.id, 'expenses.user': req.user._id });
  if (!budget) return res.redirect('/budgets');
  budget.expenses.remove(req.params.id);
  await budget.save();
  res.redirect(`/budgets/${budget._id}`);
}

async function create(req, res) {
  console.log('Expenses create function:', req.body)
  console.log('Expenses create function:', req.params)
  console.log('Expenses create function:', req.params.id)
  const budget = await Budget.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  budget.expenses.push(req.body);
  try {
    await budget.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/budgets/${budget._id}`);
}