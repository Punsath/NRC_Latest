import { useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImage from "./../../assets/images/H.png";
import { Link } from "react-router-dom";
import { ForwardArrow } from "../../utils/icons";

export const Hero = () => {
  useEffect(() => {}, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative flex items-center justify-center  bg-cover h-[500px] md:h-screen pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <motion.div
        className="relative md:text-right text-center text-white px-4 md:px-[7%]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="w-full md:w-[100%] justify-end md:pl-[40%] pl-0"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-6xl leading-[40px] md:leading-[90px] font-bold font-cinzel">
          Welcome to
           
          </h1>
        </motion.div>
    
        <motion.div
          className="flex items-center justify-center md:justify-end"
          variants={itemVariants}
        >
          <Link
            to="travel-packages"
            className="font-nunito font-normal text-[10px] md:text-[20px] text-white flex items-center gap-2 md:gap-5 w-full text-right justify-center md:justify-end"
          >
            Let’s Make Your Dream Trip a Reality! View Our Packages{" "}
            <span className="md:hidden">
              <ForwardArrow width="20" />
            </span>
            <span className="hidden md:block">
              <ForwardArrow width="32" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
