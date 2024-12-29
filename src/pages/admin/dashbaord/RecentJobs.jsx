import React from "react";

export const RecentJobs = ({ data = [] }) => {
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

  console.log("Jobdata", data);

  return (
    <div className="h-full rounded-[20px] w-full md:mb-0 mb-5 pt-3 bg-white">
      <div className="flex flex-col py-3 px-6">
        <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#64728C]">
          Recent Jobs
        </h3>
        <div className="mt-10">
          <table className="rounded-[10px] text-left border-[0.6px] border-separate border-tools-table-outline border-[#D5D5D5] w-full">
            <thead>
              <tr>
                <th className="font-nunito font-extrabold text-[14px] py-3 px-5 text-[#202224]">
                  Job Code
                </th>
                <th className="font-nunito font-extrabold text-[14px] text-[#202224]">
                  Start Date
                </th>
                <th className="font-nunito font-extrabold text-[14px] text-[#202224]">
                  End Date
                </th>
                <th className="font-nunito font-extrabold text-[14px] text-[#202224]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="rounded-b-sm">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((job) => (
                  <tr key={job.idJOB}>
                    <td className="border-t-[0.6px] border-[#D5D5D5] py-3 px-2 font-nunito font-semibold text-[14px] text-[#202224]">
                      {job.Job_Code}
                    </td>
                    <td className="border-t-[0.6px] border-[#D5D5D5] py-3 px-2 font-nunito font-semibold text-[14px] text-[#202224]">
                      {handleFormatData(job.Date_Time)}
                    </td>
                    <td className="border-t-[0.6px] border-[#D5D5D5] py-3 px-2 font-nunito font-semibold text-[14px] text-[#202224]">
                      {job.End_Date_Time
                        ? handleFormatData(job.End_Date_Time)
                        : "-"}
                    </td>
                    <td className="border-t-[0.6px] border-[#D5D5D5] py-3 px-2 font-nunito font-semibold text-[14px]">
                      <button
                        className={`font-nunito font-bold text-[12px] px-3 py-1 rounded-[5px] min-w-[100px] ${
                          job.Status === 0
                            ? "text-[#6226EF] bg-[#e0d4fc]"
                            : job.Status === 1
                            ? "text-[#00B69B] bg-[#ccf0eb]"
                            : "text-[#EF3826] bg-[#fcd7d4]"
                        }`}
                      >
                        {job.Status === 0
                          ? "Started"
                          : job.Status === 1
                          ? "Completed"
                          : "Canceled"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="border-t-[0.6px] border-[#D5D5D5] py-3 px-2 font-nunito font-semibold text-[14px] text-[#202224] text-center"
                  >
                    No recent jobs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
