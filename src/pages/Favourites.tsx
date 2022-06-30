import { useSelector } from 'react-redux';
import TopBar from '../components/TopBar';
import { RootState } from '../Redux/store';
import { useEffect, useState } from 'react';
import { Product } from '../Model';
import ProductCard from '../components/ProductCard';

const Favourites = () => {
  // State
  const [favouriteItems, setFavouriteItems] = useState<Product[]>([]);

  // Redux hooks
  const { products } = useSelector((state: RootState) => state.products);

  // Filter user favourite items
  useEffect(() => {
    const favourites = products.filter((x) => x.isFavourite === true);
    setFavouriteItems(favourites);
  }, [products]);

  const styles = {
    wrapper: 'pt-5 md:pt-8 pb-16 min-h-screen',
    prodContainer:
      'md:mt-14 px-5 py-10 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-rows-4',
    topBar: 'px-5',
    noItem:
      'min-h-[50vh] mt-20 mx-5 rounded-m flex items-center justify-center text-center text-xl',
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.topBar}>
        <TopBar text={'Favourites'} link={'/'} />
      </div>

      <div className={styles.prodContainer}>
        {favouriteItems.length > 0 &&
          favouriteItems.map((item, index) => (
            <ProductCard key={item.id} product={item} index={index} />
          ))}
      </div>

      {favouriteItems.length <= 0 && (
        <section className={styles.noItem}>
          <p>You have no Favorite Items kindly add some</p>
        </section>
      )}
    </section>
  );
};

export default Favourites;
