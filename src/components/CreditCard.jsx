import { useState } from 'react';
import creditcard from '../assets/credircard2.png';

const CreditCard = () => {
  const [addCard, setAddCard] = useState(false);

  return (
    <section className="mt-2 px-3 min-h-[15rem] rounded-xl">
      {addCard ? (
        <div className="relative h-full text-white">
          <img src={creditcard} alt="creditcard" className="w-full h-full" />
          <div className="absolute bottom-0 px-7 w-full">
            <p className="text-right pb-5">CVV 886</p>
            <p className="text-xl tracking-wide font-semibold">
              1234567890456782
            </p>
            <p className="py-5 flex items-center justify-between">
              John Martins <span>20/22</span>
            </p>
          </div>
        </div>
      ) : (
        <section className="bg-yellow min-h-[15rem] rounded-lg flex justify-center items-center">
          <button
            onClick={() => setAddCard(true)}
            className="bg-white text-yellow py-3  w-2/5 rounded-md"
          >
            ADD NEW CARD
          </button>
        </section>
      )}
    </section>
  );
};

export default CreditCard;
