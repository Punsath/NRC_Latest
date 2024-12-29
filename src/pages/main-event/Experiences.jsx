import React from "react";
import imageUrl from "../../assets/images/wild-life/wildlifeContent2.png";
import { wildLifeExperiences } from "../../utils/dataArrays";
export const Experiences = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-8 md:p-16 w-full max-w-6xl ">
        <h1 className="text-[40px] font-nova font-[400] text-center">
          Top Wildlife Experiences
        </h1>
        <p className="text-center text-[16px] font-plusJakarta font-[400] mt-3">
          For those looking to immerse themselves in nature, Sri Lanka offers a
          range of thrilling wildlife experiences.
        </p>

        {wildLifeExperiences.map((experience, index) => (
          <div
            key={index}
            className={`mb-20 flex rounded-l-[20px] items-stretch mt-10 h-[261px] bg-[#004AAD1A]  ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse rounded-r-[20px]"
            }`}
          >
            <div className="flex-1 p-4 overflow-hidden mb-20">
              <h2 className="text-[20px] font-nunito font-[600]">
                {experience.title}
              </h2>
              <p className="text-[16px] font-plusJakarta font-[400] text-[#1E1E1E] pt-3 ">
                {experience.Description}
              </p>
            </div>
            <div className="flex-1 text-right overflow-hidden">
              <img
                src={experience.image}
                alt={`${experience.title} Image`}
                className=" h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
