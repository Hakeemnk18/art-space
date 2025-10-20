import React from 'react';
import { motion } from 'framer-motion';
import type { IProduct } from '../../../../data/product';
import { Link } from 'react-router-dom';


interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const categoryQuery = encodeURIComponent(product.category);
  const productUrl = `/products?category=${categoryQuery}`;
  return (
    <Link to={productUrl}>
    <div
      className="
        relative flex-none w-[80vw] h-[420px] 
        max-[480px]:w-[75vw] max-[480px]:h-[480px] /* Responsive adjustments */
        max-w-xs bg-cover bg-center rounded-3xl overflow-hidden 
        flex items-end shadow-[0_10px_25px_rgba(0,0,0,0.2)] 
        transition-transform duration-300 ease-in-out hover:-translate-y-[5px]
      "
      style={{ backgroundImage: `url(${product.scrollUrl})` }}
    >
      {/* Gradient overlay (replaces the ::after element) */}
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-black/85 to-transparent z-10" />

      {/* Card content */}
      <div className="relative w-full p-6 z-20">
        <motion.h3
          // Title styling
          className="text-white text-2xl max-[480px]:text-3xl font-semibold leading-tight m-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {product.title}
        </motion.h3>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;