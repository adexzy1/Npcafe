import { Product } from '../Model';
import ProductCard from './ProductCard';
import loadingIcon from '../assets/loading.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

interface props {
  products: Product[];
  searchedText?: string;
}

const Products = ({ products, searchedText }: props) => {
  const { loading } = useSelector((state: RootState) => state.products);

  return (
    <div>
      {loading === 'pending' && (
        <section className="flex justify-center mt-[5rem]">
          <img src={loadingIcon} alt="loading..." className="w-[10rem]" />
        </section>
      )}

      {loading === 'fulfilled' && (
        <div className="px-5 py-10 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-rows-4">
          {products
            .filter((item) => {
              if (searchedText !== '') {
                return item.name
                  .toLocaleLowerCase()
                  .includes(searchedText!.toLocaleLowerCase());
              } else {
                return item;
              }
            })
            .map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
