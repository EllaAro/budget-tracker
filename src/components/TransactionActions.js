import React from "react";
import TransactionAction from "./sharedComponents/TransactionAction";

const TransactionActions = () => {
  return (
    <React.Fragment>
      <TransactionAction placeHolder="Add Income" transactionAction="income" />
      <TransactionAction
        placeHolder="Add Expenses"
        transactionAction="expense"
      />
    </React.Fragment>
  );
};

export default TransactionActions;
