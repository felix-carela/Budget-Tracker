const Budget = require('../models/budget');
const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newBudget,
  create,
  delete: deleteBudget,
  update: updateBudget,
  edit
};

async function index(req, res) {
  const budgets = await Budget.find({});
  res.render('budgets/index', { budgets });
}

async function show(req, res) {
  const budget = await Budget.findById(req.params.id);
  res.render('budgets/show', { budget });
}

function newBudget(req, res) {
  res.render('budgets/new');
}

async function create(req, res) {
  try {
    const budget = await Budget.create(req.body);
    res.redirect(`/budgets/${budget._id}`);
  } catch (err) {
    console.log(err);
    res.render('budgets/new', { errorMsg: err.message });
  }
}

async function deleteBudget(req, res) {
  await Budget.findByIdAndDelete(req.params.id);
  res.redirect('/budgets');
}

async function updateBudget(req, res) {
  try {
    const budgetId = req.params.id;
    const updatedBudgetData = req.body;

    // Find and update the budget
    const updatedBudget = await Budget.findByIdAndUpdate(
      budgetId,
      updatedBudgetData,
      { new: true }
    );

    if (!updatedBudget) {
      // If the budget with the given ID is not found
      return res.status(404).send("Budget not found");
    }

    // Redirect to the updated budget's page or any other desired action
    res.redirect(`/budgets/${updatedBudget._id}`);
  } catch (err) {
    console.error(err);
    res.render('budgets/edit', {
      errorMsg: err.message,
      budget: req.body, // Pass the original data back to the edit form
    });
  }
}

async function edit(req, res) {
  try {
    const budget = await Budget.findById(req.params.id);
    res.render('budgets/edit', { budget });
  } catch (err) {
    console.error(err);
    res.redirect('/budgets'); // Redirect to the budgets index or handle the error appropriately
  }
}
