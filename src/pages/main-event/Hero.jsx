import React, { useEffect, useState } from "react";
import { useSpring, animated, useInView } from "react-spring";
import hero from "./../../assets/images/main-events/main-event-heronew.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeOver = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: {
      duration: 1000,
      delay: 500,
    },
  });
 
  const fadeScreen = useSpring({
    opacity: isVisible ? 0 : 1,
    config: {
      duration: 800,
      delay: 500,
    },
  });

  useEffect(() => {
    const loaderDelay = 200;

    setTimeout(() => {
      if (inView) {
        setIsVisible(false);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        className="overflow-hidden w-full h-[340px] md:h-[600px] relative items-center justify-center flex"
      >
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 z-10"></div>

        {/* Background image */}
        <img src={hero} className="w-full h-[600px] object-cover" alt="Main Events" />

        {/* Animated content */}
        <animated.div
          style={fadeScreen}
          className="absolute w-full md:ml-44 h-[600px] flex items-center justify-start gap-[30px] px-[20px] z-20"
        >
          <div className="text-left text-white font-Montserrat font-[700] text-[30px] md:text-[60px] leading-[70px]">
            Project BLUECAP
          </div>
        </animated.div>
      </section>
    </>
  );
};
