import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useState } from 'react';
import CartIcon from '../components/CartIcon';

const PageLayout = () => {
  const [showCart, setShowCart] = useState(false);

  const style = {
    wrapper: ' md:bg-[#faf8f9] relative',
    header: 'md:flex-[0.15]',
    outlet: 'flex-1 md:ml-[12rem] z-50',
    cartIcon:
      'hidden md:block fixed right-5 bottom-12 shadow-xl rounded-full bg-red',
    cart: `${
      showCart ? 'translate-x-0' : ' translate-x-[100vh]'
    } transform transition hidden md:fixed top-0 md:w-[25rem] shadow md:block bg-red-300 right-0`,
  };

  return (
    <section className={style.wrapper}>
      <section className={style.header}>
        <Header />
      </section>

      <section className={style.outlet}>
        <Outlet />
      </section>

      <section className={style.cartIcon}>
        <CartIcon setShowCart={setShowCart} />
      </section>

      <section className={style.cart}>
        <Cart setShowCart={setShowCart} />
      </section>
    </section>
  );
};

export default PageLayout;
