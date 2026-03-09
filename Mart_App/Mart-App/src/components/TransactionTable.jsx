import { memo, useMemo } from "react";

const TransactionTable = ({ transactions }) => {

  const renderedTransactions = useMemo(() => {
    return transactions.map((tx) => (
      <tr key={tx.id}>
        <td>{tx.id}</td>
        {/* <td>{tx.user_id}</td> */}
        <td>₹{tx.total_amount}</td>
        <td>{tx.status}</td>
        <td>{new Date(tx.transaction_date).toLocaleString()}</td>
      </tr>
    ));
  }, [transactions]);

  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            {/* <th>User ID</th> */}
            <th>Total Amount</th>
            <th>Status</th>
            <th>Transaction Date</th>
          </tr>
        </thead>

        <tbody>{renderedTransactions}</tbody>
      </table>
    </div>
  );
};

export default memo(TransactionTable);