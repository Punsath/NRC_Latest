import React from "react";
import { Link } from 'react-router-dom';
import logoone from "./../../assets/images/main-events/logoone.png";
import logoone2 from "./../../assets/images/main-events/logoone2.jpg";
import logoone3 from "./../../assets/images/main-events/logoone3.jpg";
import logoone4 from "./../../assets/images/main-events/logoone4.png";
import { motion } from "framer-motion";

export const Description = () => {
  return (
    <div className="md:px-[6%] px-[4%] mt-8">
      {/* Breadcrumb Navigation */}
      <motion.div
        className="md:flex items-center space-x-2 text-[14px] text-black font-nunito font-semibold leading-[80px] mb-8 hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <a href="/" className="hover:underline">
          HOME
        </a>
        <span>▸</span>
        <span>MAIN EVENTS</span>
      </motion.div>

      {/* Project Description */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-[40%]">
          <motion.h1
            className="text-[#004066] font-Montserrat md:text-[60px] text-[24px] font-[400] md:leading-[70px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Project BLUECAP <br className="hidden md:block" />
          </motion.h1>
        </div>

        <div className="md:w-[60%] md:mt-8 mt-3">
          <motion.p
            className="text-black font-nunito text-[14px] md:text-[16px] font-[400] leading-[30px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            The BLUECAP initiative, funded by a generous $1.5 million grant from the World Bank,
            aims to revitalize Sri Lanka’s coastal areas through innovative waste management
            practices. Under this project, NRC collaborates with local communities, private-public
            organizations, volunteers, and environmental organizations to increase the recovery rate of
            post-consumer plastic wastes.
            <br /><br />
            Key goals of BLUECAP include deploying advanced waste collection systems,
            establishing efficient recycling processes, and implementing sustainable solutions to
            reduce plastic waste mismanagement along coastal stretches. This project underscores
            NRC’s commitment to protecting marine environments and promoting a circular economy
            that benefits all stakeholders and ecosystems.
          </motion.p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <motion.h3
          className="w-full text-center text-[#004066] font-Montserrat text-[28px] font-[600] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Partners
        </motion.h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <motion.img
            src={logoone}
            alt="Partner 1"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={logoone2}
            alt="Partner 2"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={logoone3}
            alt="Partner 3"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={logoone4}
            alt="Partner 4"
            className="w-[120px] h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Project Activities */}
      <div className="mt-12 bg-gradient-to-r from-[#E3F2FD] to-[#F0F4FA] p-6 rounded-lg shadow-md">
        <motion.h2
          className="text-[#004066] font-Montserrat md:text-[36px] text-[20px] font-[600] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore Our Key Activities
        </motion.h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              1
            </div>
            <div>
              <motion.h3
                className="text-black font-Montserrat text-[18px] font-[500] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Education and Awareness
              </motion.h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>School Education and Awareness</li>
                <li>Community Education and Awareness</li>
                <li>Women Groups for Community Development</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              2
            </div>
            <div>
              <motion.h3
                className="text-black font-Montserrat text-[18px] font-[500] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Intercepting Plastic Waste
              </motion.h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>Drop-off Recycling</li>
                <li>River Interception</li>
                <li>Mobile Collections</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#004066] text-white flex items-center justify-center rounded-full">
              3
            </div>
            <div>
              <motion.h3
                className="text-black font-Montserrat text-[18px] font-[500] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Recycling and Upcycling
              </motion.h3>
              <ul className="list-disc list-inside text-black font-nunito text-[14px] md:text-[16px] font-[400]">
                <li>Material Recovery Facility (MRF) Developments</li>
                <li>Recycling Plant Operations</li>
                <li>Operational Zones</li>
                <li>Collection Centers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved */}
      <div className="mt-12  text-[#004066] p-8  max-w-3xl mx-auto">
        <motion.h2
          className="font-Montserrat text-[30px] md:text-[38px] font-semibold text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get Involved
        </motion.h2>
        <p className="font-nunito text-[16px] md:text-[18px] font-light leading-[28px] text-center mb-8 text-black">
          Join us in making a positive impact! We invite individuals, volunteers, and organizations to support
          the BLUECAP project. Together, we can create sustainable change for our coastal communities and marine ecosystems.
        </p>

        <div className="flex justify-center">
          <Link 
            to="/contact-us"
            className="px-8 py-3 bg-[#004066] text-white rounded-lg shadow-lg text-lg font-medium transition duration-300 ease-in-out transform hover:bg-[#005A87] hover:scale-105 focus:ring-2 focus:ring-[#004066]"
          >
            Join with us
          </Link>
        </div>
      </div>
    </div>
  );
};
