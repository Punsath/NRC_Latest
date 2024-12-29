import React from "react";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <div className="md:px-[6%] px-[4%] mt-8">
      {/* Breadcrumb Navigation */}
      <div className="md:flex items-center space-x-2 text-[14px] text-black font-nunito font-semibold leading-[80px] mb-8 hidden">
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span>SERVICES</span>
      </div>

      {/* Section with Animations */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.div
          className="md:w-[40%]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[#004066] font-Montserrat md:text-[60px] text-[24px] font-[400] md:leading-[70px]">
            Negombo <br className="hidden md:block" /> Recycling Club
          </h1>
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="md:w-[60%] md:mt-8 mt-3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-black font-nunito text-[14px] md:text-[16px] font-[400] leading-[30px]">
            Negombo Recycling Club (NRC) is all about building long-lasting
            relationships with our stakeholders including collectors & waste
            pickers, suppliers, customers, employees, partners while investing
            in the communities where we operate in order to transform the waste
            and recycling industry to a value driven industry.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
