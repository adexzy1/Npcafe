import { useState } from 'react';
import { useSelector } from 'react-redux';

const CreditCard = () => {
  const [addCard, setAddCard] = useState(false);
  const { user } = useSelector((state) => state.user);

  const CardNumber = () => {
    const number = 1234567890456782;
    return number.toString().replace(/\d{4}(?=.)/g, '$& ');
  };

  return (
    <section className="mt-2 px-3 min-h-[15rem] rounded-xl">
      {addCard ? (
        <div className="relative h-full text-white">
          <img
            src="https://ik.imagekit.io/oz87xfgij/AppImg/credircard2_Uz7JDZP7y.png"
            alt="creditcard"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 px-7 w-full">
            <p className="text-right pb-5">CVV 886</p>
            <p className="text-xl tracking-wide">{CardNumber()}</p>
            <p className="py-5 flex items-center justify-between">
              {user?.displayName}
              <span>20/22</span>
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
