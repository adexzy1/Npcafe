import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import TransactionsCard from '../components/TransactionsCard';
import loadingIcon from '../assets/loading.svg';
import { DB } from '../config/firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      const getTransactions = () => {
        const dbRef = ref(DB, `transactions/${user.uid}`);
        onValue(dbRef, (data) => {
          setTransactions(data.val());
        });
      };

      getTransactions();
    }
  }, [user]);

  const styles = {
    wrapper: 'pt-5 pb-28 px-5 min-h-screen',
    topContainer: 'md:flex items-center justify-between',
    transactions: 'mt-10',
    img: 'w-16 m-auto',
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.topContainer}>
        <TopBar text="Orders" link={'/'} />

        <SearchBar items={transactions} />
      </section>

      <section className={styles.transactions}>
        {transactions.length === 0 ? (
          <>
            <img src={loadingIcon} alt="loading.." className={styles.img} />
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

export default Orders;
