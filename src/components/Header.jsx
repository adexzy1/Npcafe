import { CgMenuGridR } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';
import CartIcon from './CartIcon';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const style = {
    headerWrapper: `fixed w-full left-0 bottom-0 z-10 md:h-screen md:w-[12rem]`,
    nav: 'flex justify-between items-center px-5 py-3 bg-white rounded-t-2xl shadow md:hidden',
    logo: 'text-xl font-bold',
    logoSub: 'text-xs text-yellow',
    headerRightCol: 'flex text-[1.8rem] gap-5 items-center',
  };

  const toggleMenu = () => {
    setToggle((prev) => !prev);
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

          <>
            <CartIcon />
          </>

          <section className={style.headerRightCol}>
            <Link to={'/login'}>
              <BiUserCircle />
            </Link>

            <CgMenuGridR onClick={toggleMenu} />
          </section>
        </div>

        <Menu toggle={toggle} setToggle={setToggle} />
      </section>
    </div>
  );
};

export default Header;
