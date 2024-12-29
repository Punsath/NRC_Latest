import dashedLine from "../../assets/images/vectors/dashed-line.png";
import dashedLinemobile from "../../assets/images/vectors/dashed-linemobile.png";
import { ArrowUpRightIcon } from "../../utils/icons";
import { featuredDestinations } from "../../utils/dataArrays";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeaturedDestinations = () => {
  const sliderRef = useRef(null);

  const mobileSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5, // Display 1 full card and half of the next card
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rows: 1,
    slidesPerRow: 1,
    centerMode: true, // Enable center mode to show the next slide partially on the right
    centerPadding: "-10px", // Remove padding for clean alignment
  };

  return (
    <section className="mt-[150px] relative">
      <div className="bg-[#F2F2F2] md:w-[57%] w-[65%] h-[690px] rounded-r-[20px] justify-center pt-20 pr-5 -z-20">
        <h1 className="absolute font-nunito font-bold md:text-[50px] text-[30px] leading-[30px] md:ml-20 ml-[5%]">
          Featured Destinations
        </h1>
        <p className=" w-[70%] text-center md:ml-[300px] md:flex hidden flex-wrap mt-16">
          Sri Lanka is a paradise for travelers, offering a wide range of
          activities that cater to every interest. Whether you're an adventure
          seeker, a culture enthusiast, or someone looking to relax, there's
          something for everyone.
        </p>
        <p className="absolute w-[80%] text-[12px] leading-[22px] font-[300] ml-[5%] text-left md:hidden flex  flex-wrap mt-16">
          Sri Lanka is a paradise for travelers, offering a wide range of
          activities that cater to every interest. Whether you're an adventure
          seeker, a culture enthusiast, or someone looking to relax, there's
          something for everyone.
        </p>
      </div>
      <div className="w-full absolute md:top-10 top-[200px]">
        <img src={dashedLine} className="w-full md:block hidden" />
        <img src={dashedLinemobile} className="w-full md:hidden block" />
      </div>
      <div className="md:flex hidden w-full justify-between items-center px-[7%] z-10 gap-5 absolute top-[300px]">
        {featuredDestinations.map((destination, index) => {
          return (
            <div
              className={`w-[280px] rounded-[10px] pt-8 pl-4 flex justify-between pb-4 pr-4 ${
                index === 1 || index === 2 ? "h-[300px]" : "h-[380px]"
              } ${index % 2 === 0 ? "flex-col" : "flex-col-reverse pt-5"} ${
                index === 1 ? `mt-32` : index === 3 ? `-mt-6` : null
              }`}
              style={{
                backgroundImage: `url(${destination.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <h3 className="font-nunito font-bold text-[24px] leading-[32px] text-white">
                  {destination.title}
                </h3>
                <div className="flex items-center gap-3 flex-wrap mt-5">
                  {destination.locations.map((location) => {
                    return (
                      <div className="bg-black bg-opacity-30 w-fit text-white font-nunito font- rounded-[5px] py-1 px-3 text-[14px]">
                        {location.title}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="bg-white bg-opacity-30 flex justify-center items-center w-fit p-3 rounded-[10px] cursor-pointer">
                  <ArrowUpRightIcon color="white" size="24" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-[98%] absolute md:top-10 top-[250px]">
        <div className="flex flex-col w-full item center justify-center slider-container inset-0">
          <Slider
            ref={sliderRef}
            {...mobileSettings}
            className="block md:hidden"
          >
            {featuredDestinations.slice(0, 9).map((destination, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-evenly "
                >
                  <div className="mr-10 px-3 h-full">
                    <div
                      className={`w-[250px] rounded-[10px] pt-8 pl-4 flex justify-between pb-4 pr-4 ${
                        index === 1 || index === 2 ? "h-[300px]" : "h-[380px]"
                      } ${
                        index % 2 === 0 ? "flex-col" : "flex-col-reverse pt-5"
                      } ${
                        index === 1 ? `mt-32` : index === 3 ? `-mt-6` : null
                      }`}
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div>
                        <h3 className="font-nunito font-bold text-[24px] leading-[32px] text-white">
                          {destination.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap mt-5">
                          {destination.locations.map((location) => {
                            return (
                              <div className="bg-black bg-opacity-30 w-fit text-white font-nunito font- rounded-[5px] py-1 px-3 text-[14px]">
                                {location.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="w-full flex justify-end">
                        <div className="bg-white bg-opacity-30 flex justify-center items-center w-fit p-3 rounded-[10px] cursor-pointer">
                          <ArrowUpRightIcon color="white" size="24" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
