import React from 'react';

const money = n => new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:2}).format(Number(n||0));

export default function TransactionHistory({transactions=[]}) {
  return <div className="card">
    <h2>Transaction History</h2>
    <p>Complete admin ledger of deposits, investments, sales, profit distributions and withdrawals.</p>
    <div className="tablewrap">
      <table>
        <thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Reference</th><th>Description</th></tr></thead>
        <tbody>{transactions.length ? transactions.map((t,i)=><tr key={t.id||i}>
          <td>{t.created_at ? new Date(t.created_at).toLocaleString() : '—'}</td>
          <td>{t.transaction_type || '—'}</td>
          <td>{money(t.amount)}</td>
          <td>{t.reference_id || t.payment_reference || '—'}</td>
          <td>{t.description || '—'}</td>
        </tr>) : <tr><td colSpan="5">No transactions recorded yet.</td></tr>}</tbody>
      </table>
    </div>
  </div>;
}
