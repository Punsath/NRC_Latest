import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoone from "./../../assets/images/main-events/logoone.png";
import logoone2 from "./../../assets/images/main-events/logoone2.jpg";
import logoone3 from "./../../assets/images/main-events/logoone3.jpg";
import logoone4 from "./../../assets/images/main-events/logoone4.png";

export const DescripionMain = () => {
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
        <span>BLUECAP Highlights</span>
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
            Project  <br className="hidden md:block" /> BLUECAP
          </motion.h1>
        </div>

        <div className="md:w-[60%] md:mt-8 mt-3">
          <motion.p
            className="text-black font-nunito text-[14px] md:text-[16px] font-[400] leading-[30px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The BLUECAP initiative, funded by a generous $1.5 million grant from the World Bank,
            aims to revitalize Sri Lanka’s coastal areas through innovative waste management
            practices. Under this project, NRC collaborates with local communities, private-public
            organizations, volunteers, and environmental organizations to increase the recovery rate of
            post-consumer plastic wastes. Key goals of BLUECAP include deploying advanced waste collection systems,
            establishing efficient recycling processes, and implementing sustainable solutions to
            reduce plastic waste mismanagement along coastal stretches. This project underscores
            NRC’s commitment to protecting marine environments and promoting a circular economy
            that benefits all stakeholders and ecosystems.
          </motion.p>
        </div>
      </motion.div>

      <br /><br />

      {/* Partners Section with Logo Animations */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <h3 className="w-full text-center text-[#004066] font-Montserrat text-[28px] font-[600] mb-4">
          Our Partners
        </h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* Animated logos */}
          <motion.img
            src={logoone}
            alt="Partner 1"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.img
            src={logoone2}
            alt="Partner 2"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.img
            src={logoone3}
            alt="Partner 3"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.img
            src={logoone4}
            alt="Partner 4"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
};
