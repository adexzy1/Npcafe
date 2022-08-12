import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoBasketOutline } from 'react-icons/io5';
import { RootState } from '../../Redux/store';
import { useEffect } from 'react';
import { getTotals } from '../../Redux/CartSlice';
import { useAppDispatch } from '../../hooks/useDispatch';

interface Props {
  setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartIcon = ({ setShowCart }: Props) => {
  // react hook forms hook
  const navigate = useNavigate();

  // Redux hooks
  const { totalQuantity } = useSelector((state: RootState) => state.cart);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const handleNavigate = () => {
    const width = window.screen.width;
    if (width >= 768) {
      setShowCart!(true);
    } else {
      navigate('/cart');
    }
  };

  // get the number of total cart items
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const style = {
    wrapper:
      'text-3xl bg-yellow text-white p-3 rounded-full relative  cursor-pointer md:p-5 md:bg-transparent md:text-4xl',
    span: 'absolute top-0 right-[-5px] bg-[#343438] text-xs flex items-center justify-center px-[10px] py-1 font-bold rounded-full',
  };

  return (
    <section onClick={handleNavigate} className={style.wrapper}>
      <IoBasketOutline />
      {totalQuantity > 0 && <span className={style.span}>{totalQuantity}</span>}
    </section>
  );
};

export default CartIcon;
