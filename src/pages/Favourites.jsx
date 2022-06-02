import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import TopBar from '../components/TopBar';

const Favourites = () => {
  const { favouriteItems } = useSelector((state) => state.favourites);

  return (
    <section className="pt-5 pb-16">
      <TopBar text={'Favourites'} link={'/'} />

      {favouriteItems.length > 0 && (
        <section className="px-5 py-10 flex flex-col gap-y-10">
          {favouriteItems.map((product) => (
            <ProductCard key={product.id} product={product} favourite />
          ))}
        </section>
      )}

      {favouriteItems.length === 0 && (
        <section className="min-h-[50vh] mt-20 px-5 mx-5 rounded-m flex items-center text-center text-xl">
          <p>You have no Favorite Items kindly add some</p>
        </section>
      )}
    </section>
  );
};

export default Favourites;
