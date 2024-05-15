import { WhiteHouse } from "./icons";
import { BlueCircle } from "./icons/BlueCircle";

export const IncomeSymbol = () => {
  return (
    <div className="relative">
      <div>
        <BlueCircle />
      </div>
      <div className="absolute top-[10px] left-[12px]">
        <WhiteHouse />
      </div>
    </div>
  );
};
