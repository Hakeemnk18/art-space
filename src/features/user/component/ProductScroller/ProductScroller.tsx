
import React from 'react';
import ProductCard from './ProductCard';



export interface Product {
  id: number;
  title: string;
  imageUrl: string;
}

// Sample product data - replace with your own data from an API or state
const products: Product[] = [
  {
    id: 1,
    title: 'Modern Art Vase',
    imageUrl: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
  },
  {
    id: 2,
    title: 'Geometric Canvas',
    imageUrl: 'https://images.unsplash.com/photo-1542281286-9e0e16bb7366?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
  },
  {
    id: 3,
    title: 'Abstract Sculpture',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce0687954?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
  },
  {
    id: 4,
    title: 'Minimalist Print',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436a0976f2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
  },
  {
    id: 5,
    title: 'Ceramic Collection',
    imageUrl: 'https://images.unsplash.com/photo-1517315003714-a071286bd355?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
  },
];



const ProductScroller: React.FC = () => {
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </section>
  );
};

export default ProductScroller;