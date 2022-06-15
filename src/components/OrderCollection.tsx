import { transaction } from '../Model';
import TransactionsCard from './TransactionsCard';

interface Props {
  transactions: transaction[];
  setActiveTransaction?: React.Dispatch<React.SetStateAction<string>>;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderCollection = ({ ...props }: Props) => {
  const { transactions, setActiveTransaction, setShowModal } = props;

  return (
    <div>
      {transactions.map((item: transaction) => (
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
