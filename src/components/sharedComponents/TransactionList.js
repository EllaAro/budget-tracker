import React from "react";

const TransactionList = ({ transactionActionType, transactionList }) => {
  return (
    <div>
      <h2 className="header-history">{`${transactionActionType} History`}</h2>
      <ul>{transactionList}</ul>
    </div>
  );
};

export default TransactionList;
