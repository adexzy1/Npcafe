import TransactionsCard from './TransactionsCard';
import { MdCancel } from 'react-icons/md';
import { details, transaction } from '../../Model';
import { MouseEvent } from 'react';

interface props {
  transaction: transaction | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransactionModal = ({ transaction, setShowModal }: props) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    setShowModal(false);
    document.body.style.overflowY = 'initial';
  };

  const styles = {
    wrapper:
      ' w-full pt-7 bg-rgba p-5 md:pt-10 min-h-full fixed left-0 top-0 bottom-0 w-full z-10 transform transition cursor-default',
    container: 'bg-yellow p-5 md:w-[50%] rounded-xl mx-auto  mt-10',
    topbar_container:
      'bg-yellowDark text-white mb-5 flex justify-between items-center p-3 rounded-xl',
    status: `${
      transaction?.status === 'Completed' ? 'text-green-400' : 'text-yellow'
    } ${
      transaction?.status === 'Canceled' && 'text-[#c8161d]'
    } py-2 px-3 rounded-lg font-light text-sm bg-white`,
    backBtn: 'text-2xl text-white  rounded-lg cursor-pointer',
    h5: 'text-2xl font-semibold',
    topbar: 'flex items-center gap-4 ',
    details: 'py-5 font-bold',
    totalWrapper:
      'flex justify-between items-center font-semibold mt-7 text-xl',
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topbar_container}>
          <div className={styles.topbar}>
            <MdCancel
              onClick={(e) => handleClick(e)}
              className={styles.backBtn}
            />
            <h5 className={styles.h5}>{'Receipt'}</h5>
          </div>

          <p className={styles.status}>{transaction?.status}</p>
        </div>

        <p className={styles.details}>DETAILS</p>
        {transaction?.details!.map((item: details) => (
          <TransactionsCard key={item.id} item={item} orderItem />
        ))}
        <div className={styles.totalWrapper}>
          <p>Total</p>
          <p>₦{5000}</p>
        </div>
      </div>
    </section>
  );
};

export default TransactionModal;
