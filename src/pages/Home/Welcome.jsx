import React from "react";
import { motion } from "framer-motion";

export const Welcome = () => {
  return (
    <section className="flex w-full md:px-[6%] px-[5%] justify-center items-center mt-[130px] flex-col">
      <div className="relative -mb-20">
        <motion.h1
          className="font-montserrat text-center text-[#18A8E5]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          We are Negombo Recycling Club
        </motion.h1>
        <motion.h1
          className="font-montserrat font-bold text-center text-[#004066] text-[46px]"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          A Pioneering Leader in Environmental and Recycling Solutions
        </motion.h1>
        <div className="mt-28 md:hidden"></div>
      </div>
      <div className="md:flex items-start md:justify-between px-[5%] text-[14px] md:text-[16px] md:mt-[130px]">
        <motion.p
          className="font-nunito text-[#1E1E1E] text-base leading-[30px] md:w-[43%] w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          At Negombo Recycling Club (NRC), we are committed to fostering meaningful and lasting relationships with our stakeholders—collectors, volunteers, customers, employees, and public-private partners. Together, we work to restore degraded natural habitats to their pristine state.
        </motion.p>
        <motion.p
          className="font-nunito text-[#1E1E1E] text-base leading-[30px] md:mt-0 mt-8 md:w-[43%] w-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Sustainability and innovation are at the heart of everything we do. NRC is dedicated to increasing the country's waste recovery and recycling rates through the establishment of a cutting-edge closed-loop recycling system. By transforming collected waste into raw materials and products with low carbon and plastic footprints, we aim to drive environmental preservation and economic progress.
        </motion.p>
      </div>
      <div className="mt-16 w-full px-[5%]">
        <motion.h2
          className="font-montserrat font-bold text-center text-[#004066] text-[28px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Join Us in Our Mission
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB] shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
              📚
            </div>
            <h3 className="font-montserrat font-semibold text-[#004066] text-[18px] mb-2">
              Community Education
            </h3>
            <p className="font-nunito text-[#1E1E1E] text-sm">
              Empowering communities by raising awareness about the impacts of waste mismanagement and promoting sustainable practices.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB] shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
              🏞️
            </div>
            <h3 className="font-montserrat font-semibold text-[#004066] text-[18px] mb-2">
              Decontamination of Degraded Hotspots
            </h3>
            <p className="font-nunito text-[#1E1E1E] text-sm">
              Identifying polluted locations and restoring them to their natural state.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB] shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
              ♻️
            </div>
            <h3 className="font-montserrat font-semibold text-[#004066] text-[18px] mb-2">
              Waste Recovery
            </h3>
            <p className="font-nunito text-[#1E1E1E] text-sm">
              Collecting post-industrial and post-consumer recyclable waste through a transparent and traceable network.
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB] shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mb-4">
              🔄
            </div>
            <h3 className="font-montserrat font-semibold text-[#004066] text-[18px] mb-2">
              Recycling and Upcycling
            </h3>
            <p className="font-nunito text-[#1E1E1E] text-sm">
              Turning waste into innovative raw materials and products with a reduced carbon and plastic footprint.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
