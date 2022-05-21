import React from 'react';
import ProductCard from './ProductCard';
import products from './ProfuctDetails';

const Products = () => {
  return (
    <div className="px-5 py-10 flex flex-col gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
