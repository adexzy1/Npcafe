import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoBasketOutline } from 'react-icons/io5';

const CartIcon = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleNavigate = () => {
    const width = window.screen.width;
    if (width >= 768) {
      setShowCart(true);
    } else {
      navigate('/cart');
    }
  };

  return (
    <section
      onClick={handleNavigate}
      className="text-3xl bg-yellow text-white p-3 rounded-full relative cursor-pointer md:p-5 md:bg-transparent md:text-4xl"
    >
      <IoBasketOutline />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-[-5px] bg-[#343438] text-xs flex items-center justify-center px-[10px] py-1 font-bold rounded-full">
          {totalQuantity}
        </span>
      )}
    </section>
  );
};

export default CartIcon;
