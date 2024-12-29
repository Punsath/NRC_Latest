import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Description = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when the section is in view
    threshold: 0.2, // Percentage of the element visible to trigger animation
  });

  return (
    <div className="md:px-[6%] px-[4%] mt-8">
      {/* Breadcrumb Navigation */}
      <div className="md:flex items-center space-x-2 text-[14px] text-black font-nunito font-semibold leading-[80px] mb-8 hidden">
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span>ABOUT US</span>
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start"
        ref={ref}
        initial={{ opacity: 0, x: -100 }} // Initial state (hidden and off-screen)
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animation when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Transition duration and easing
      >
        <div className="md:w-[40%]">
          <motion.h1
            className="text-[#004066] font-Montserrat md:text-[60px] text-[24px] font-[400] md:leading-[70px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Negombo <br className="hidden md:block" /> Recycling Club
          </motion.h1>
        </div>

        <div className="md:w-[60%] md:mt-8 mt-3">
          <motion.p
            className="text-black font-nunito text-[14px] md:text-[16px] font-[400] leading-[30px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Negombo Recycling Club (NRC) is a dedicated recycling enterprise committed to building long-lasting relationships with stakeholders, including collectors, waste pickers, suppliers, customers, employees, and partners, while investing in the communities where we operate. Our mission goes beyond recycling; we strive to transform the waste and recycling industry into a value-driven sector by converting plastic waste into value-added raw materials and upcycled products. By actively engaging communities in collecting, sorting, and recycling plastic waste, we aim to empower them and contribute to a cleaner, more sustainable environment.
          </motion.p>
        </div>
      </motion.div>
      <br /><br />
    </div>
  );
};
