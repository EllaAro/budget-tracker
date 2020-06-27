import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from "./types";

const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions:
    JSON.parse(localStorage.getItem("expenseTransactions")) || [],
};

export function budgetTrackerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
