import React from 'react';
import Cart from '../components/Cart';
import Category from '../components/Category';
import HeroCard from '../components/HeroCard';
import Products from '../components/Products';
import TopBar from '../components/TopBar';

const Home = () => {
  return (
    <div className="pb-[8vh]">
      <TopBar />
      <HeroCard />
      <Category />
      <Products />
      <Cart />
    </div>
  );
};

export default Home;
