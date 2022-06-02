import React from 'react';
import CreditCard from '../components/CreditCard';
import loadingIcon from '../assets/loading.svg';
import TopBar from '../components/TopBar';
import { DB, auth } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import TransactionsCard from '../components/TransactionsCard';

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = () => {
      const dbRef = ref(DB, `transactions/${auth.currentUser.uid}`);

      onValue(dbRef, (data) => {
        setTransactions(data.val());
      });
    };
    getTransactions();

    return () => getTransactions;
  }, []);

  return (
    <section className="pt-5 pb-28">
      <TopBar text={'Wallet'} link={'/'} />

      <div className="px-5 pb-2 pt-10 flex justify-between items-end">
        <div>
          <p className="text-grey">Total Balance</p>
          <span className="text-2xl font-semibold">₦{50000}</span>
        </div>

        <button className="bg-grey  text-xs p-3 rounded-md ">ADD FUNDS</button>
      </div>

      <CreditCard />

      <section className="mt-10 px-5">
        <h5 className="font-semibold pb-5">Transactions</h5>

        {transactions.length === 0 ? (
          <>
            <img src={loadingIcon} alt="loading.." className="w-16 m-auto" />
          </>
        ) : (
          <>
            {transactions.map((item, index) => (
              <TransactionsCard key={item.name} item={item} index={index} />
            ))}
          </>
        )}
      </section>
    </section>
  );
};

export default Wallet;
