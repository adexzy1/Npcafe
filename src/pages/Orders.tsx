import SearchBar from '../components/search/SearchBar';
import TopBar from '../components/topbar/TopBar';
import loadingIcon from '../assets/loading.svg';
import { DB } from '../config/firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import OrderList from '../components/orderList/OrderList';

const Orders = () => {
  // state
  const [transactions, setTransactions] = useState([]);
  const [searchedText, setSearchedText] = useState<string>('');

  // Redux Hooks
  const { user } = useSelector((state: RootState) => state.user);

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
    wrapper: 'pt-5 md:pt-8 pb-28 md:pb-10 px-5 min-h-screen',
    topContainer: 'md:flex items-center justify-between',
    transactions: 'mt-10 lg:w-[65%] md:mt-20 lg:mx-auto',
    img: 'w-16 m-auto',
  };

  return (
    <section className={styles.wrapper}>
      <div>
        <section className={styles.topContainer}>
          <TopBar text="Orders" link={'/'} />

          <SearchBar
            items={transactions}
            searchedText={searchedText}
            setSearchedText={setSearchedText}
          />
        </section>

        <section className={styles.transactions}>
          {transactions === null ? (
            <>
              <img src={loadingIcon} alt="loading.." className={styles.img} />
            </>
          ) : (
            <OrderList
              transactions={transactions}
              searchedText={searchedText}
            />
          )}
        </section>
      </div>
    </section>
  );
};

export default Orders;
