import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TransactionList from "./sharedComponents/TransactionList";

const IncomeList = () => {
  const { incomeTransactions } = useSelector((state) => state);
  return (
    <TransactionList
      transactionActionType="Income"
      transactions={incomeTransactions}
    />
  );
};

export default IncomeList;
