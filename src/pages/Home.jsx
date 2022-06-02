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

  return (
    <div className="pb-[8vh] min-h-screen">
      <section className="p-5">
        <h1 className="font-bold text-2xl">Today&apos;s Menu 😋</h1>
        <SearchBar products={products} />
      </section>

      <HeroCard />
      <Category />
      <Products products={products} />
    </div>
  );
};

export default Home;
