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

  return (
    <section className="pt-5 pb-28">
      <TopBar text="Orders" link={'/'} />

      <section className="px-5">
        <SearchBar items={transactions} />
      </section>

      <section className="mt-10 px-5">
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

export default Orders;
