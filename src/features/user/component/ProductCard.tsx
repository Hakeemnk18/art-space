import React from 'react';
import { Link } from 'react-router-dom';

// --- UPDATED ---
// The 'price' property has been removed from the interface.
interface ProductCardProps {
  imageUrl: string;
  category: string;
  title: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, category, title, url }) => {
  return (
    <Link to={url} className="group block overflow-hidden">
      <div 
        className="
          bg-white 
          rounded-xl 
          shadow-md 
          hover:shadow-xl 
          transition-all 
          duration-300 
          ease-in-out
          h-full
          flex
          flex-col
          active:scale-[0.98]
        "
      >
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={imageUrl}
            alt={title}
            className="
              object-cover 
              w-full 
              // --- UPDATED ---
              // Reduced image height to look better in a 2-column mobile grid
              h-48 
              transform 
              group-hover:scale-110 
              transition-transform 
              duration-500 
              ease-in-out
            "
          />
        </div>

        <div className="p-3 md:p-4 flex flex-col flex-grow">
          <p className="text-xs text-gray-500 mb-1">{category}</p>
          {/* --- UPDATED --- Title text size is slightly smaller */}
          <h3 className="text-lg font-bold text-gray-800 leading-tight">{title}</h3>
          
          {/* --- REMOVED ---
            The price paragraph has been completely removed from here. 
          */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;