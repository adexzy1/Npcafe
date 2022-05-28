import TopBar from '../components/TopBar';
import TransactionsCard from '../components/TransactionsCard';

const Orders = () => {
  return (
    <section className="pt-5 pb-28">
      <TopBar text="Orders" />
      <section className="mt-10 px-5">
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Completed'} />
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Pending'} />
        <TransactionsCard isComplete={'Pending'} />
      </section>
    </section>
  );
};

export default Orders;
