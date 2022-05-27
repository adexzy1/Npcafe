import React from 'react';
import Cart from '../components/Cart';
import Category from '../components/Category';
import HeroCard from '../components/HeroCard';
import Products from '../components/Products';
import { BiSearch } from 'react-icons/bi';

const Home = () => {
  return (
    <div className="pb-[8vh] min-h-screen">
      <section className="p-5">
        <h1 className="font-bold text-2xl">Today&apos;s Menu 😋</h1>

        <section className="flex items-center justify-center bg-grey py-4 px-3 rounded-3xl mt-3">
          <input
            placeholder="Search by food name"
            className="bg-transparent flex-1 ml-1 text-sm outline-none"
          />
          <BiSearch className="text-xl" />
        </section>
      </section>

      <HeroCard />
      <Category />
      <Products />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
