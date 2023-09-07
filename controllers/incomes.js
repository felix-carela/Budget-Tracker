const Budget = require('../models/budget');

module.exports = {
  create,
  delete: deleteIncomes
};

async function deleteIncomes(req, res) {
  const budget = await Budget.findOne({ 'incomes._id': req.params.id, 'incomes.user': req.user._id });

  if (!budget) return res.redirect('/budgets');
  budget.incomes.remove(req.params.id);
  await budget.save();
  res.redirect(`/budgets/${budget._id}`);
}

async function create(req, res) {
  const budget = await Budget.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  budget.incomes.push(req.body);
  
  try {
    await budget.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/budgets/${budget._id}`);
}