
import ProductCard from './ProductCard';
import type { IProduct } from '../../../data/product'; 
import { products } from '../../../data/product';
import { useState } from 'react';


const FeaturedProducts = () => {
  const [featuredItems, setFeaturedItems] = useState<IProduct[]>(
    products.filter((item)=> item.isFeatured === true)
  )
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Featured Creations
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Each piece is crafted with passion, designed to bring art into your everyday life.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              category={product.category}
              title={product.title}
              
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;