import React, { useContext, useEffect, useState } from "react";
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
import { TransactionContext } from "./context/allTransactions";
import options from "./utils/BarChart/Options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const transContext = useContext(TransactionContext);
  const [inc_ExpData, setInc_ExpData] = useState<any[]>([]);

  if (!transContext) {
    throw new Error(
      "Category must be used within a TransactionContextProvider"
    );
  }

  const { filteredData } = transContext;

  useEffect(() => {
    const desiredData = filteredData?.filter((item) => {
      return item.transaction_type && item.amount && item.date;
    });

    setInc_ExpData(desiredData || []);
  }, [filteredData]);

  const monthTotals: {[key: string]: {income: number, expense: number}} = {};

  inc_ExpData.forEach((item) => {
    const date = new Date(item.date);
    const month = date.getMonth();
    const amount = Number(item.amount);

    if (!monthTotals[month]) {
      monthTotals[month] = { income: 0, expense: 0 };
    }

    if (item.transaction_type === "INC") {
      monthTotals[month].income += amount;      
    } else if (item.transaction_type === "EXP") {
      monthTotals[month].expense += amount;
    }
  });

  const incomeData = Object.values(monthTotals).map((total) => total.income);
  const expenseData = Object.values(monthTotals).map((total) => total.expense);

  const monthLabels = Object.keys(monthTotals).map((monthNumber) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[parseInt(monthNumber)];
  });


  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: expenseData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
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



