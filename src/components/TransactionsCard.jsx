import greekPizza from '../assets/greekPizza.png';

const TransactionsCard = ({ orderItem, isComplete }) => {
  const date = new Date();
  const currentdate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section className=" h-20 flex bg-grey  items-center justify-between py-2 px-3 rounded-lg mb-3">
      {orderItem ? (
        <div className="flex items-center">
          <section className="w-16 mr-3">
            <img src={greekPizza} alt="pizza" />
          </section>

          <p className="font-semibold">Greek Pizza</p>
        </div>
      ) : (
        <section className="">
          <p className="font-semibold text-xl">Order #{50}</p>
          <span
            className={`${
              isComplete === 'Completed' ? 'text-green-400' : 'text-yellow'
            } ${isComplete === 'Canceled' && 'text-[#c8161d]'} text-xs`}
          >
            {isComplete}
          </span>
        </section>
      )}

      <div className="text-right">
        <p className="font-semibold">₦{2500}</p>
        <span className="text-gray-400 text-xs">{currentdate}</span>
      </div>
    </section>
  );
};

export default TransactionsCard;
