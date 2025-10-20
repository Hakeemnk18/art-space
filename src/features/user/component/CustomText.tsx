import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A simple SVG icon for the dropdown
const ChevronDownIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ToteBagHero = () => {
  const [title, setTitle] = useState("Your  Design Here");
  const [fontStyle, setFontStyle] = useState("font-cookie");
  const toteBagImageUrl = "/images/compressed.tot-bag (1).png";

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontStyle(e.target.value);
  };

  return (
    <section className="bg-gray-100 py-6 md:py-12 px-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Column 1: The Image Preview */}
        <div className="relative w-4/6 sm:w-full max-w-sm sm:max-w-lg mx-auto">
          <img
            src={toteBagImageUrl}
            alt="Customizable handcrafted tote bag"
            className="w-full h-auto drop-shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="transform  translate-y-30 sm:translate-y-50 text-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={fontStyle} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.75, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`text-[2.25rem] sm:text-[5rem] leading-none font-extrabold text-gray-900 tracking-wide ${fontStyle}`}
                >
                  {title.length > 8 ? (
                    <>
                      {title.substring(0, 8)}
                      <br />
                      {title.substring(8)}
                    </>
                  ) : (
                    title
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Column 2: The Customization Controls */}
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Design Your Own Tote
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Bring your ideas to life. Add your own text and choose a font to
            create a one-of-a-kind piece.
          </p>

          <div className="mt-8 space-y-6">
            {/* Text Input */}
            <div>
              <label
                htmlFor="customText"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Text
              </label>
              <input
                id="customText"
                disabled={title.length > 20 }
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all"
                type="text"
                value={title}
                placeholder="Type something..."
              />
            </div>

            {/* Font Selector */}
            <div>
              <label
                htmlFor="fontStyle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Font Style
              </label>
              <div className="relative">
                <select
                  id="fontStyle"
                  value={fontStyle}
                  onChange={handleFontChange}
                  className={`appearance-none w-full pl-4 pr-10 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a192f] transition-all ${fontStyle}`}
                >
                  <option value="font-caveat" className="font-caveat">
                    Caveat
                  </option>
                  <option value="Playfair-Display" className="Playfair-Display">
                    Playfair
                  </option>
                  <option value="Lora" className="Lora">
                    Lora
                  </option>
                  <option value="Poppins" className="Poppins">
                    Poppins
                  </option>
                  <option value="font-cookie" className="font-cookie">
                    font-cookie
                  </option>
                  <option value="font-mr-dafoe" className="font-mr-dafoe">
                    font-mr-dafoe
                  </option>
                  <option value="font-lily-script" className="font-lily-script">
                    font-lily-script
                  </option>
                  <option value="font-great-vibes" className="font-great-vibes">
                    Great Vibes
                  </option>
                  <option value="font-sacramento" className="font-sacramento">
                    Sacramento
                  </option>
                  <option
                    value={"font-calligraphy"}
                    className="font-calligraphy"
                  >
                    Dancing Script
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToteBagHero;
