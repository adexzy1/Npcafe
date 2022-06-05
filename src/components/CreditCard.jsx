import { useState } from 'react';
import { useSelector } from 'react-redux';

const CreditCard = () => {
  const [addCard, setAddCard] = useState(false);
  const { user } = useSelector((state) => state.user);

  const CardNumber = () => {
    const number = 1234567890456782;
    return number.toString().replace(/\d{4}(?=.)/g, '$& ');
  };

  const styles = {
    wrapper: 'mt-2 min-h-[15rem] rounded-xl',
    cardContainer: 'relative h-full text-white md:w-[27rem] md:m-auto',
    cardImg: 'w-full h-full',
    cardDetailsContainer: 'absolute bottom-0 px-7 w-full',
    Cvv: 'text-right pb-5',
    cardNumber: 'text-xl tracking-wide',
    cardName: 'py-5 flex items-center justify-between',
    placeHolderCont:
      'bg-yellow min-h-[15rem] rounded-lg flex justify-center items-center',
    btn: 'bg-white text-yellow py-3  w-2/5 rounded-md',
  };

  return (
    <section className={styles.wrapper}>
      {!addCard ? (
        <div className={styles.cardContainer}>
          <img
            src="https://ik.imagekit.io/oz87xfgij/AppImg/credircard2_Uz7JDZP7y.png"
            alt="creditcard"
            className={styles.cardImg}
          />
          <div className={styles.cardDetailsContainer}>
            <p className={styles.Cvv}>CVV 886</p>
            <p className={styles.cardNumber}>{CardNumber()}</p>
            <p className={styles.cardName}>
              {user?.displayName}
              <span>20/22</span>
            </p>
          </div>
        </div>
      ) : (
        <section className={styles.placeHolderCont}>
          <button onClick={() => setAddCard(true)} className={styles.btn}>
            ADD NEW CARD
          </button>
        </section>
      )}
    </section>
  );
};

export default CreditCard;
