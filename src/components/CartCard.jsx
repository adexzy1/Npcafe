import { useDispatch } from 'react-redux';
import { MdCancel } from 'react-icons/md';
import { addToCart, reduceItem, removeItem } from '../Redux/CartReducer';

const CartCard = ({ product }) => {
  const { name, price, img, qty } = product;
  const dispatch = useDispatch();

  return (
    <section className="flex  rounded-lg shadow  mx-5 my-5 overflow-hidden relative">
      <div className="py-3 flex items-center justify-between flex-1 px-2">
        <div className="flex items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-400 p-1 rounded-md mr-5">
            <img src={img} alt={img} />
          </div>
          <div>
            <p className="font-bold pb-3">{name}</p>

            <div className="flex items-center gap-3">
              <span
                onClick={() => dispatch(addToCart(product))}
                className="bg-yellow px-1 rounded-md text-white"
              >
                +
              </span>
              <p className="font-semibold">
                <span className="text-yellow pr-1">x</span>
                {qty}
              </p>
              <span
                onClick={() => dispatch(reduceItem(product))}
                className="bg-yellow px-1 rounded-md text-white"
              >
                -
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className="font-semibold">
            <span className="text-yellow text-sm">₦</span>
            {qty * price}
          </p>
        </div>
      </div>

      <section
        onClick={() => dispatch(removeItem(product))}
        className="px-1 text-white text-xl flex items-center justify-centers bg-yellow"
      >
        <MdCancel />
      </section>
    </section>
  );
};

export default CartCard;
