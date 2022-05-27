import React from 'react';
import TransactionsCard from './TransactionsCard';

const Transactions = () => {
  return (
    <section className="px-5 mt-10">
      <h5 className="font-medium text-xl">Transactions</h5>

      <section className="mt-5">
        <TransactionsCard orderItem />
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Completed'} />
        <TransactionsCard isComplete={'Canceled'} />
        <TransactionsCard />
      </section>
    </section>
  );
};

export default Transactions;
