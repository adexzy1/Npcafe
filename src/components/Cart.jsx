import CartCard from './CartCard';
import { IoBasketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { AiOutlineRollback } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <section className="relative bg-white min-h-screen">
      <div>
        <section className="fixed top-0 p-5 bg-yellow text-white w-full shadow flex justify-between items-center">
          <section
            onClick={handleNavigate}
            className="flex items-center text-sm gap-1  rounded-2xl p-1"
          >
            <AiOutlineRollback className="text-2xl" />
            {cartItems > 0 ? 'Continue shopping' : 'Back'}
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
            {cartItems.map((product) => (
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
