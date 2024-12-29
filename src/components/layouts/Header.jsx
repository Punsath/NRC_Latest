import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated, easings } from "react-spring";
import { CloseIcon, MenuIcon, SearchIcon } from "../../utils/icons";
import logo from "../../assets/images/logo.png";
import { navigationItems } from "../../utils/dataArrays";

export const Header = ({ scrollRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [visibleMobile, setVisibleMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle header background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const handleFadeIn = () => {
    setVisibleMobile(!visibleMobile);
    document.body.style.overflow = visibleMobile ? "visible" : "hidden";
  };

  // Clean up body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  // Animations for navigation
  const fadeNavigation = useSpring({
    opacity: visibleMobile ? 1 : 0,
    transform: visibleMobile ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,
    },
  });

  return (
    <section
      className={`fixed w-full h-[70px] md:px-[6%] px-[5%] flex justify-between items-center ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md text-black"
          : "bg-transparent text-white"
      } font-nunito z-50 transition-all duration-300`}
    >
      <div className="flex items-center gap-10">
        <Link to="/">
          <img src={logo} className="object-cover h-[70px]" alt="Logo" />
        </Link>

        {/* Desktop navigation */}
        <div className="items-center hidden gap-5 md:flex">
          {navigationItems.map((navigation, navigationIndex) => (
            <Link
              key={navigationIndex}
              to={navigation.link}
              className={`nav-item text-base font-semibold px-5 py-1 transition-all duration-300 ${
                location.pathname === navigation.link
                  ? "border-b-2 border-[#004066] text-[#18A8E5]"
                  : ""
              } ${isScrolled ? "text-black" : "text-white"}`}
            >
              {navigation.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center block gap-5 md:hidden">
        <SearchIcon />
        <span onClick={handleFadeIn}>
          <MenuIcon />
        </span>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed w-full md:hidden block z-50 inset-0 top-0 left-0 bottom-0 bg-[#FFFFFF] h-[100vh] p-[20px] transition-transform duration-500 ease-in-out ${
          visibleMobile ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-end w-full">
          <animated.span style={fadeNavigation} onClick={handleFadeIn}>
            <CloseIcon />
          </animated.span>
        </div>

        {/* Mobile Navigation Links */}
        <animated.div style={fadeNavigation} className="mt-[70px]">
          {navigationItems.map((navigation, navigationIndex) => (
            <Link
              key={navigationIndex}
              to={navigation.link}
              onClick={handleFadeIn} // Close mobile menu on link click
              className={`nav-item block text-base font-semibold text-black my-5 ${
                location.pathname === navigation.link
                  ? "border-b-2 border-[#18A8E5] text-[#18A8E5]"
                  : ""
              }`}
            >
              {navigation.title}
            </Link>
          ))}
        </animated.div>
      </div>
    </section>
  );
};
