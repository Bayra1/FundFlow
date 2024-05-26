"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SubTitleForDoChart } from "./SubTitleForDoChart";
// Corrected import path
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "./context/allTransactions";
import { options } from "./utils/Doghnut";
import { generateColors } from "./function";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const DoughnutChart = () => {
  const transContext = useContext(TransactionContext);
  const [dataOf_Cat_Trans, setDataOf_Cat_Trans] = useState<any[]>([]);

  if (!transContext) {
    throw new Error(
      "Category must be used within a TransactionContextProvider"
    );
  }

  const { filteredData } = transContext;

  useEffect(() => {
    const desiredData = filteredData?.filter((item) => {
      return (
        item.transaction_type === "EXP" &&
        item.amount &&
        item.categoryId.name &&
        item.categoryId.selectedColor
      );
    });

    setDataOf_Cat_Trans(desiredData || []);
  }, [filteredData]);

  const DoughnutSetsData = [
    {
      data: dataOf_Cat_Trans.map((item) => item.amount),
      backgroundColor: generateColors(dataOf_Cat_Trans.length),
      borderColor: generateColors(dataOf_Cat_Trans.length),
      borderWidth: 1,
    },
  ];

  const labels = dataOf_Cat_Trans.map((item) => item.categoryId.name);

  const data = {
    // labels:labels,
    datasets: DoughnutSetsData,
  };

  return (
    <main
      className="w-[588px] h-[382px] bg-white flex flex-col"
      style={{ borderRadius: "18px" }}
    >
      <SubTitleForDoChart />
      <div className="w-full h-full flex flex-row gap-8">
        <section className="w-[50%] h-full p-8">
          <Doughnut data={data} options={options as any} />
        </section>

        <section className="w-1/3 flex flex-col mt-3 gap-5">
          {labels.map((label, index) => (
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
