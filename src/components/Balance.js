import React from "react";

function Balance({ totalBalance }) {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className={totalBalance > 0 ? "add" : "sub"}>{totalBalance} $</h1>
    </div>
  );
}

export default Balance;
