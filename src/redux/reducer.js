import {
  ADD_INCOME,
  ADD_EXPENSE,
  DELETE_INCOME,
  DELETE_EXPENSE,
} from "./types";

const initialState = {
  budget: 0,
  incomeTransactions: [],
  expenseTransactions: [],
};

export function budgetTrackerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        budget: state.budget + action.payload.incomeAmount,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        budget: state.budget - action.payload.expenseAmount,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };
    case DELETE_INCOME:
      return {
        ...state,
        budget:
          state.budget -
          state.incomeTransactions.filter(
            (incomeTransaction) => incomeTransaction.id === action.payload
          )[0].incomeAmount,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        budget:
          state.budget +
          state.expenseTransactions.filter(
            (expenseTransaction) => expenseTransaction.id === action.payload
          )[0].expenseAmount,
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
