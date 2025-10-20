import React from "react";

// You can define props if you want to make the image, title, and text dynamic
// For simplicity, we'll keep them static here but you could easily add:
// interface ArtisanStoryProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   buttonText: string;
//   buttonLink: string;
// }

const ArtisanStory: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
          flex 
          flex-col 
          md:flex-row-reverse // Image on right for desktop, content on left
          items-center 
          gap-12 
          lg:gap-16
        "
        >
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Using a square aspect ratio for the image, object-cover to fill */}
            <div className="relative w-full max-w-md md:max-w-none md:h-[400px] lg:h-[450px] aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                // --- Replace this with your artisan's image ---
                src="/images/story-bg.png"
                alt="Artisan at work"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Meet the Artisan Behind Artspace
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed mb-8">
              At Artspace, every creation is a testament to passion, dedication,
              and meticulous craftsmanship. Founded by Fathima Najina, each
              piece is hand-painted, thoughtfully arranged, and intricately
              embroidered with care. We are devoted to delivering unique,
              handcrafted beauty made with sustainable practices and a deep love
              for artistry
            </p>
            {/* Call to action button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanStory;
