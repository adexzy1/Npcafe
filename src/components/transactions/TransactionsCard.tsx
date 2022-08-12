import { useState } from 'react';
import { transaction } from '../../Model';
import TransactionModal from './TransactionModal';
interface Props {
  orderItem?: boolean;
  item: transaction;
}

const TransactionsCard = ({ orderItem, item }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    if (!orderItem) {
      setShowModal(true);
      document.body.style.overflowY = 'hidden';
    }
  };

  console.log(showModal);

  const styles = {
    wrapper: `${
      !orderItem && 'cursor-pointer'
    } h-20 flex bg-grey md:bg-white  items-center justify-between py-2 px-5 rounded-lg mb-3 md:mb-5`,
    date: 'text-gray-400 text-xs',
    p: 'font-semibold',
    orderItem: 'flex items-center',
    imgWrapper: 'w-16 mr-3',
    quantity: 'flex gap-1',
    total: 'text-right',
    name: 'font-semibold text-xl',
    status: `${
      item.status === 'Completed' ? 'text-green-400' : 'text-yellow'
    } ${item.status === 'Canceled' && 'text-[#c8161d]'} text-xs`,
  };

  return (
    <section onClick={handleClick} className={styles.wrapper}>
      {/* render this if its a transaction in an order component */}
      {orderItem && (
        <div className={styles.orderItem}>
          <section className={styles.imgWrapper}>
            <img src={item.img} alt={item.name} />
          </section>
          <div className={styles.quantity}>
            <span>{item.qty} x</span>
            <p className={styles.p}>{item.name}</p>
          </div>
        </div>
      )}

      {/* render this for the order component */}
      {!orderItem && (
        <>
          <section className="">
            <p className={styles.name}>{item.name}</p>
            <span className={styles.status}>{item.status}</span>
          </section>

          {showModal && (
            <TransactionModal transaction={item} setShowModal={setShowModal} />
          )}
        </>
      )}

      <div className={styles.total}>
        <p className={styles.p}>₦{item.total ? item.total : item.price}</p>
        <span className={styles.date}>{item.date}</span>
      </div>
    </section>
  );
};

export default TransactionsCard;
