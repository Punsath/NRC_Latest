import React from "react";
import { motion } from "framer-motion";
import { wildLifeExperiences } from "../../utils/dataArrays";

export const HistoricalBackground = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-8 md:p-16 w-full max-w-6xl">
        {/* Heading */}
        <motion.h1
          className="text-[40px] font-nunito font-[400] text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          We Provide All Exclusive Services for the Nation
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-center text-[16px] font-plusJakarta font-[400] mt-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We provide exclusive services to the nation from the recycling
          industry which drives the Run4Green concept.
        </motion.p>

        {/* Experience Cards */}
        {wildLifeExperiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`mb-20 flex flex-col md:flex-row rounded-l-[20px] items-stretch mt-10 h-auto bg-[#004AAD1A] ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse md:rounded-r-[20px]"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Text Section */}
            <div className="flex-1 p-4 overflow-hidden">
              <h2 className="text-[20px] font-nunito font-[600]">
                {experience.title}
              </h2>
              <p className="text-[16px] font-plusJakarta font-[400] text-[#1E1E1E] pt-3">
                {experience.Description}
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 text-center md:text-right overflow-hidden">
              <motion.img
                src={experience.image}
                alt={`${experience.title} Image`}
                className="w-full h-[300px] md:h-full object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
