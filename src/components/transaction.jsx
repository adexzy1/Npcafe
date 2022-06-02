import React from 'react';
import TopBar from './TopBar';
import loadingIcon from '../assets/loading.svg';
import TransactionsCard from './TransactionsCard';
import { DB } from '../config/firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Transaction = () => {
  const params = useParams();
  const [transactions, setTransactions] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      const getTransactions = () => {
        const dbRef = ref(
          DB,
          'transactions/' + user.uid + `/${params.id}/details`
        );
        onValue(dbRef, (data) => {
          setTransactions(data.val());
        });
      };

      getTransactions();
    }
  }, [user, params]);

  const getTotal = () => {
    const orderTotal = transactions.reduce((total, transactions) => {
      const { price } = transactions;

      return (total += price);
    }, 0);

    return orderTotal;
  };

  return (
    <section className="pt-5">
      <TopBar text={'Oder#1'} link={-1} />

      {!user && (
        <img src={loadingIcon} alt="loading.." className="w-16 m-auto" />
      )}

      {user && (
        <>
          {' '}
          <section className="px-5 pt-5">
            {transactions.map((item) => (
              <TransactionsCard key={item.id} item={item} orderItem />
            ))}
          </section>
          <section className="text-right px-5 font-semibold text-xl text-yellow pt-5">
            <p>
              Total:{' '}
              <span className="font-normal text-black">{getTotal()}</span>
            </p>
          </section>
        </>
      )}
    </section>
  );
};

export default Transaction;
