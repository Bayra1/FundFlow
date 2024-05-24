import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DoughnutSetsData } from "./utils";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const DoughnutChart = () => {
  const data = {
    labels: ["Income", "Expenses", "test", "a", "b"],
    datasets: DoughnutSetsData,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <main
      className="w-[588px] h-[382px] bg-white flex flex-col"
      style={{ borderRadius: "18px" }}
    >
      <section
        className="w-full h-[56px] flex flex-row gap-[8px] items-center"
        style={{
          padding: "16px 24px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#E2E8F0",
        }}
      >
        <span className="text-black font-semibold text-base leading-6">
          - Expense
        </span>
      </section>
      <div className="w-full h-full flex flex-row gap-8">
        <section className="w-[50%] h-full p-8">
          <Doughnut data={data} options={options as any} />
        </section>

        <section className="w-1/3 flex flex-col mt-[70px] gap-5">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center mb-2">
              <div
                className="w-4 h-4 mr-2 rounded-full"
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                }}
              />
              <div className="flex flex-row gap-3">
                <span className="leading-5 w-[100px] h-[20px] font-normal text-black">
                  {label}
                </span>
                <span className="h-[20px] leading-5 font-normal text-black">
                  -{data.datasets[0].data[index]}$
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
