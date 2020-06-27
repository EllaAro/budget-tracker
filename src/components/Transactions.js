import React from "react";
import Expense from "./Expense";
import Income from "./Income";

const Transactions = () => {
  return (
    <React.Fragment>
      <Expense />
      <Income />
    </React.Fragment>
  );
};

export default Transactions;
