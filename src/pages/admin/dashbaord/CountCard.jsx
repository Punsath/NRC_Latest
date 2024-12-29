import React from "react";
import {
  DashboardLocationIcon,
  DashboardItemCountIcon,
  DashboardQtyIcon,
  DashboardJobCountIcon,
  DashboardOngoingJobsIcon,
} from "../../../utils/icons";

export const CountCard = ({ data }) => {
  //console.log("data",data)
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:justify-between mt-8 gap-5">
        <div className="md:w-[19%] w-full bg-white rounded-[15px] pl-4 py-5">
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[#e5e4ff] p-5 rounded-[20px] flex justify-center items-center">
              <DashboardLocationIcon />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="font-nunito font-bold leading-8 text-[24px] text-[#202224]">
                {data.location_count}
              </div>
              <div className="font-nunito text-[#202224] font-semibold leading-6 text-[14px]">
                Total Locations
              </div>
            </div>
            <div className="h-[50px] bg-[#8280FF] w-[2px] rounded-[5px]"></div>
          </div>
        </div>
        <div className="md:w-[19%] w-full bg-white rounded-[15px] pl-4 py-5">
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[#fff3d6] p-5 rounded-[20px] flex justify-center items-center">
              <DashboardItemCountIcon />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="font-nunito font-bold leading-8 text-[24px] text-[#202224]">
                {data.stock_count}
              </div>
              <div className="font-nunito text-[#202224] font-semibold leading-6 text-[14px]">
                Total Item Count
              </div>
            </div>
            <div className="h-[50px] bg-[#FEC53D] w-[2px] rounded-[5px]"></div>
          </div>
        </div>
        <div className="md:w-[19%] w-full bg-white rounded-[15px] pl-4 py-5">
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[#d9f7e8] p-5 rounded-[20px] flex justify-center items-center">
              <DashboardQtyIcon />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="font-nunito font-bold leading-8 text-[24px] text-[#202224]">
                {data.total_qty}
              </div>
              <div className="font-nunito text-[#202224] font-semibold leading-6 text-[14px]">
                Total Quantity
              </div>
            </div>
            <div className="h-[50px] bg-[#5CDD9C] w-[2px] rounded-[5px]"></div>
          </div>
        </div>
        <div className="md:w-[19%] w-full bg-white rounded-[15px] pl-4 py-5">
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[#ffded1] p-5 rounded-[20px] flex justify-center items-center">
              <DashboardJobCountIcon />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="font-nunito font-bold leading-8 text-[24px] text-[#202224]">
                {data.job_count}
              </div>
              <div className="font-nunito text-[#202224] font-semibold leading-6 text-[14px]">
                Job Count
              </div>
            </div>
            <div className="h-[50px] bg-[#FF9871] w-[2px] rounded-[5px]"></div>
          </div>
        </div>
        <div className="md:w-[19%] w-full bg-white rounded-[15px] pl-4 py-5">
          <div className="flex justify-between items-center gap-4">
            <div className="bg-[#d1f6ff] p-5 rounded-[20px] flex justify-center items-center">
              <DashboardOngoingJobsIcon />
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div className="font-nunito font-bold leading-8 text-[24px] text-[#202224]">
                {data.ongoing_job_count}
              </div>
              <div className="font-nunito text-[#202224] font-semibold leading-6 text-[14px]">
                Ongoing Jobs
              </div>
            </div>
            <div className="h-[50px] bg-[#26D6FD] w-[2px] rounded-[5px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
