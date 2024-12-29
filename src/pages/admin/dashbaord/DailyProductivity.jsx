import Chart from "react-apexcharts";
import { DashboardArrowDownIcon } from "../../../utils/icons";

export const DailyProductivity = () => {
  // Sample data
  const labels = ["01", "02", "03", "04", "05", "06"];
  const series = [
    {
      name: "Dataset 1",
      data: [30324523, 40, 35, 50, 49, 60],
    },
    {
      name: "Dataset 2",
      data: [333, 22, 22, 420, 12, 320],
    },
  ];

  const chartConfig = {
    options: {
      chart: {
        type: "line",
        height: 300,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      stacked: false,
      xaxis: {
        categories: labels,
      },
      colors: ["#5a6acf", "#baf0b1"],
      yaxis: [
        {
          seriesName: "Last 6 days",
          opposite: false,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
          title: {
            show: false,
          },
          grid: {
            show: false,
          },
        },
        {
          seriesName: "Last Week",
          opposite: false,
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
          title: {
            show: false,
          },
          grid: {
            show: false,
          },
        },
      ],
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        markers: {
          width: 8,
          height: 8,
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
    series: series,
  };

  return (
    <div className="h-full rounded-[20px] w-full md:mb-0 mb-5 pt-3 bg-white">
      <div className="flex flex-col py-3">
        <div className="md:flex md:justify-between w-auto px-6 pb-4">
          <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#64728C]">
            Daily Productivity
          </h3>
          <button className="font-poppins font-medium text-[12px] leading-[20px] bg-[#FBFCFE] border-[0.5px] border-[#DDE4F0] text-[#263679] px-2 py-1 rounded-[5px]">
            View Report
          </button>
        </div>
        <div className="font-poppins font-medium text-[20px] leading-7 text-black mt-5 px-6">
          2.568
        </div>
        <div className="flex w-full mt-3 px-6">
          <div className="font-poppins text-[12px] leading-[12px] flex gap-2">
            <DashboardArrowDownIcon />
            <span className="text-[#F2383A] font-semibold">2.1%</span>
            <span className="text-[#737B8B] font-normal">vs last week</span>
          </div>
        </div>
        <div className="w-full">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="line"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
