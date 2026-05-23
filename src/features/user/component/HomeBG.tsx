
import { Link } from "react-router-dom";


const ArtHero = ()=> {

  
    return (
  <div
  className="relative flex items-center justify-center min-h-[500px] py-16 px-4 sm:px-6 lg:px-8 
  bg-no-repeat bg-center bg-cover overflow-hidden rounded-b-xl
  bg-[url('https://res.cloudinary.com/ddblal31l/image/upload/v1779513548/image-2-bg-for-pc_d6kirn.png')]
  lg:bg-[url('https://res.cloudinary.com/ddblal31l/image/upload/v1779513548/image-2-bg-for-pc_d6kirn.png')]"
> 

    {/* Add the Dark Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
    
    <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 text-white ">
      {/* Left Section: Text Content (Text styling is already mobile-friendly) */}
      <div className="flex-1 text-center lg:text-left max-w-xl pt-60 lg:pt-0 rounded-b-xl ">
        <h1 className=" sm:text-6xl  text-3xl lg:text-6xl font-bold leading-tight mb-4 " 
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Discover Unique Art & Handcrafted Creations
        </h1>
        <p className="hidden text-base sm:text-lg lg:text-xl text-gray-200 mb-8 sm:block">
          Explore our curated collection of artisanal tote bags, vibrant flower bouquets, and intricate embroidery pieces. Each item is crafted with passion and skill.
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <Link
          to={'/products'}
           className="px-8 py-3 bg-[#FDD835] text-[#3A6B5B] font-semibold rounded-lg shadow-md hover:bg-[#FCE38A] transition duration-300">
            Shop Now
          </Link>
          <Link to={'/products'} className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
            Explore Gallery
          </Link>
        </div>
      </div>

      
    </div>
  </div>
);
}


export default ArtHero;