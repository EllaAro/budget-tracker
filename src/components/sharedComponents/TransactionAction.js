import React from "react";

const TransactionAction = ({
  placeHolder,
  transactionActionType,
  onSubmitTransaction,
  onChangeTransaction,
  textValue,
  amoutValue,
  nameTextType,
  nameNumberType,
}) => (
  <form onSubmit={onSubmitTransaction}>
    <div className={`input-actions ${transactionActionType}`}>
      <input
        type="text"
        value={textValue}
        name={nameTextType}
        placeholder={placeHolder}
        autoComplete="off"
        onChange={onChangeTransaction}
      />
      <input
        type="number"
        value={amoutValue}
        name={nameNumberType}
        placeholder="Amount"
        autoComplete="off"
        onChange={onChangeTransaction}
      />
      <input type="submit" className="submit-btn" value="Submit" />
    </div>
  </form>
);

export default TransactionAction;
