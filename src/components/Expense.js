import React from "react";
import ExpenseActions from "./ExpenseActions";
import ExpenseList from "./ExpenseList";

const Expense = () => {
  return (
    <div>
      <ExpenseActions />
      <ExpenseList />
    </div>
  );
};

export default Expense;
