import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, Navigate, useLocation } from "react-router-dom";
import {
  Burger,
  SearchIcon,
  BellIcon,
  HelpCircleIcon,
  ArrowBack,
} from "../../utils/icons";
import { SideBar } from "./SideBar";
import { Card, Tooltip, IconButton } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../contexts/NavigationContext";
import { subPathLinks } from "../../utils/dataArrays";

export const AdminLayout = ({ selectedItem }) => {
  const [signOutVisible, setSignOutVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const dropdownRef = useRef(null);
  const sideBardownRef = useRef(null);
  const sideBarButtondownRef = useRef(null);
  const { token, setUser, setToken } = useStateContext();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };

  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const toggleSidebarExpand = () => {
    setSidebarExpanded((cur) => !cur);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSignOutVisible(false);
      }
      if (
        sideBardownRef.current &&
        !sideBardownRef.current.contains(event.target)
      ) {
        if (
          sideBarButtondownRef.current &&
          sideBarButtondownRef.current.contains(event.target)
        ) {
          setSidebar(true);
        } else {
          setSidebar(false);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const { user } = useStateContext();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userString = queryParams.get("user");
    const token = queryParams.get("token");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
      setToken(token);
    }
  }, [location.search]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleSidebar = () => {
    setSidebar((pre) => !pre);
  };

  let mainPath = "";
  let subPaths = "";
  const pathParts = location.pathname.split("/");
  const id = pathParts[3];

  switch (location.pathname) {
    case "/admin":
      mainPath = "Dashboard";
      subPaths = [];
      break;

    case "/admin/events":
      mainPath = "Events";
      subPaths = [];
      break;
    case "/admin/events/add":
      mainPath = "Events";
      subPaths = ["Back", "New Event"];
      break;
    case `/admin/events-edit/${id}`:
      mainPath = "Events";
      subPaths = ["Back", "Edit Events"];
      break;

    case "/admin/package":
      mainPath = "TravelPackage";
      subPaths = [];
      break;
    case "/admin/package/package-add":
      mainPath = "TravelPackage";
      subPaths = ["Back", "New Travel Package"];
      break;
    case "/admin/package/option-add":
      mainPath = "TravelPackage";
      subPaths = ["Back", "New Option"];
      break;

    case "/admin/contact":
      mainPath = "Contact";
      subPaths = [];
      break;
    case "/account":
      mainPath = "My Account";
      subPaths = [];
      break;
    case "/admin/locations":
      mainPath = "Tourism Locations";
      subPaths = [];
    case "/admin/locations/add":
      mainPath = "Tourism Locations";
      subPaths = [];
    case `/admin/locations-edit/${id}`:
      mainPath = "Tourism Locations";
      subPaths = [];
    case `/admin/bookings`:
      mainPath = "Bookings";
      subPaths = [];
      break;
    case `/admin/custom-booking`:
      mainPath = "Custom Booking";
      subPaths = [];
      break;
      case "/admin/contact-details":
      mainPath = "Contact Details";
      subPaths = [];
      break;
      case "/admin/contact-details/add":
        mainPath = "Contact Details";
        subPaths = [];
        case `/admin/contact-edit/${id}`:
          mainPath = "Contact Details";
          subPaths = [];
    default:
      break;
  }
  return (
    <section className="bg-[#f0eff5] w-full min-h-screen flex">
      <div ref={sideBardownRef} className="">
        <SideBar
          handleSidebar={handleSidebar}
          sidebar={sidebar}
          handleLogout={handleLogout}
          sidebarExpanded={sidebarExpanded}
          toggleSidebarExpand={toggleSidebarExpand}
        />
      </div>

      <section
        className={`w-full flex flex-col transition-all duration-300 ease-in-out ${
          sidebarExpanded
            ? "md:ml-[15%] md:w-[85%]"
            : "md:ml-[80px] md:w-w-full"
        }`}
        style={{
          transition: "margin-left 0.5s ease-in-out",
        }}
      >
        <div className="relative rounded-none bg-[#2a3577] w-full py-3 md:pl-[2%] pl-[3%] md:pr-[2%] pr-[3%] flex flex-row justify-between items-center md:before:w-[35px] md:before:h-[35px] md:before:content-[''] md:before:bg-[#2a3577] md:before:absolute md:before:left-[-35px] md:before:top-0">
          <div>
            <div ref={sideBarButtondownRef} className="flex md:hidden">
              <Tooltip content="Sidebar">
                <div onClick={handleSidebar}>
                  <Burger className="w-4 h-4 text-white" />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="block md:hidden"></div>
            <div className="font-poppins text-white font-medium text-[24px] leading-9 hidden md:block">
              {mainPath}
            </div>
            <div className="flex items-center justify-between">
              <div className="relative hidden md:block w-[250px]">
                <i className="absolute text-white transform -translate-y-1/2 left-3 top-1/2">
                  <SearchIcon />
                </i>
                <input
                  type="text"
                  className="w-full bg-[#a8afc9] bg-opacity-80 placeholder:text-white placeholder:text-[12px] placeholder:font-poppins placeholder:font-semibold placeholder:leading-[18px] pl-10 pr-3 py-2 rounded-[15px] focus:outline-none focus:border-transparent"
                  placeholder="Search here..."
                />
              </div>

              <Tooltip content="View Notifications">
                <div className="bg-[#546093] md:px-4 md:py-3 px-3 py-3 rounded-[20px] ml-8">
                  <Link to="/notifications">
                    <BellIcon className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </Tooltip>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center gap-2 ml-2 cursor-pointer"
                  onClick={() => setSignOutVisible(!signOutVisible)}
                >
                  <div className="ml-2 bg-gray-500 rounded-full w-fit">
                    <UserIcon className="w-12 h-12 text-white md:h-12 md:w-12" />
                  </div>
                  <div className="hidden md:block">
                    <br />
                  </div>
                </div>
                {signOutVisible && (
                  <div className="absolute top-12 right-5 bg-white w-[150px] flex flex-col items-start p-3 z-10 shadow-md">
                    <div className="w-full" onClick={handleLogout}>
                      <div className="py-2 cursor-pointer font-poppins">
                        Logout
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-between py-2 md:px-[2%] px-[3%]">
          <div className="flex items-center justify-between gap-2 md:gap-5">
            {subPaths.map((path, index) =>
              path === "Back" ? (
                <div key={index} className="border-r border-[#DDDDDD] pr-5">
                  <a href="#" onClick={() => window.history.back()}>
                    <button className="bg-[#F6FBFF] text-[#64728C] font-poppins font-normal text-[12px] md:text-[14px] leading-[21px] text-center py-1.5 px-1 md:px-3 rounded-[15px] transition-all duration-300">
                      <ArrowBack className="w-4 h-4 mr-1" />
                    </button>
                  </a>
                </div>
              ) : (
                <Link key={index} to={subPathLinks[path]}>
                  <button
                    className={`bg-[#F6FBFF] text-[#64728C] font-poppins font-normal text-[12px] md:text-[14px] leading-[21px] text-center py-1.5 px-1 md:px-3 rounded-[15px] transition-all duration-300 ${
                      location.pathname.includes(subPathLinks[path])
                        ? "bg-[#ecefff] text-[#2a3577]"
                        : ""
                    }`}
                  >
                    {path}
                  </button>
                </Link>
              )
            )}
          </div>
          <div className="border-l border-[#DDDDDD] hidden md:flex">
            <div className="bg-[#f5f5f5] md:px-4 md:py-3 px-2 py-2 rounded-[20px] md:ml-8 ml-4 w-fit">
              <Link to="#">
                <HelpCircleIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col md:px-[2%] px-[3%]">
          <Outlet />
        </div>
      </section>
    </section>
  );
};
