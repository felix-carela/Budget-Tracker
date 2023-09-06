const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomesSchema = new Schema({
  incomeType: String,
  incomeName: String,
  amount: Number
});

const expensesSchema = new Schema({
  expenseType: String,
  expenseName: String,
  amount: Number
});

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true,
  },
  email: String,
  incomes: [incomesSchema],
  expenses: [expensesSchema]
});

module.exports = mongoose.model("User", userSchema);
