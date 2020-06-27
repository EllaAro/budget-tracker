import React from "react";

const TransactionListItem = () => {
  return (
    <li>
      <span>Salary</span>
      <span>$5000</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TransactionListItem;
