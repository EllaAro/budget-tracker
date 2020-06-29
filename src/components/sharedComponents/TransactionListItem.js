import React from "react";
import { useDispatch } from "react-redux";

const TransactionListItem = ({ id, type, amount, deleteFunction }) => {
  const dispatch = useDispatch();

  return (
    <li className="transaction">
      <span>{`${type}, the amount is: $${amount}`}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteFunction(id))}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TransactionListItem;
