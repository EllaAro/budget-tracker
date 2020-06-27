import React from "react";

const TransactionList = ({ transactionAction }) => {
  return (
    <div>
      <h2>{`${transactionAction} History`}</h2>
      <ul>
        <li>
          <span>Salary</span>
          <span>$5000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;
