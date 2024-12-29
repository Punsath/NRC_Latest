import { useState, useEffect } from "react";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import logoSmall from "../../assets/images/logo.png";
import { newNavigationItems } from "../../utils/dataArrays";
import { CloseSidebarIcon } from "../../utils/icons";
import { useStateContext } from "../contexts/NavigationContext";
import axiosClient from "../../../axios-client";
import Swal from "sweetalert2";

export const SideBar = ({
  handleSidebar,
  sidebar,
  handleLogout,
  toggleSidebarExpand,
  sidebarExpanded,
  showSalesman,
}) => {
  const { user } = useStateContext();

  const [linkchange, setLinkChange] = useState(false);
  const [salesmanEnabled, setSalesmanEnabled] = useState(0);
  const [currentUrl, setCurrentUrl] = useState("/dashboard");

  const changeUrl = () => {
    setCurrentUrl(window.location.href.split("/").pop());
  };

  useEffect(() => {
    const getRules = () => {
      axiosClient
        .get(`/rules/${user.branch}`)
        .then((res) => {
          setSalesmanEnabled(res.data[0].Salesman);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    // getRules();
  }, []);

  useEffect(() => {
    changeUrl();
  }, [linkchange]);

  return (
    <div dir="ltr">
      <div
        className={` h-full rounded-l-lg shadow-xl rounded-r-[40px] bg-[#FFFFFF] flex flex-col font-inter z-50 items-start fixed transform duration-300 ease-in-out fade-right-enter-active md:opacity-100 overflow-visible pb-20 transition-all ${
          sidebar ? "fade-right-enter-to" : "fade-right-enter-from"
        } ${sidebarExpanded ? "md:w-[15%] w-[60%]" : "md:w-[80px] w-[60%]"}`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="mb-2 flex items-center relative gap-4 p-4 w-full z-50">
          <div className="flex justify-center w-full mb-10 h-[80px] relative">
            <img
              src={logo}
              alt="brand"
              className={`absolute top-0 pt-4 left-1/2 transform transition-all duration-500 ease-in-out ${
                sidebarExpanded
                  ? "opacity-100 translate-x-[-50%]"
                  : "opacity-0 translate-x-[-60%]"
              }`}
              style={{
                visibility: sidebarExpanded ? "visible" : "hidden",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s",
              }}
            />
            <img
              src={logo}
              alt="brand"
              className={`absolute top-0 left-1/2 pt-5 transform transition-all duration-500 ease-in-out ${
                sidebarExpanded
                  ? "opacity-0 translate-x-[-40%]"
                  : "opacity-100 translate-x-[-50%]"
              }`}
              style={{
                visibility: sidebarExpanded ? "hidden" : "visible",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, visibility 0.5s",
              }}
            />
          </div>
          <span
            onClick={handleSidebar}
            className="absolute top-0 right-0 md:hidden"
          ></span>
          <div
            className="w-[30px] aspect-square rounded-full bg-[#263679] absolute top-28 -right-[15px] z-100 hidden md:flex items-center justify-center pr-[3px] cursor-pointer"
            onClick={toggleSidebarExpand}
          >
            {sidebarExpanded ? (
              <span className="cursor-pointer">
                <CloseSidebarIcon />
              </span>
            ) : (
              <span className="rotate-180 pr-1 cursor-pointer">
                <CloseSidebarIcon />
              </span>
            )}
          </div>
        </div>

        <div className="w-full relative overflow-y-scroll scrollbar-y-style overflow-x-hidden">
          <li className="list-none w-full flex gap-1 flex-col">
            {newNavigationItems.slice(0, 8).map((item, itemIndex) => {
              return (
                <NavItem
                  icon={item.icon}
                  currentUrl={currentUrl}
                  setLinkChange={setLinkChange}
                  changeUrl={changeUrl}
                  key={itemIndex}
                  title={item.title}
                  link={item.link}
                  children={item.children}
                  handleSidebar={handleSidebar}
                  toggleSidebarExpand={toggleSidebarExpand}
                  sidebarExpanded={sidebarExpanded}
                />
              );
            })}
          </li>
          <li className="list-none w-full flex gap-1 flex-col">
            {newNavigationItems.slice(8, 14).map((item, itemIndex) => {
              return (
                <NavItem
                  icon={item.icon}
                  currentUrl={currentUrl}
                  setLinkChange={setLinkChange}
                  changeUrl={changeUrl}
                  key={itemIndex}
                  title={item.title}
                  link={item.link}
                  children={item.children}
                  handleSidebar={handleSidebar}
                  toggleSidebarExpand={toggleSidebarExpand}
                  sidebarExpanded={sidebarExpanded}
                />
              );
            })}
          </li>
          <li className="list-none w-full flex gap-1 flex-col mt-16">
            {newNavigationItems.slice(14, 15).map((item, itemIndex) => {
              return (
                <NavItem
                  icon={item.icon}
                  currentUrl={currentUrl}
                  setLinkChange={setLinkChange}
                  changeUrl={changeUrl}
                  key={itemIndex}
                  title={item.title}
                  link={item.link}
                  children={item.children}
                  handleSidebar={handleSidebar}
                  toggleSidebarExpand={toggleSidebarExpand}
                  sidebarExpanded={sidebarExpanded}
                />
              );
            })}
            <NavItem
              title="Logout"
              link="#"
              handleLogout={handleLogout}
              icon={() => (
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99967 3.20837C10.3448 3.20837 10.6247 3.4882 10.6247 3.83337C10.6247 4.17855 10.3448 4.45837 9.99967 4.45837C6.66296 4.45837 3.95801 7.16332 3.95801 10.5C3.95801 13.8368 6.66296 16.5417 9.99967 16.5417C10.3448 16.5417 10.6247 16.8215 10.6247 17.1667C10.6247 17.5119 10.3448 17.7917 9.99967 17.7917C5.9726 17.7917 2.70801 14.5271 2.70801 10.5C2.70801 6.47297 5.9726 3.20837 9.99967 3.20837Z"
                    fill="#64728C"
                    stroke="#64728C"
                    strokeWidth="0.2"
                  />
                  <path
                    d="M13.7244 8.44194C13.4803 8.19786 13.4803 7.80213 13.7244 7.55806C13.9685 7.31398 14.3642 7.31398 14.6083 7.55806L17.1083 10.0581C17.3523 10.3022 17.3523 10.6978 17.1083 10.9419L14.6083 13.4419C14.3642 13.686 13.9685 13.686 13.7244 13.4419C13.4803 13.1978 13.4803 12.8022 13.7244 12.5581L15.1574 11.125H8.33301C7.98783 11.125 7.70801 10.8452 7.70801 10.5C7.70801 10.1548 7.98783 9.875 8.33301 9.875H15.1574L13.7244 8.44194Z"
                    fill="#64728C"
                    stroke="#64728C"
                    strokeWidth="0.2"
                  />
                </svg>
              )}
              toggleSidebarExpand={toggleSidebarExpand}
              sidebarExpanded={sidebarExpanded}
            />
          </li>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  icon,
  title,
  link,
  children,
  currentUrl,
  setLinkChange,
  handleSidebar,
  handleLogout,
  sidebarExpanded,
}) => {
  const NavIcon = icon;

  const handleCLick = () => {
    setLinkChange((pre) => !pre);
  };

  const handleClick = () => {
    if (handleLogout) {
      Swal.fire({
        title: "Are you sure?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
        customClass: {
          title: "font-inter",
          content: "font-inter",
          actions: "font-inter",
          confirmButton: "font-inter",
          cancelButton: "font-inter",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          handleLogout();
        }
      });
    }
    handleCLick();
  };

  return (
    <div className={`flex w-full ${sidebarExpanded ? `pr-4` : `pr-3`}`}>
      {currentUrl === link ? (
        <div className="bg-[#263679] w-1 h-[45px] min-h-1 rounded-l-lg rounded-r-full"></div>
      ) : (
        <div className="bg-white w-1 h-[45px] min-h-1 rounded-l-lg rounded-r-full"></div>
      )}
      <Link to={`${link !== "#" ? "/" + link : "#"}`} className={`ml-1 w-full`}>
        <div className="flex items-end flex-col">
          <ListItem
            onClick={handleClick}
            className={`${
              currentUrl === link
                ? "focus:bg-[#263679] active:bg-[#263679] bg-[#263679] active:text-white focus:text-white text-white font-bold"
                : "text-[#64728C] font-bold"
            } font-poppins font-bold text-[14px] leading-[22px] justify-between p-0 h-[45px]`}
          >
            <div className="flex h-full items-center justify-center">
              <ListItemPrefix className="flex justify-center items-center pl-[23px]">
                {currentUrl === link ? (
                  <NavIcon color={"white"} width={"18px"} className="h-5" />
                ) : (
                  <NavIcon color={"#64728C"} width={"18px"} className="h-5" />
                )}
              </ListItemPrefix>
              <span
                className={`font-poppins flex-1 font-semibold mr-2 transition-transform duration-500 ease-in-out`}
                style={{
                  transform: sidebarExpanded
                    ? "translateX(0)"
                    : "translateX(-100%)",
                  opacity: sidebarExpanded ? 1 : 0,
                  transition:
                    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                }}
              >
                {title}
              </span>
            </div>
          </ListItem>
        </div>
      </Link>
    </div>
  );
};
