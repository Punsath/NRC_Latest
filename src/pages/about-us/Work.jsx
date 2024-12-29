import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"
import { cities } from "../../utils/dataArrays"; // Assuming cities is an array with { title, image }

export const Works = () => {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide
  const desktopSliderRef = useRef(null); // Reference to the desktop Slider component
  const mobileSliderRef = useRef(null); // Reference to the mobile Slider component

  // Desktop settings for the slider
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%", // Ensures the slide is in the center
    slidesToShow: 1,
    speed: 500,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set the auto-slide speed (3 seconds)
    beforeChange: (current, next) => setActiveSlide(next), // Updates active slide
  };

  // Mobile settings for the slider
  const mobileSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10%", // No padding for mobile
    slidesToShow: 1,
    speed: 500,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set the auto-slide speed (3 seconds)
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // Function to handle button click and move the slider
  const handleButtonClick = (index) => {
    if (desktopSliderRef.current) {
      desktopSliderRef.current.slickGoTo(index); // Move desktop slider to selected slide
    }
    if (mobileSliderRef.current) {
      mobileSliderRef.current.slickGoTo(index); // Move mobile slider to selected slide
    }
    setActiveSlide(index); // Ensure the state updates when clicking buttons
  };

  return (
    <section className="w-full flex justify-center mt-[140px] flex-col items-center overflow-hidden">
      <h1 className="font-montserrat font-bold md:text-[50px] text-[30px] md:leading-[60px] leading-[30px] text-[#004066] mb-8">
        Some of Our Services
      </h1>

      {/* Desktop Slider */}
      <div className="hidden w-full slider-container md:block">
        <Slider ref={desktopSliderRef} {...settings}>
          {cities.map((city, index) => (
            <div key={city.title} className="p-4">
              <div
                className={`h-[500px] relative flex items-center justify-center flex-col rounded-lg shadow-lg overflow-hidden`}
                style={{
                  backgroundImage: `url(${city.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
                {/* Active city text */}
                <h3
                  className={`${
                    activeSlide === index
                      ? "text-[80px] text-white"
                      : "text-[50px] text-[#d3d3d3]"
                  } font-montserrat transition-all duration-300 relative z-10`}
                >
                  {city.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Bottom Navigation Buttons (Desktop Only) */}
      <div className="justify-center hidden mt-8 md:flex">
        {cities.map((city, index) => (
          <button
            key={index}
            className={`px-6 py-2 mx-2 rounded-full font-nunito font-semibold cursor-pointer transition-all duration-300 ${
              activeSlide === index
                ? "bg-[#004066] text-white shadow-md"
                : "bg-gray-200 text-gray-600 hover:bg-[#004066] hover:text-white"
            }`}
            onClick={() => handleButtonClick(index)} // Trigger slider movement and update active text
          >
            {city.title}
          </button>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="block w-full overflow-hidden slider-container md:hidden">
        <Slider ref={mobileSliderRef} {...mobileSettings}>
          {cities.map((city, index) => (
            <div key={city.title} className="p-4">
              <div
                className={`h-[300px] relative flex items-center justify-center flex-col rounded-lg shadow-lg overflow-hidden`}
                style={{
                  backgroundImage: `url(${city.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
                {/* Active city text */}
                <h3
                  className={`${
                    activeSlide === index
                      ? "text-[40px] text-white"
                      : "text-[30px] text-[#d3d3d3]"
                  } font-montserrat transition-all duration-300 relative z-10`}
                >
                  {city.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="mt-20 px-4 text-center ">
  <h2 className="font-montserrat font-semibold text-[#004066] text-4xl mb-12">Our Achievements</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
    {/* Degraded Hotspots */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🌍
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">Degraded Hotspots</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{2016}</p>
    </motion.div>

    {/* Cleanups */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🧹
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">Cleanups</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{151}</p>
    </motion.div>

    {/* E&A Programs */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🎓
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">E&A Programs</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{753}</p>
    </motion.div>

    {/* School Fests */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🎉
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">School Fests</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{12}</p>
    </motion.div>

    {/* Trash Barriers */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🚧
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">Trash Barriers</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{10}</p>
    </motion.div>

    {/* Drop-off Bins */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🗑️
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">Drop-off Bins</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{65}</p>
    </motion.div>

 

    {/* Electric Bicycles */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        🚲
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">Electric Bicycles</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{15}</p>
    </motion.div>

    {/* MRFs */}
    <motion.div
      className="bg-white border-2 border-[#E3F2FD] rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl hover:border-[#004066]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#004066] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-6">
        ♻️
      </div>
      <h3 className="font-montserrat font-semibold text-[#004066] text-2xl mb-2">MRFs</h3>
      <p className="font-montserrat text-[#004066] text-xl font-bold">{6}</p>
    </motion.div>
  </div>
</div>


    </section>

    
  );
};
