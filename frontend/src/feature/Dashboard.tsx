"use client";
import { Toaster } from "react-hot-toast";
import { LastRecords, NavBar, TotalBarCharts, WholeCards } from "@/components";
import { UserWithInfoContextProvider } from "@/components/context/user";

export const Dashboard = () => {
  return (
    <UserWithInfoContextProvider>
      <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center pb-4">
        <NavBar ToggleModel={() => console.log("a")} />
        <WholeCards />
        <TotalBarCharts />
        <LastRecords />
        <Toaster position="top-center" />
      </div>
    </UserWithInfoContextProvider>
  );
};
