import React from 'react';
import CreditCard from '../components/CreditCard';
import TopBar from '../components/TopBar';
import Transactions from '../components/Transactions';

const Wallet = () => {
  return (
    <section className="min-h-screen bg-white pt-5 pb-28">
      <TopBar text={'Wallet'} />

      <div className="px-5 pb-2 pt-10 flex justify-between items-end">
        <div>
          <p className="text-grey">Total Balance</p>
          <span className="text-2xl font-semibold">₦{50000}</span>
        </div>

        <button className="bg-grey  text-xs p-3 rounded-md ">ADD FUNDS</button>
      </div>

      <CreditCard />

      <Transactions />
    </section>
  );
};

export default Wallet;
