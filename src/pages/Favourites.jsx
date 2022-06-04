import Products from '../components/Products';
import { useSelector } from 'react-redux';
import TopBar from '../components/TopBar';

const Favourites = () => {
  const { favouriteItems } = useSelector((state) => state.favourites);

  const styles = {
    wrapper: 'pt-5 md:pt-8 pb-16 min-h-screen',
    prodContainer: 'md:mt-14',
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
        {favouriteItems.length > 0 && <Products products={favouriteItems} />}
      </div>

      {favouriteItems.length === 0 && (
        <section className={styles.noItem}>
          <p>You have no Favorite Items kindly add some</p>
        </section>
      )}
    </section>
  );
};

export default Favourites;
