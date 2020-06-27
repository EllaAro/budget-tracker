import React from "react";

const TransactionAction = ({ placeHolder, transactionAction }) => {
  return (
    <form>
      <div className={`input-actions ${transactionAction}`}>
        <input type="text" placeholder={placeHolder} autocomplete="off" />
        <input type="number" placeholder="Amount" autocomplete="off" />
        <input type="submit" className="submit-btn" value="Submit" />
      </div>
    </form>
  );
};

export default TransactionAction;
