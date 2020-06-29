import React from "react";

const TransactionList = ({ transactionActionType, transactionList }) => {
  return (
    <React.Fragment>
      <h2 className="header-history">{`${transactionActionType} History`}</h2>
      <div className="transactions">
        <table>
          <thead>
            <tr>
              <th scope="col">transaction</th>
              <th scope="col">Amount</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{transactionList}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TransactionList;
