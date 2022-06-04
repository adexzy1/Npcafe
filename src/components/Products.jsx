import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div className="px-5 py-10 flex flex-col gap-y-10 md:flex-row flex-wrap gap-x-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
