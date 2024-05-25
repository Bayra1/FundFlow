import { BluePlus } from "./icons";

type propsType = {
  handleCategoryModel: () => void;
};

export const AddCategoryButton = ({ handleCategoryModel }: propsType) => {
  return (
    <button
      onClick={handleCategoryModel}
      className="w-full h-[32px] gap-2 flex flex-row justify-center items-center hover:rounded-full hover:bg-slate-400 transition-transform transform active:scale-95 hover:scale-110 duration-300 ease-in-out "
      style={{ borderRadius: "8px" }}
    >
      <BluePlus />
      <span className="text-base leading-6 font-normal text-[#1F2937]">
        Add Category
      </span>
    </button>
  );
};
