import Chart from "react-apexcharts";
import { ArrowUpIcon } from "../../../utils/icons";

export const DailySales = ({ data }) => {
  const handleFormatData = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  };

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData1 = [12, 34, 54, 54, 2, 34, 7, 32, 32, 56, 67, 45];
  const chartData2 = [13, 34, 45, 64, 43, 56, 25, 84, 84, 23, 3, 32];

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "2024",
        data: chartData1,
      },
      {
        name: "2023",
        data: chartData2,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        margin: 0,
        padding: 0,
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#5A6ACF", "#E6E8EC"],
      plotOptions: {
        bar: {
          columnWidth: "8px",
          borderRadius: 0,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#737B8B",
            fontSize: "11px",
            fontFamily: "Poppins",
            fontWeight: 400,
          },
        },
        categories: months,
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: false,
        borderColor: "#E0EDF1",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        markers: {
          width: 12,
          height: 12,
          radius: "50%",
        },
        labels: {
          colors: "#737B8B",
          useSeriesColors: false,
          fontSize: "12px",
          fontFamily: "Poppins",
          fontWeight: 400,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 5,
        },
      },
    },
  };

  return (
    <div className="h-auto rounded-[20px] w-full md:mb-0 mb-5 pt-3 bg-white">
      <div className="flex flex-col py-3 px-6">
        <div className=" md:flex md:justify-between w-auto">
          <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#64728C]">
            Monthly Consumption
          </h3>
          <button className="font-poppins font-medium text-[12px] leading-[20px] bg-[#FBFCFE] border-[0.5px] border-[#DDE4F0] text-[#263679] px-2 py-1 rounded-[5px]">
            View Report
          </button>
        </div>
        <div className="font-poppins font-medium text-[20px] leading-7 text-black mt-5">
          MT 7.852.000
        </div>
        <div className="flex w-full justify-between mt-3">
          <div className="font-poppins text-[12px] leading-[12px] flex gap-2">
            <ArrowUpIcon />
            <span className="text-[#149D52] font-semibold">2.1%</span>
            <span className="text-[#737B8B] font-normal">vs last week</span>
          </div>
          <div className="font-poppins text-black text-[13px]">
            Consumption from 1-12 Dec, 2020
          </div>
        </div>
        <Chart {...chartConfig} />
      </div>
    </div>
  );
};
