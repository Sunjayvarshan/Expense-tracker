import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ items }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* <li className="minus"> */}
        {items.map((item) => (
          <Transaction item={item} key={item.id} />
        ))}
        <button className="delete-btn">x</button>
        {/* </li> */}
      </ul>
    </>
  );
};

export default TransactionList;
