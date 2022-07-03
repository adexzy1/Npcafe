import React from 'react';
import TransactionsCard from './TransactionsCard';
import { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { details, transaction } from '../../Model';

interface props {
  transactions: transaction[];
  activeTransaction: any;
  setShowModal: any;
  showModal: any;
}

const Transaction = ({ ...props }: props) => {
  const { transactions, activeTransaction, setShowModal, showModal } = props;

  const [activeTransac, setActiveTransac] = useState<transaction>();

  useEffect(() => {
    const exist = transactions.find((x) => x.name === activeTransaction);
    setActiveTransac(exist);
  }, [activeTransaction, transactions]);

  const handleClick = () => {
    setShowModal(false);
  };

  const styles = {
    wrapper: `${
      showModal ? 'translate-x-0' : 'translate-x-[100vw] lg:translate-x-0'
    } w-full pt-7 bg-[#FFC27C] p-5 md:pt-10 min-h-screen fixed right-0 top-0 md:w-[75%] z-30 transform transition lg:rounded-tl-3xl lg:rounded-bl-3xl lg:w-[40%]`,
    container: 'mb-10 flex justify-between items-center',
    status: `${
      activeTransac?.status === 'Completed' ? 'bg-green-400' : 'bg-yellow'
    }  
    ${activeTransac?.status === 'Canceled' && 'bg-[#c8161d]'}
     text-white py-2 px-3 rounded-lg font-light text-sm`,
    backBtn:
      'text-xl bg-white w-10 h-10 p-2 rounded-lg cursor-pointer lg:hidden',
    h5: 'text-2xl font-semibold',
    topbar: 'flex items-center gap-4',
    details: 'py-5 font-light',
    totalWrapper:
      'flex justify-between items-center font-semibold mt-7 text-xl',
  };

  return (
    <section className={styles.wrapper}>
      {activeTransac?.details && (
        <>
          <div className={styles.container}>
            <div className={styles.topbar}>
              <HiOutlineArrowNarrowLeft
                onClick={handleClick}
                className={styles.backBtn}
              />
              <h5 className={styles.h5}>{activeTransaction}</h5>
            </div>

            <p className={styles.status}>{activeTransac!.status}</p>
          </div>
          <p className={styles.details}>DETAILS</p>
          {activeTransac!.details.map((item: details) => (
            <TransactionsCard key={item.id} item={item} orderItem />
          ))}
          <div className={styles.totalWrapper}>
            <p>Total</p>
            <p>{activeTransac!.total}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Transaction;
