import React from "react";
import { moreAboutStrilanka } from "../../utils/dataArrays";
import { ArrowUpRightIcon } from "../../utils/icons";

export const SimilarAttractions = () => {
  return (
    <section className="flex flex-col mt-[100px] mb-20">
      <div className="flex items-center w-full justify-center px-[5%] mb-8">
        <h3 className="text-center font-nova  text-[30px] text-[#1E1E1E] font-[400]">
          Explore More About Sri Lanka
        </h3>
      </div>
      <div className="flex items-center pl-[5%] overflow-x-auto gap-10 hide-scrollbar">
        {moreAboutStrilanka.map((location) => {
          return (
            <SimilarAttractionCard key={location.id} location={location} />
          );
        })}
      </div>
    </section>
  );
};

const SimilarAttractionCard = ({ location }) => {
  return (
    <div
      className="w-[220px] h-[260px] overflow-hidden flex justify-between flex-col p-3 bg-center"
      style={{ backgroundImage: `url(${location.image})` }}
    >
      <div className="flex w-full justify-end">
        <div className="bg-white bg-opacity-30 flex justify-center items-center w-fit p-3 rounded-[10px] cursor-pointer">
          <ArrowUpRightIcon color="white" size="24" />
        </div>
      </div>
      <h3 className="font-nunito font-semibold text-white text-[24px]">
        {location.name}
      </h3>
    </div>
  );
};
