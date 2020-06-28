import React from "react";

const TransactionListItem = ({ id, type, amount }) => {
  return (
    <li>
      <span>{type}</span>
      <span>${amount}</span>
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TransactionListItem;
