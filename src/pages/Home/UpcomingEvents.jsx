import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import Ex from "./../../assets/images/Excellence.jpg";
import { Link } from "react-router-dom";


export const UpcomingEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.23,
  });

  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-8%)",
    config: {
      duration: 1200,
      easing: easings.easeInSine,
    },
  });

  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(8%)",
    config: {
      duration: 1200,
      easing: easings.easeInSine,
    },
  });

  const fadeUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(5%)",
    config: {
      duration: 1200,
      easing: easings.easeInSine,
    },
  });

  useEffect(() => {
    const loaderDelay = 200;
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full bg-white px-[5%] md:px-[7%] md:py-[7%]  flex flex-col md:flex-row justify-center items-center font-montserrat"
    >
      <div className="flex flex-col items-center md:flex-row md:gap-[5%] gap-4 md:w-full">
        <div className="hidden md:flex md:w-[48%] flex-row gap-[1%] md:pt-[20px]">
          <div className="flex flex-col w-full gap-4">
            <animated.div style={fadeUp} className="overflow-hidden">
              <img src={Ex} className="object-cover w-full" alt="Excellence" />
            </animated.div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-[52%]">
          <animated.div
            style={fadeRight}
            className="font-montserrat font-bold md:text-[32px] mt-6 mb-4 text-[24px] md:w-[75%] w-full md:leading-[39px] leading-[38px] text-[#004066]  text-left md:text-left"
          >
            Why you should choose us
          </animated.div>
          <div className="flex flex-row w-full pt-3 md:hidden">
            <div className="flex flex-row">
              <div className="flex flex-col w-[100%]">
                <animated.div
                  style={fadeUp}
                  className="overflow-hidden w-[100%] h-auto"
                >
                  <img src={Ex} className="object-cover" alt="Excellence" />
                </animated.div>
              </div>
            </div>
          </div>
          <div className="font-montserrat font-normal text-[14px]  md:w-[90%] leading-[30px]  md:text-[16px] md:leading-8 text-[#3A2651]  text-left md:text-left">
            <animated.p style={fadeRight} className="mb-3">
              <div>
               
                <span className="font-montserrat font-normal  text-[14px] md:w-[90%] leading-[30px] md:text-[16px] md:leading-8 text-[#3A2651]  text-left md:text-left">
                At Negombo Recycling Club (NRC), we take pride in being a trusted leader in the recycling industry, driven by a deep commitment to sustainability, innovation, and community impact. Our expertise ensures efficient and responsible recycling practices, transforming waste into valuable resources. By empowering local communities through employment opportunities and educational programs, we foster growth and awareness about the importance of responsible waste management. With a proven track record of reliability and ethical practices, we aim to redefine the recycling industry as a cornerstone of environmental and economic progress. Partner with us to create a cleaner, greener future for generations to come.
                </span>
              </div>

              <div className="flex pb-6 mt-8 justify-left md:justify-start md:pb-0">
                <Link to="/about-us">
                  <button className="font-montserrat px-4 md:px-[25px] mt-4 py-2 md:py-[12px] bg-[#004066] hover:bg-[#005A87] rounded-[8px] font-medium leading-[30px] md:leading-[24px] text-white md:text-[16px] text-[16px] md:font-medium">
                    View More
                  </button>
                </Link>
              </div>
            </animated.p>
          </div>
        </div>
      </div>
    </section>

    

    
  );
};
