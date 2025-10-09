const Features = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      {/* Highlights Grid Container: Grid is forced to 3 columns on all sizes */}
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Card 1: Authentic & Artisan-Made */}
        <div
          className="flex flex-col items-center p-2 sm:p-4 bg-gray-50 rounded-xl 
                shadow-lg transition duration-300 
                hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                active:shadow-xl active:-translate-y-1 active:scale-[1.02]"
        >
          {/* Simple container for spacing and center alignment */}
          <div className="mb-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            {/* Just the image, no extra styling or borders */}
            <img
              src="/images/IMG_20251009_165254.png"
              alt="Hand holding a diamond"
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-xs sm:text-base font-semibold text-center mt-2 text-gray-800">
            Authentic & Artisan-Made
          </h3>
        </div>

        {/* Card 2: Reusable & Naturally Sourced */}
        <div
          className="flex flex-col items-center p-2 sm:p-4 bg-gray-50 rounded-xl 
                        shadow-lg transition duration-300 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                        active:shadow-xl active:-translate-y-1 active:scale-[1.02]"
        >
          {/* New Circular Icon Container */}
          <div className="mb-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            {/* Just the image, no extra styling or borders */}
            <img
              src="/images/IMG_20251009_165604_ICON_2.png"
              alt="Hand holding a diamond"
              className="w-full h-full object-contain "
              
            />
          </div>

          <h3 className="text-xs sm:text-base font-semibold text-center mt-2 text-gray-800">
            Reusable & Naturally Sourced
          </h3>
        </div>

        {/* Card 3: Unique Look, Just for You */}
        <div
          className="flex flex-col items-center p-2 sm:p-4 bg-gray-50 rounded-xl 
                        shadow-lg transition duration-300 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] 
                        active:shadow-xl active:-translate-y-1 active:scale-[1.02]"
        >
          {/* New Circular Icon Container */}
          <div className="mb-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            {/* Just the image, no extra styling or borders */}
            <img
              src="/images/1000140276-removebg-preview.png"
              alt="Hand holding a diamond"
              className="w-full h-full object-contain scale-220 sm:scale-[2.0]"
            />
          </div>

          <h3 className="text-xs sm:text-base font-semibold text-center mt-2 text-gray-800">
            Unique Look, Just for You
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Features;
