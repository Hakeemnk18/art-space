import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  // The animation variant defines the movement.
  const marqueeVariants: Variants = {
    animate: {
      x: [0, -1000], // A large enough value to ensure it moves off screen
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20, // Controls the speed of the scroll
        ease: 'linear',
      },
    },
  };
  return (
    <div className="w-full bg-[#0a192f] py-4 overflow-hidden">
      {/* The motion.div is the container that will animate. 
        It's much wider than the screen to hold the duplicated text.
      */}
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {/* We render the text multiple times to create the seamless loop */}
        <span className="text-white text-2xl font-semibold uppercase mx-4">{text}</span>
        <span className="text-white text-2xl font-semibold uppercase mx-4">{text}</span>
        <span className="text-white text-2xl font-semibold uppercase mx-4">{text}</span>
        <span className="text-white text-2xl font-semibold uppercase mx-4">{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;

