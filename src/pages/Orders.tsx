import SearchBar from '../components/SearchBar';
import TopBar from '../components/TopBar';
import loadingIcon from '../assets/loading.svg';
import { DB } from '../config/firebase';
import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderCollection from '../components/OrderCollection';
import Transaction from '../components/transaction';
import { RootState } from '../Redux/store';

const Orders = () => {
  // state
  const [transactions, setTransactions] = useState([]);
  const [activeTransaction, setActiveTransaction] = useState('Order#1');
  const [showModal, setShowModal] = useState(false);
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
    transactions:
      'mt-10 lg:w-[23rem] xl:w-[32rem] md:rounded-xl min-h-[35rem] md:mt-20',
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
            <>
              <OrderCollection
                transactions={transactions}
                setActiveTransaction={setActiveTransaction}
                setShowModal={setShowModal}
                searchedText={searchedText}
              />
            </>
          )}
        </section>
      </div>
      {transactions !== null && (
        <Transaction
          transactions={transactions}
          activeTransaction={activeTransaction}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </section>
  );
};

export default Orders;
