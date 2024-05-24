import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Labels, IncomeBar, ExpenseBar } from "./utils/index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const labels = Labels;
  const data = {
    labels: labels,
    datasets: [IncomeBar, ExpenseBar],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },       
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <main
      className="w-[588px] h-fit bg-white flex flex-col"
      style={{ borderRadius: "18px" }}
    >
      <section
        className="w-full h-[56px] flex flex-row gap-[8px] items-center"
        style={{
          padding: "16px 24px 16px 24px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#E2E8F0",
        }}
      >
        <span className="text-black font-semibold text-base leading-6">
          Income - Expense
        </span>
      </section>
      <section className="w-full p-8">
        <Bar data={data} options={options as object} />
      </section>
    </main>
  );
};
