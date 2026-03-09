import { useEffect, useState } from "react";
import api from "../api";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await api.get("/transactions");
    setTransactions(res.data.data);
  };

  return (
    <div>
      <h1>Transaction Dashboard</h1>
      <TransactionTable transactions={transactions} />
    </div>
  );
}