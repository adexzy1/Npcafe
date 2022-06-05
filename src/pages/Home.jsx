import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import HeroCard from '../components/HeroCard';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';
import { getProducts } from '../Redux/ProductSlice';

const Home = () => {
  // Redux Hooks
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const style = {
    wrapper: 'pb-[8vh] min-h-screen',
    topbar: 'p-5 md:flex items-center md:py-7',
    h1: 'font-bold text-2xl flex-1',
  };

  return (
    <div className={style.wrapper}>
      <section className={style.topbar}>
        <h1 className={style.h1}>Today&apos;s Menu 😋</h1>
        <SearchBar items={products} />
      </section>

      <HeroCard />
      <Category />
      <Products products={products} />
    </div>
  );
};

export default Home;
