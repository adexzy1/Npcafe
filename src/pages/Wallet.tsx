import React from 'react';
import CreditCard from '../components/creditCard/CreditCard';
import loadingIcon from '../assets/loading.svg';
import TopBar from '../components/topbar/TopBar';
import { DB, auth } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import TransactionsCard from '../components/transactions/TransactionsCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../Redux/store';
import { transaction } from '../Model';

const Wallet = () => {
  const [transactions, setTransactions] = useState<transaction[]>([]);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user) {
      const getTransactions = () => {
        const dbRef = ref(DB, `transactions/${auth.currentUser?.uid}`);

        onValue(dbRef, (data) => {
          setTransactions(data.val());
        });
      };
      getTransactions();
    }
  }, [user]);

  const styles = {
    wrapper: 'pt-5 pb-28 px-5 min-h-screen',
    container:
      'md:m-auto md:w-full lg:w-[75%] lg:px-[5%] md:p-5 md:bg-white md:mt-10 md:rounded-2xl',
    balanceSection: 'pb-2 pt-10 flex justify-between items-end md:pb-10 ',
    balP: 'text-grey',
    balSpan: 'text-2xl font-semibold',
    addFunds:
      'bg-grey md:bg-yellow md:text-white hover:bg-yellowDark text-xs p-3 rounded-md md:bg-white',
    transacSection: 'mt-10 lg:w-full md:pt-10 md:rounded-xl md:min-h-[27rem]',
    transacTitle: 'flex items-center justify-between font-semibold pb-5',
    img: 'w-16 m-auto',
    viewAll: 'text-yellow text-sm hover:text-yellowDark',
  };

  return (
    <section className={styles.wrapper}>
      <TopBar text={'Wallet'} link={'/'} />

      <div className={styles.container}>
        <div className={styles.balanceSection}>
          <div>
            <p className={styles.balP}>Total Balance</p>
            <span className={styles.balSpan}>Bal: ₦{50000}</span>
          </div>

          <button className={styles.addFunds}>ADD FUNDS</button>
        </div>

        <CreditCard />

        <section className={styles.transacSection}>
          <div className={styles.transacTitle}>
            <h5>Recent Transactions</h5>
            <Link className={styles.viewAll} to={'/orders'}>
              View All
            </Link>
          </div>

          {transactions === null ? (
            <>
              <img src={loadingIcon} alt="loading.." className={styles.img} />
            </>
          ) : (
            <>
              {transactions?.slice(0, 3).map((item, index) => (
                <TransactionsCard key={item.name} item={item} />
              ))}
            </>
          )}
        </section>
      </div>
    </section>
  );
};

export default Wallet;
