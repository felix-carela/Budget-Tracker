const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  incomeName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String
}, {
  timestamps: true
});

const expenseSchema = new Schema({
  expenseName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    min: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String
}, {
  timestamps: true
});

const budgetSchema = new Schema({
  month: { type: String, required: true },
  year: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 2023,
  },
  passMonth: { type: Boolean, default: false },
  incomes: [incomeSchema],
  expenses: [expenseSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Budget', budgetSchema);

// Path: controllers/budgets.js