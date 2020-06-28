import {
  ADD_INCOME,
  ADD_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE,
} from "./types";

export const deleteIncome = (id) => ({
  type: DELETE_INCOME,
  payload: id,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
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
