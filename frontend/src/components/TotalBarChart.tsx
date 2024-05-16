import { BarChart, DoughnutChart } from "@/components";

export const TotalBarCharts = () => {
  return (
    <div className="w-[1200px] mt-[20px] flex justify-between flex-row">
      <BarChart />
      <DoughnutChart />
    </div>
  );
};
