import CartCard from './CartCard';
import { IoBasketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { AiOutlineRollback } from 'react-icons/ai';
import { RootState } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';
import { cartItems } from '../../Model';

interface props {
  setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: props) => {
  // Redux hooks
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // cart back button navigate to home screen on small devices
  const handleNavigate = () => {
    const width = window.screen.width;
    if (width >= 768) {
      setShowCart!(false);
    } else {
      navigate('/');
    }
  };

  return (
    <section className="relative bg-white min-h-screen md:overflow-y-scroll">
      <div>
        <section className="fixed top-0 p-5 z-10 bg-yellow text-white w-full shadow flex justify-between items-center">
          <section
            onClick={handleNavigate}
            className="flex items-center text-sm gap-1  rounded-2xl p-1 cursor-pointer"
          >
            <AiOutlineRollback className="text-2xl" />
            {cartItems.length > 0 ? 'Continue shopping' : 'Back'}
          </section>

          <h2 className="text-2xl font-bold ">Cart</h2>
        </section>
      </div>

      <section className="">
        {cartItems.length > 0 && (
          <p className=" p-5  pt-[12vh] font-semibold text-right">
            SubTotal (₦{totalPrice})
          </p>
        )}

        {cartItems.length > 0 ? (
          <section>
            {cartItems.map((product: cartItems) => (
              <CartCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <section className="p-5 h-screen  flex justify-center items-center flex-col  text-center">
            <IoBasketOutline className="text-5xl text-yellow" />
            <p className="font-semibold">
              Your Cart is Empty <br /> Abeg chop make Hunger No finish You
            </p>

            <button
              className="bg-yellow my-5 py-3 text-white rounded-lg w-1/2"
              onClick={handleNavigate}
            >
              Start Shopping
            </button>
          </section>
        )}

        {cartItems.length > 0 && (
          <section className="px-5 text-center my-5 mt-10">
            <button className="bg-yellow w-full py-3 rounded-lg text-xl text-white font-bold">
              Checkout
            </button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Cart;
