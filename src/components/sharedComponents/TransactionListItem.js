import React from "react";
import { useDispatch } from "react-redux";

const TransactionListItem = ({ id, type, amount, deleteFunction }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{type}</span>
      <span>${amount}</span>
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
