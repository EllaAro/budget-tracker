import React from "react";
import TransactionListItem from "./TransactionListItem";

const TransactionList = ({ transactionAction }) => {
  return (
    <div>
      <h2>{`${transactionAction} History`}</h2>
      <ul>
        <TransactionListItem />
      </ul>
    </div>
  );
};

export default TransactionList;
