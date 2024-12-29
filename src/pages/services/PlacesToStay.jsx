import React from "react";
import { ArrowUpRightIcon, RatingStarsIcon } from "../../utils/icons";
import { placesToStayInColombo } from "../../utils/dataArrays";

export const PlacesToStay = () => {
  return (
    <section className="flex flex-col mt-[130px]">
      <div className="flex items-center w-full justify-between px-[5%] mb-8">
        <h3 className="font-nunito font-bold text-[30px] leading-[30px] text-[#1E1E1E]">
          Places To Stay In Colombo
        </h3>
        <button className="font-nunito font-semibold text-[14px] leading-[20px] flex items-center gap-2 border border-[#FF914C] rounded-[15px] p-3">
          See all <ArrowUpRightIcon color="black" size="16" />
        </button>
      </div>
      <div className="flex items-center pl-[5%] overflow-x-auto gap-10 hide-scrollbar">
        {placesToStayInColombo.map((location) => {
          return <PlaceToStayCard key={location.id} location={location} />;
        })}
      </div>
    </section>
  );
};

const PlaceToStayCard = ({ location }) => {
  return (
    <div className="flex items-center rounded-[20px] border-[0.5px] border-[#DBDBDB] min-w-[460px]">
      <img src={location.image} className="object-cover w-[180px]" />
      <div className="flex flex-col p-3 w-full">
        <h5 className="font-nunito font-semibold text-[22px] leading-[28px] text-[#1E1E1E]">
          {location.name}
        </h5>
        <p className="font-nunito font-normal text-[16px] text-[#727272] mt-3">
          {location.email}
        </p>
        <p className="font-nunito font-normal text-[16px] text-[#727272] mb-3">
          Tel : {location.contact}
        </p>
        <RatingStarsIcon />
        <div className="flex items-center gap-3 font-nunito font-semibold text-[14px] text-[#004AAD] mt-4 cursor-pointer">
          <span>Book Now</span>
          <ArrowUpRightIcon color="#004AAD" size="14" />
        </div>
      </div>
    </div>
  );
};
