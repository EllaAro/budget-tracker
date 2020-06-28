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
}) => {
  const disableSubmitBtn =
    textValue.replace(/\s/g, "").length === 0 || amoutValue.length === 0;

  return (
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
        <input
          type="submit"
          className={`submit-btn ${disableSubmitBtn ? "disabled" : ""}`}
          value="Submit"
          disabled={disableSubmitBtn}
        />
      </div>
    </form>
  );
};
export default TransactionAction;
