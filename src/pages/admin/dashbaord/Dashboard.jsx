import React, { useEffect, useState } from "react";
import { CountCard } from "./CountCard";
import { DailySales } from "./DailySales";
import { TotalQty } from "./TotalQty";
import { DailyProductivity } from "./DailyProductivity";
import { RecentJobs } from "./RecentJobs";
import { useStateContext } from "../../../components/contexts/NavigationContext";
import axiosClient from "../../../../axios-client";

export const Dashboard = () => {
  const { user } = useStateContext();
  const [data, setData] = useState({});
  //console.log("dashboard",data)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (user !== null && user.branch) {
  //       try {
  //         const res = await axiosClient.get("dashboard/main-details");
  //         // Adjusting data structure to match frontend expectations
  //         const adjustedData = {
  //           locations: res.location_count,
  //           itemCount: res.stock_count,
  //           quantity: res.total_qty,
  //           jobCount: res.ongoing_job_count, // Adjusted this to 'ongoing_job_count'
  //           ongoingJobs: res.ongoing_job_count, // Adjusted this to 'ongoing_job_count'
  //         };
  //         setData(adjustedData);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [user]);

  useEffect(() => {
    const fetchData = () => {
      axiosClient
        .get("dashboard/main-details")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="md:flex w-full">
        <CountCard data={data} />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5 items-stretch">
        <div className="w-full md:w-[64%]">
          <DailySales data={data} />
        </div>
        <div className="w-full md:w-[34%]">
          <TotalQty data={data} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5 items-stretch mb-10">
        <div className="w-full md:w-[34%]">
          <DailyProductivity data={data} />
        </div>
        <div className="w-full md:w-[64%]">
          <RecentJobs data={data?.recent_jobs} />
        </div>
      </div>
    </>
  );
};
