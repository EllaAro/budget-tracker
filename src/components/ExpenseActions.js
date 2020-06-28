import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TransactionAction from "./sharedComponents/TransactionAction";
import { addExpense } from "../redux/actions";

const ExpenseActions = () => {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: "",
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      dispatch(addExpense(newExpenseTransaction));

      setExpense({
        expenseText: "",
        expenseAmount: "",
      });
    }
  };

  return (
    <TransactionAction
      placeHolder="Add Expense"
      transactionActionType="expense"
      nameTextType="expenseText"
      nameNumberType="expenseAmount"
      onSubmitTransaction={onSubmitExpense}
      onChangeTransaction={onChangeExpense}
      textValue={expenseText}
      amoutValue={expenseAmount}
    />
  );
};
export default ExpenseActions;
