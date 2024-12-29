import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigationItems } from "./../../utils/dataArrays";

const NavBar = ({ scrollRefs }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, [window.location.pathname]);

  const scrollToDiv = (section) => {
    const isHomePage = window.location.pathname === "/";

    if (!isHomePage) {
      navigate("/?scrollTo=" + section);
    } else {
      scrollRefs.current[section].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get("scrollTo");

    if (scrollToSection) {
      setTimeout(() => {
        scrollRefs.current[scrollToSection].scrollIntoView({
          behavior: "smooth",
        });
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }, 500);
    }
  }, [scrollRefs]);

  const isNavItemActive = (item) => {
    return currentUrl === item.link;
  };

  return (
    <div className="absolute top-[70px] flex justify-between w-full py-2 bg-[#2E3094] z-20">
      <div className="flex w-[50%] text-white gap-2 justify-center">
        {navigationItems.slice(0, 2).map((navigation, navigationIndex) => (
          <Link
            key={navigationIndex}
            to={navigation.link}
            className={`nav-item ${
              isNavItemActive(navigation)
                ? "text-[#CB1717] bg-[#ffffff] font-semibold rounded-[25px] border-b-2 border-red-500"
                : "text-[#ffffff] font-medium"
            } font-sans text-[14px] p-1 px-5 transition-colors duration-300`}
          >
            {navigation.title}
          </Link>
        ))}

        {navigationItems.slice(2, 5).map((navigation, navigationIndex) => (
          <Link
            key={navigationIndex}
            to={navigation.link}
            className={`nav-item ${
              isNavItemActive(navigation)
                ? "text-[#CB1717] bg-[#ffffff] font-semibold rounded-[25px] border-b-2 border-red-500"
                : "text-[#ffffff] font-medium"
            } font-sans text-[14px] p-1 px-5 transition-colors duration-300`}
          >
            {navigation.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center w-[20%] text-white gap-6 justify-end pr-24 text-[14px]">
        {/* Search Section */}
        <div className="flex items-center gap-2">
          <p>SEARCH</p>
        </div>

        {/* User Section */}
        <Link to="/signin" className="flex items-center gap-2 text-[14px]">
          <p>LOGIN</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
