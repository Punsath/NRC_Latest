import React, { useEffect, useState } from "react";
import { useSpring, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

export const useFadeAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01
  });
  const fadeAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      duration: 800,
      easing: easings.easeInSine,
    },
  });

  const fadeUpAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(5%)",
    config: {
      duration: 800,
      easing: easings.easeInSine,
    },
  });
  const fadeDownAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-5%)",
    config: {
      duration: 800,
      easing: easings.easeInSine,
    },
  });

  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-40%)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,
    },
  });
  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 800,
      delay: 800,
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

  return { ref, fadeAnimation, fadeUpAnimation, fadeDownAnimation,fadeLeft,fadeRight };
};