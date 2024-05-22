"use client";
import { Toaster } from "react-hot-toast";
import { LastRecords, NavBar, TotalBarCharts, WholeCards } from "@/components";
import { useEffect, useState } from "react";
import WarningModal from "@/components/WarningModel";

const currentToken: string | null = localStorage.getItem("token");

export const Dashboard = () => {
  const [token, setToken] = useState<string | null>(currentToken);

  useEffect(() => {
    setToken(currentToken);
  }, []);

  return (
    <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center">
      <NavBar ToggleModel={() => console.log("a")} />
      <WholeCards />
      <TotalBarCharts />
      <LastRecords />
      <Toaster position="top-center" />
      {token ? null : (
        <WarningModal
          name="You have not logged in"
          path="/Login"
          instruction="Back To Login"
        />
      )}
    </div>
  );
};
