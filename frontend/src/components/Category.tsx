import { Sub_Notes } from "./Sub_Notes";
import { Title } from "./Title";

export const Category = () => {
  return (
    <div className="w-[250px] h-[520px] flex flex-col gap-4">
      <div className="flex justify-between w-full h-[32px] items-center">
        <Title name="Category" />
        <button className="w-[61px] h-[32px]" style={{ borderRadius: "20px" }}>
          clear
        </button>
      </div>
      <Sub_Notes name="Food & Drinks" />
      <Sub_Notes name="Food & Drinks" />
      <Sub_Notes name="Food & Drinks" />
      <Sub_Notes name="Food & Drinks" />
      <Sub_Notes name="Food & Drinks" />      
      <Sub_Notes name="Food & Drinks" />      
      <Sub_Notes name="Food & Drinks" />      
      <Sub_Notes name="Food & Drinks" />      
      <Sub_Notes name="Food & Drinks" />      
      <Sub_Notes name="Food & Drinks" />      
    </div>
  );
};
