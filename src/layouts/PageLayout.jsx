import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { useState } from 'react';
import CartIcon from '../components/CartIcon';

const PageLayout = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <section className=" md:bg-gray-100 relative">
      <section className="md:flex-[0.15]">
        <Header />
      </section>

      <section className="flex-1 md:ml-[12rem] z-50">
        <Outlet />
      </section>

      <section className="hidden md:block fixed right-10 bottom-12 shadow-xl rounded-full bg-red">
        <CartIcon setShowCart={setShowCart} />
      </section>

      <section
        className={`${
          showCart ? 'translate-x-0' : ' translate-x-[100vh]'
        } transform transition hidden md:fixed top-0 md:w-[25rem] shadow md:block bg-red-300 right-0`}
      >
        <Cart setShowCart={setShowCart} />
      </section>
    </section>
  );
};

export default PageLayout;
