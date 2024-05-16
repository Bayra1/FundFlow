import { BluePlus } from "./icons";

export const AddCategoryButton = () => {
  return (
    <button
      className="w-[149px] h-[32px] gap-2 flex flex-row justify-center items-center"
      style={{ borderRadius: "8px" }}
    >
      <BluePlus />
      <span className="text-base leading-6 font-normal text-[#1F2937]">
        Add Category
      </span>
    </button>
  );
};
