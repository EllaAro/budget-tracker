import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const { balance } = useSelector((state) => state);
  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <p>{`$${balance}`}</p>
    </div>
  );
};

export default Balance;
