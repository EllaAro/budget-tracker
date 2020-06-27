import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Balance />
        <Transactions />
      </div>
    </div>
  );
};

export default App;
