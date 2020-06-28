import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "./sharedComponents/TransactionList";
import TransactionListItem from "./sharedComponents/TransactionListItem";
import { deleteExpense } from "../redux/actions";

const ExpenseList = () => {
  const { expenseTransactions } = useSelector((state) => state);

  const expenseList = expenseTransactions
    ? expenseTransactions.map((transaction) => (
        <TransactionListItem
          id={transaction.id}
          type={transaction.expenseText}
          amount={transaction.expenseAmount}
          deleteFunction={deleteExpense}
        />
      ))
    : [];

  return (
    <TransactionList
      transactionActionType="Expense"
      transactionList={expenseList}
    />
  );
};

export default ExpenseList;
