import { FirstCard, SecondCard, ThirdCard } from "@/components";

export const WholeCards = () => {
  return (
    <div className="w-[1200px] mt-[20px] flex justify-between flex-row">
      <FirstCard />
      <SecondCard />
      <ThirdCard/>
    </div>
  );
};
