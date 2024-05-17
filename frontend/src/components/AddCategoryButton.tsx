import { BluePlus } from "./icons";

type propsType = {
  handleCategoryModel: () => void;
};

export const AddCategoryButton = ({ handleCategoryModel }: propsType) => {
  return (
    <button
      onClick={handleCategoryModel}
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
