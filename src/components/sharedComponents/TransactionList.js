import React from "react";
import TransactionListItem from "./TransactionListItem";

const TransactionList = ({ transactionActionType, transactions }) => {
  // const transactionList = transactions.map((transaction) => (
  //   <TransactionListItem type="" amount="" />
  // ));
  return (
    <div>
      <h2>{`${transactionActionType} History`}</h2>
      <ul>{}</ul>
    </div>
  );
};

export default TransactionList;
