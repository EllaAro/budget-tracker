import React, { useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState(0.0);

  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <p>{`$${balance}`}</p>
    </div>
  );
};

export default Balance;
