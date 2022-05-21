import { CgMenuGridR } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { IoBasketOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu';
import { toggleCart } from '../Redux/CartReducer';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const style = {
    headerWrapper: ` fixed w-full left-0 bottom-0`,
    nav: 'flex justify-between items-center px-5 py-3 z-20 bg-white rounded-t-2xl shadow',
    logo: 'text-xl font-bold',
    logoSub: 'text-xs text-yellow',
    headerRightCol: 'flex text-[1.8rem] gap-5 items-center',
  };

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleCartToggle = () => {
    dispatch(toggleCart(true));
  };

  return (
    <div className={style.headerWrapper}>
      <section className="relative">
        <div className={style.nav}>
          <Link to={'/'}>
            <p className={style.logo}>
              NP<span className={style.logoSub}>Cafe</span>
            </p>
          </Link>

          <section
            onClick={handleCartToggle}
            className="text-3xl bg-yellow text-white p-3 rounded-full relative"
          >
            <IoBasketOutline />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-[-5px] bg-[#343438] text-xs flex items-center justify-center px-[10px] py-1 font-bold rounded-full">
                {totalQuantity}
              </span>
            )}
          </section>

          <section className={style.headerRightCol}>
            <BiUserCircle />
            <CgMenuGridR onClick={toggleMenu} />
          </section>
        </div>

        <Menu toggle={toggle} />
      </section>
    </div>
  );
};

export default Header;
