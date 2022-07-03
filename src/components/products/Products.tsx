import { Product } from '../../Model';
import ProductCard from './ProductCard';
import loadingIcon from '../../assets/loading.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useEffect, useState } from 'react';

interface props {
  products: Product[];
  searchedText: string;
  filter: string | null;
}

const Products = ({ products, searchedText, filter }: props) => {
  // state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Redux hooks
  const { loading } = useSelector((state: RootState) => state.products);

  // filter all and search products
  useEffect(() => {
    const filtered = products
      .filter((item) => {
        if (filter !== 'All') {
          return item.tag
            .toLocaleLowerCase()
            .includes(filter!.toLocaleLowerCase());
        } else {
          return item;
        }
      })
      .filter((item) => {
        if (searchedText !== 'All') {
          return item.name
            .toLocaleLowerCase()
            .includes(searchedText.toLocaleLowerCase());
        } else {
          return item;
        }
      });

    setFilteredProducts(filtered);
  }, [searchedText, filter, products]);

  return (
    <div>
      {loading === 'pending' && (
        <section className="flex justify-center mt-[5rem]">
          <img src={loadingIcon} alt="loading..." className="w-[10rem]" />
        </section>
      )}

      {loading === 'fulfilled' && (
        <div className="px-5 py-10 grid gap-y-10 gap-x-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-rows-4">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
