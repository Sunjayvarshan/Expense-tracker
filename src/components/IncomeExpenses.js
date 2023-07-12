import React from "react";

const IncomeExpenses = ({ positiveEntries, negativeEntries }) => {
  let totalIncome = 0;
  let totalExpense = 0;

  for (let i = 0; i < positiveEntries.length; i++) {
    totalIncome += Number(positiveEntries[i].amount);
  }

  for (let i = 0; i < negativeEntries.length; i++) {
    totalExpense += Number(negativeEntries[i].amount);
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {totalIncome}$
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {totalExpense}$
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
