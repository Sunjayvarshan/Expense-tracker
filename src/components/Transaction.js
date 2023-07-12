import React from "react";

const Transaction = ({ item }) => {
  return (
    <div>
      <li className={item.amount > 0 ? "plus" : "minus"}>
        {item.text} <span>{item.amount}</span>
      </li>
    </div>
  );
};

export default Transaction;
