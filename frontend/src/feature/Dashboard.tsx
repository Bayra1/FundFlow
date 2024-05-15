import { LastRecords, NavBar, WholeCards } from "@/components";

export const Dashboard = () => {
  return (
    <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center">
      <NavBar />
      <WholeCards />
      <LastRecords/>
    </div>
  );
};
