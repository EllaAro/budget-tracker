import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "./sharedComponents/TransactionList";
import TransactionListItem from "./sharedComponents/TransactionListItem";

const IncomeList = () => {
  const { incomeTransactions } = useSelector((state) => state);

  const incomeList = incomeTransactions
    ? incomeTransactions.map((transaction) => (
        <TransactionListItem
          id={transaction.id}
          type={transaction.incomeText}
          amount={transaction.incomeAmount}
        />
      ))
    : [];
  return (
    <TransactionList
      transactionActionType="Income"
      transactionList={incomeList}
    />
  );
};

export default IncomeList;
