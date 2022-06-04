import React from 'react';
import CreditCard from '../components/CreditCard';
import loadingIcon from '../assets/loading.svg';
import TopBar from '../components/TopBar';
import { DB, auth } from '../config/firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import TransactionsCard from '../components/TransactionsCard';
import { useSelector } from 'react-redux';

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      const getTransactions = () => {
        const dbRef = ref(DB, `transactions/${auth.currentUser.uid}`);

        onValue(dbRef, (data) => {
          setTransactions(data.val());
        });
      };
      getTransactions();
    }
  }, [user]);

  const styles = {
    wrapper: 'pt-5 pb-28 px-5 min-h-screen',
    balanceSection: 'pb-2 pt-10 flex justify-between items-end md:w-[27rem]',
    balP: 'text-grey',
    balSpan: 'text-2xl font-semibold',
    addFunds: 'bg-grey  text-xs p-3 rounded-md md:bg-white',
    transacSection: 'mt-10',
    transacH5: 'font-semibold pb-5',
    img: 'w-16 m-auto',
  };

  return (
    <section className={styles.wrapper}>
      <TopBar text={'Wallet'} link={'/'} />

      <div className={styles.balanceSection}>
        <div>
          <p className={styles.balP}>Total Balance</p>
          <span className={styles.balSpan}>Bal: ₦{50000}</span>
        </div>

        <button className={styles.addFunds}>ADD FUNDS</button>
      </div>

      <CreditCard />

      <section className={styles.transacSection}>
        <h5 className={styles.transacH5}>Recent Transactions</h5>

        {transactions?.length === 0 ? (
          <>
            <img src={loadingIcon} alt="loading.." className={styles.img} />
          </>
        ) : (
          <>
            {transactions?.map((item, index) => (
              <TransactionsCard key={item.name} item={item} index={index} />
            ))}
          </>
        )}
      </section>
    </section>
  );
};

export default Wallet;
