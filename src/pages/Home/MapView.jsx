import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

// CountUp Component: to animate the numbers
const CountUp = ({ start, end, duration }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    let startTime;
    const increment = () => {
      startTime = startTime || Date.now();
      const progress = Date.now() - startTime;
      const percentage = Math.min(progress / duration, 1);
      setNumber(Math.round(percentage * (end - start) + start));

      if (percentage < 1) {
        requestAnimationFrame(increment);
      }
    };

    requestAnimationFrame(increment);
  }, [start, end, duration]);

  return <span>{number}</span>;
};

export const MapView = () => {
  const sectionRef = useRef(null); // Reference to the section we want to observe
  const [isVisible, setIsVisible] = useState(false); // State to check visibility

  // Intersection Observer setup to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when section is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#004066] text-white mt-36  py-10">
      <div
        ref={sectionRef} // Attach the ref to the section
        className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {/* First Stat Card */}
        <div>
          <h2 className="text-[64px] font-bold font-montserrat">
            {isVisible && <CountUp start={0} end={770800} duration={2000} />}+
          </h2>
          <p className="mt-2 text-[20px] font-montserrat">PET Bottle Collection</p>
        </div>

        {/* Second Stat Card */}
        <div>
          <h2 className="text-[64px] font-bold font-montserrat">
            {isVisible && <CountUp start={0} end={30} duration={2000} />}M pcs
          </h2>
          <p className="mt-2 text-[20px] font-montserrat">Recovered PET bottel QTY</p>
        </div>

        {/* Third Stat Card */}
        <div>
          <h2 className="text-[64px] font-bold font-montserrat">
            {isVisible && <CountUp start={0} end={11254} duration={2000} />}kgs
          </h2>
          <p className="mt-2 text-[20px] font-montserrat">Waste recovered from the beach</p>
        </div>
      </div>
    </div>
  );
};
