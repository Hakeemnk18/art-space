import React from 'react';
import ProductCard from './ProductCard'; // Make sure the path is correct
import ShopProductCard from './ShopProductsCard';

// --- MOCK DATA ---
// Replace this with data fetched from your backend/CMS
const mockData = [
  {
    id: 1,
    imageUrl: '/images/hero-bg-2.jpg',
    category: 'Hand-Painted Canvas Bag',
    title: 'Oceanic Octopus Tote',
    price: '₹2,499',
    url: '/products/oceanic-octopus-tote',
  },
  {
    id: 2,
    imageUrl: '/images/hero-bg-1.jpg',
    category: 'Artisanal Embroidery',
    title: 'Floral Meadow Hoop',
    price: '₹3,199',
    url: '/products/floral-meadow-hoop',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2874',
    category: 'Vibrant Flower Bouquets',
    title: 'Sunset Peony Burst',
    price: '₹1,899',
    url: '/products/sunset-peony-burst',
  },
  {
    id: 4,
    imageUrl: '/images/hero-bg-2.jpg',
    category: 'Hand-Painted Canvas Bag',
    title: 'Oceanic Octopus Tote',
    price: '₹2,499',
    url: '/products/oceanic-octopus-tote',
  },
  {
    id: 3,
    imageUrl: '/images/porduct-cropped-pic-1.jpg',
    category: 'Vibrant Flower Bouquets',
    title: 'Sunset Peony Burst',
    price: '₹1,899',
    url: '/products/sunset-peony-burst',
  },
  {
    id: 4,
    imageUrl: '/images/hero-bg-2.jpg',
    category: 'Hand-Painted Canvas Bag',
    title: 'Oceanic Octopus Tote',
    price: '₹2,499',
    url: '/products/oceanic-octopus-tote',
  },
];
// -----------------


const FeaturedProducts: React.FC = () => {
  return (
    <section className=" py-16 sm:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Section Header */}
        

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.map((product) => (
            <ShopProductCard
              key={product.id}
              price={product.price}
              imageUrl={product.imageUrl}
              title={product.title}
              url={product.url}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;