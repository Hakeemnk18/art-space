import React from 'react';

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
    <section id='about' className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="
          flex 
          flex-col 
          md:flex-row-reverse // Image on right for desktop, content on left
          items-center 
          gap-12 
          lg:gap-16
        ">

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
              At Artspace, every creation tells a story of passion, dedication, and meticulous craft. 
              Our founder, [Artisan's Name/Our Team], pours their heart into hand-painting each tote, 
              arranging vibrant bouquets, and intricately embroidering every detail. 
              We believe in bringing unique, handcrafted beauty into your life, 
              made with sustainable practices and a love for artistry.
            </p>
            {/* Call to action button */}
            <a 
              href="/about" // --- Link to your actual about page ---
              className="
                inline-flex items-center justify-center 
                px-8 py-3 
                border border-transparent 
                text-base font-medium 
                rounded-md 
                text-white bg-blue-700 // Dark blue primary button
                hover:bg-blue-800 
                transition-colors 
                duration-200 
                ease-in-out
                shadow-md
              "
            >
              Read Our Full Story
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArtisanStory;