import React from "react";

// New TypeScript interface for this specific card
interface ShopProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  url: string;
  handleshopNow:()=>void
}

const ShopProductCard: React.FC<ShopProductCardProps> = ({
  imageUrl,
  title,
  price,
  url,
  handleshopNow
}) => {
  return (
    // The whole card is a link, and the `group` class enables hover effects
    <div
      onClick={handleshopNow}
      className="
    group  overflow-hidden
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
          active:scale-[0.98]"
    >
      <div
        className="
         
        "
      >
        {/* Image container with the zoom-on-hover effect */}
        <div className="relative overflow-hidden rounded-t-xl aspect-square">
          <img
            src={imageUrl}
            alt={title}
            className="
              object-cover 
              w-full 
              h-full
              transform 
              group-hover:scale-110 
              transition-transform 
              duration-500 
              ease-in-out
            "
          />
        </div>

        {/* --- CONTENT AREA (Updated) --- */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-700 leading-tight mb-2 min-h-[40px] ">
            {title}
          </h3>

          {/* Price */}
          <p className=" font-extrabold text-lg  text-gray-900">{price}</p>

          {/* "Shop Now" Button */}
          {/* `mt-auto` pushes this container to the bottom of the card */}
          <div className="mt-auto pt-1">
            {/* This is a `span` styled as a button because the whole card is already a link */}
            <span
              className="
                block w-full text-center 
                bg-slate-900 text-white 
                font-semibold text-sm
                py-2 px-4 rounded-lg
                transition-colors duration-300
                group-hover:bg-slate-700 // Changes color when the card is hovered
              "
            >
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
