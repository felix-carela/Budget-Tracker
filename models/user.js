const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomesSchema = new Schema({
  income: String,
  amount: Number
});

const expensesSchema = new Schema({
  expense: String,
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
