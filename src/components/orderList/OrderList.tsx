import { transaction } from '../../Model';
import TransactionsCard from '../transactions/TransactionsCard';

interface Props {
  transactions: transaction[];
  searchedText: string;
  setActiveTransaction?: React.Dispatch<React.SetStateAction<string>>;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderCollection = ({ searchedText, ...props }: Props) => {
  const { transactions, setActiveTransaction, setShowModal } = props;

  return (
    <div>
      {transactions
        .filter((item) => {
          if (searchedText !== '') {
            return item.name
              .toLocaleLowerCase()
              .includes(searchedText.toLocaleLowerCase());
          } else {
            return item;
          }
        })
        .map((item: transaction) => (
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
