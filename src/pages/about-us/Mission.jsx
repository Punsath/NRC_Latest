import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mission from "./../../assets/images/aboutus/mission.jpeg";

export const Mission = () => {
  const slides = [
    {
      title: "Mission",
      content:
        "To pioneer transformative solutions in plastic waste management by setting new standards in waste collection and recycling practices, fostering a sustainable future for our communities and the environment",
    },
    {
      title: "Vision",
      content:
        "Our vision is to Reduce, Reuse or Recycle over 600MT of solid recyclable waste materials annually by 2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      className="mt-4 flex items-center md:bg-[#004AAD1A] md:space-x-8 flex-col md:flex-row px-[4%] md:px-0 overflow-hidden"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Section */}
      <motion.img
        src={mission}
        alt="Scenic View"
        className="md:w-[541px] w-full md:h-[380px] h-[260px] object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="w-full bg-[#004AAD1A] md:bg-transparent p-5 m-0">
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between border-l-2 border-custom-border">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <motion.h2
                  className="text-black text-[20px] md:text-[36px] font-nunito font-bold md:font-[600] leading-[1.2] mb-4"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-black text-[16px] md:text-[18px] font-nunito font-[400] leading-[40px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {slide.content}
                </motion.p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </motion.div>
  );
};
