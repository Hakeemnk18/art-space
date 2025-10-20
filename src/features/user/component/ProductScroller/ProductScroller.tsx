
import React from 'react';
import ProductCard from './ProductCard';
import type { IProduct } from '../../../../data/product';
import { products } from '../../../../data/product';



const ProductScroller: React.FC = () => {
  const newArrivals:IProduct[] = products.filter(item => item.isNewArrivals === true);

  
  return (
     <section className="py-12">
      
      
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          New Arrivals
        </h2>
        <p className="text-lg text-gray-600">
          Discover our latest collection of handcrafted art pieces.
        </p>
      </div>

      {/* Your original Product Scroller */}
      <div className="flex overflow-x-auto pb-5 px-6 gap-5 scrollbar-hide">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </section>
  );
};

export default ProductScroller;