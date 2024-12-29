import Chart from "react-apexcharts";

export const TotalQty = () => {
  const chartData = [10, 20, 30, 40, 50]; // Sample data
  const chartLabels = [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
  ];

  const chartConfig = {
    series: chartData,
    options: {
      chart: {
        type: "donut",
        height: "100%",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Poppins",
                fontWeight: 600,
                color: "#263238",
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: 400,
                color: "#263238",
                offsetY: 10,
              },
              total: {
                show: true,
                showAlways: true,
                label: "1,234",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#222529",
                formatter: function (w) {
                  // Custom text for the middle of the chart
                  return "$100,000.00";
                },
              },
            },
          },
        },
      },
      labels: chartLabels,
      dataLabels: {
        enabled: false,
      },
      colors: ["#62B2FD", "#9BDFC4", "#F99BAB", "#FFB44F", "#9F97F7"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
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
      fill: {
        type: "solid",
      },
      tooltip: {
        theme: "dark",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="h-full rounded-[20px] w-full md:mb-0 mb-5 pt-3 bg-white">
      <div className="flex flex-col py-3">
        <div className="md:flex md:justify-between w-auto px-6 pb-4">
          <h3 className="font-poppins font-semibold text-[16px] leading-[24px] text-[#64728C]">
            Total Quantity
          </h3>
        </div>
        <div className="flex items-start border-t px-6 pt-4">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="donut"
            height={300}
          />
          <div className="flex flex-col gap-5 pt-10">
            <div className="flex items-center gap-3">
              <div className="w-[8px] aspect-square bg-[#62B2FD] rounded-full"></div>
              <div className="font-poppins text-[12px] font-bold text-[#2A2E33]">
                50,000
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[8px] aspect-square bg-[#9BDFC4] rounded-full"></div>
              <div className="font-poppins text-[12px] font-bold text-[#2A2E33]">
                50,000
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[8px] aspect-square bg-[#F99BAB] rounded-full"></div>
              <div className="font-poppins text-[12px] font-bold text-[#2A2E33]">
                50,000
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[8px] aspect-square bg-[#FFB44F] rounded-full"></div>
              <div className="font-poppins text-[12px] font-bold text-[#2A2E33]">
                50,000
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[8px] aspect-square bg-[#9F97F7] rounded-full"></div>
              <div className="font-poppins text-[12px] font-bold text-[#2A2E33]">
                50,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
