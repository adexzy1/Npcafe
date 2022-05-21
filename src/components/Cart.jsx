import CartCard from './CartCard';
import { IoBasketOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineRollback } from 'react-icons/ai';
import { toggleCart } from '../Redux/CartReducer';

const Cart = () => {
  const { cartItems, totalPrice, toggleState } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCart(false));
  };

  return (
    <section
      className={`${
        toggleState ? 'translate-x-0' : 'translate-x-[-100vh]'
      } min-h-screen bg-white py-24 fixed bottom-0 w-full transform transition-all duration-500 ease-in-ou`}
    >
      <section>
        <section className="fixed p-5 bg-yellow text-white w-full top-0 shadow flex justify-between items-center">
          <h2 className="text-2xl font-bold ">Cart</h2>
          <p className="font-semibold">SubTotal (₦{totalPrice})</p>
        </section>

        <section
          onClick={handleCartToggle}
          className="mx-5 flex items-center text-sm gap-1 bg-gray-300 w-1/2 rounded-2xl p-1 pl-5 mb-10"
        >
          <AiOutlineRollback className="text-2xl text-yellow" />
          continue shopping
        </section>

        {cartItems.length > 0 ? (
          <section>
            {cartItems.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </section>
        ) : (
          <section className="p-5 h-[25rem] flex justify-center items-center flex-col  text-center">
            <IoBasketOutline className="text-5xl text-yellow" />
            <p className="font-semibold pt-3">
              Your Cart is Empty <br /> Abeg chop make Hunger No finish You
            </p>
          </section>
        )}
      </section>

      {cartItems.length > 0 && (
        <section className="px-5 text-center my-10">
          <button className="bg-yellow w-10/12 py-5 rounded-[50px] text-xl text-white font-bold">
            Checkout
          </button>
        </section>
      )}
    </section>
  );
};

export default Cart;
