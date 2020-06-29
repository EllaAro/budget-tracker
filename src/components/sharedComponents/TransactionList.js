import React from "react";

const TransactionList = ({ transactionActionType, transactionList }) => {
  return (
    <React.Fragment>
      <h2 className="header-history">{`${transactionActionType} History`}</h2>
      <div className="transactions">
        <ul className="transaction-list">{transactionList}</ul>
      </div>
    </React.Fragment>
  );
};

export default TransactionList;
