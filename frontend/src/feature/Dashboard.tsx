"use client";
import {
  BarChart,
  LastRecords,
  NavBar,
  TotalBarCharts,
  WholeCards,
} from "@/components";
import jwt from "jsonwebtoken";

type decodedTokenType = {
  id: string;
};

export const Dashboard = () => {
  // var currentToken = localStorage.getItem("token");
  // const decodedToken = jwt.decode(currentToken!) as decodedTokenType;
  // console.log(decodedToken, "sss");

  return (
    <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center">
      <NavBar />
      <WholeCards />
      <TotalBarCharts />
      <LastRecords />
    </div>
  );
};
