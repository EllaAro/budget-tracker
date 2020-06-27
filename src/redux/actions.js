import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from "./types";

export const deleteTransaction = (id) => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const addIncome = (incomeTransaction) => ({
  type: ADD_INCOME,
  payload: incomeTransaction,
});

export const addExpense = (expenseTransaction) => ({
  type: ADD_EXPENSE,
  payload: expenseTransaction,
});
