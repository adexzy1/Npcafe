import TransactionsCard from '../components/TransactionsCard';

const OrderCollection = ({
  transactions,
  setActiveTransaction,
  setShowModal,
}) => {
  return (
    <div>
      {transactions.map((item) => (
        <TransactionsCard
          key={item.name}
          item={item}
          setActiveTransaction={setActiveTransaction}
          setShowModal={setShowModal}
        />
      ))}
    </div>
  );
};

export default OrderCollection;
