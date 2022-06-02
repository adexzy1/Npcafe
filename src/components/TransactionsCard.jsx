import { useNavigate } from 'react-router-dom';

const TransactionsCard = ({ orderItem, item, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!orderItem) {
      navigate(`/orders/${index}`);
    } else {
    }
  };

  return (
    <section
      onClick={handleNavigate}
      className=" h-20 flex bg-grey  items-center justify-between py-2 px-3 rounded-lg mb-3"
    >
      {/* render this if its a transaction in an order component */}
      {orderItem && (
        <div className="flex items-center">
          <section className="w-16 mr-3">
            <img src={item.img} alt={item.name} />
          </section>

          <p className="font-semibold">{item.name}</p>
        </div>
      )}

      {/* render this for the order component */}
      {!orderItem && (
        <section className="">
          <p className="font-semibold text-xl">{item.name}</p>
          <span
            className={`${
              item.status === 'Completed' ? 'text-green-400' : 'text-yellow'
            } ${item.status === 'Canceled' && 'text-[#c8161d]'} text-xs`}
          >
            {item.status}
          </span>
        </section>
      )}

      <div className="text-right">
        <p className="font-semibold">₦{item.total ? item.total : item.price}</p>
        <span className="text-gray-400 text-xs">{item.date}</span>
      </div>
    </section>
  );
};

export default TransactionsCard;
