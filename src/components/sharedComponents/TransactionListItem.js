import React from "react";
import { useDispatch } from "react-redux";

const TransactionListItem = ({ id, type, amount, deleteFunction }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{type}</td>
      <td>{`$${amount}`}</td>
      <td>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteFunction(id))}
        >
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TransactionListItem;
