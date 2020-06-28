import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TransactionAction from "./sharedComponents/TransactionAction";
import { addIncome } from "../redux/actions";

const IncomeActions = () => {
  const dispatch = useDispatch();
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: "",
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      dispatch(addIncome(newIncomeTransaction));

      setIncome({
        incomeText: "",
        incomeAmount: "",
      });
    }
  };

  return (
    <TransactionAction
      placeHolder="Add Income"
      transactionActionType="income"
      nameTextType="incomeText"
      nameNumberType="incomeAmount"
      onSubmitTransaction={onSubmitIncome}
      onChangeTransaction={onChangeIncome}
      textValue={incomeText}
      amoutValue={incomeAmount}
    />
  );
};
export default IncomeActions;
