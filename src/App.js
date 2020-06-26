import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionActions from "./components/TransactionActions";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Balance />
        <TransactionActions />
      </div>
    </div>
  );
};

export default App;
