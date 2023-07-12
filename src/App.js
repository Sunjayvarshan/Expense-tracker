import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { useEffect, useState } from "react";

const initialTransactions = [
  {
    id: 128566,
    text: "Milk",
    amount: -20,
  },
  {
    id: 128567,
    text: "Bread",
    amount: -25,
  },
];

export default function App() {
  const [items, setItem] = useState(initialTransactions);
  const [totalBalance, setTotalBalance] = useState(0);
  const [positiveEntries, setPositiveEntries] = useState([]);
  const [negativeEntries, setNegativeEntries] = useState([]);

  function calculateTotalBalance() {
    let balance = 0;
    for (let i = 0; i < items.length; i++) {
      balance += Number(items[i].amount);
    }
    setTotalBalance(balance);
  }

  useEffect(() => {
    calculateTotalBalance();
  });

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
    console.log(items);
  }

  function updateEntries() {
    const positive = [];
    const negative = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.amount >= 0) {
        positive.push(item);
      } else {
        negative.push(item);
      }
    }

    setPositiveEntries(positive);
    setNegativeEntries(negative);
  }

  useEffect(() => {
    updateEntries();
  });

  return (
    <div>
      <Header i={initialTransactions} />
      <div className="container">
        <Balance totalBalance={totalBalance} />
        <IncomeExpenses
          positiveEntries={positiveEntries}
          negativeEntries={negativeEntries}
        />
        <TransactionList items={items} />
        <AddTransaction onAddItem={handleAddItem} />
      </div>
    </div>
  );
}
