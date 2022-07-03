import { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/category/Category';
import HeroCard from '../components/herocard/HeroCard';
import Products from '../components/products/Products';
import SearchBar from '../components/search/SearchBar';
import { RootState } from '../Redux/store';

const Home = () => {
  // state
  const [searchedText, setSearchedText] = useState<string>('');
  // state
  const [filter, setFilter] = useState<string | null>('All');

  // Redux Hooks
  const { products } = useSelector((state: RootState) => state.products);

  const style = {
    wrapper: 'pb-[8vh] min-h-screen',
    topbar: 'p-5 md:flex items-center md:py-7',
    h1: 'font-bold text-2xl flex-1',
  };

  return (
    <div className={style.wrapper}>
      <section className={style.topbar}>
        <h1 className={style.h1}>Today&apos;s Menu 😋</h1>
        <SearchBar
          items={products}
          searchedText={searchedText}
          setSearchedText={setSearchedText}
        />
      </section>

      <HeroCard />

      <Category filter={filter} setFilter={setFilter} />

      <Products
        products={products}
        searchedText={searchedText}
        filter={filter}
      />
    </div>
  );
};

export default Home;
