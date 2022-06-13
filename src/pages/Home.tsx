import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useDispatch';
import Category from '../components/Category';
import HeroCard from '../components/HeroCard';
import Products from '../components/Products';
import SearchBar from '../components/SearchBar';
import { getProducts } from '../Redux/ProductSlice';
import { RootState } from '../Redux/store';

const Home = () => {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const { products } = useSelector((state: RootState) => state.products);

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
