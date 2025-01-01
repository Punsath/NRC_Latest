import React from 'react';
import { motion } from 'framer-motion';
import hero from "./../../assets/images/services/service-hero.jpeg";


export const Hero = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 z-10"></div>

      {/* Background Image */}
      <img 
        src={hero} 
        alt="background" 
        className="w-full h-64 md:h-[600px] object-cover" 
      />

      {/* Right-Aligned Animated Text */}
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white text-4xl md:text-6xl font-bold font-montserrat z-20"
      >
       Services
      </motion.h1>
    </div>
  );
};
