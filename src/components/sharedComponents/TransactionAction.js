import React from "react";

const TransactionAction = ({ placeHolder, transactionAction }) => {
  return (
    <form>
      <div className={`input-actions ${transactionAction}`}>
        <input type="text" placeholder={placeHolder} autoComplete="off" />
        <input type="number" placeholder="Amount" autoComplete="off" />
        <input type="submit" className="submit-btn" value="Submit" />
      </div>
    </form>
  );
};

export default TransactionAction;
