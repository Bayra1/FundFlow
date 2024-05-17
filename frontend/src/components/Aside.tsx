import {
  AddCategoryButton,
  AmountRange,
  ButtonWithTitle,
  Category,
  SearchInput,
  Types,
} from "./index";

type propsType = {
  ToggleModel: () => void;
  handleCategoryModel: () => void;
};

export const AsideRecords = ({ ToggleModel, handleCategoryModel }: propsType) => {
  return (
    <main
      className="w-[282px] h-fit bg-[#F9FAFB] flex flex-col gap-[24px]"
      style={{
        padding: "24px 16px 14px 16px",
        borderRadius: "12px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E5E7EB",
      }}
    >
      <ButtonWithTitle ToggleModel={ToggleModel}/>
      <SearchInput />
      <Types />
      <Category />
      <AddCategoryButton handleCategoryModel={handleCategoryModel} />
      <AmountRange />
    </main>
  );
};
