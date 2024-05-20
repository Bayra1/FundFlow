"use client";
import { LastRecords, NavBar, TotalBarCharts, WholeCards } from "@/components";

export const Dashboard = () => {
  return (
    <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center">
      <NavBar />
      <WholeCards />
      <TotalBarCharts />
      <LastRecords />
    </div>
  );
};
