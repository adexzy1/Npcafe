import { transaction } from '../../Model';
import TransactionsCard from '../transactions/TransactionsCard';

interface Props {
  transactions: transaction[];
  searchedText: string;
}

const OrderList = ({ searchedText, transactions }: Props) => {
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
          <TransactionsCard key={item.name} item={item} />
        ))}
    </div>
  );
};

export default OrderList;
