import { Product } from '../Model';
import ProductCard from './ProductCard';

interface props {
  products: Product[];
}

const Products = ({ products }: props) => {
  return (
    <div className="px-5 py-10 flex flex-col gap-y-10 md:flex-row flex-wrap gap-x-5">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
