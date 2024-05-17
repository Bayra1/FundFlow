"use client";
import {
  AddCategoryModel,
  AddRecordModel,
  AsideRecords,
  NavBar,
  RecordContent,
} from "@/components";
import { useState } from "react";

export const Records = () => {
  const [model, setModel] = useState(false);
  const [categoryModel, setCategoryModel] = useState(false)

  const ToggleModel = () => {
    setModel((preV) => !preV);
  };

  const handleCategoryModel = () => {
    setCategoryModel((preV) => !preV)
  }



  return (
    <div className="w-full h-fit flex bg-[#F3F4F6] flex-col items-center">
      <NavBar />
      <div className="w-[1200px] h-fit flex flex-row gap-5 mt-[20px]">
        <AsideRecords handleCategoryModel={handleCategoryModel} ToggleModel={ToggleModel} />
        <RecordContent />
      </div>
      {model && <AddRecordModel ToggleModel={ToggleModel}/>}
      {/* {categoryModel && <AddCategoryModel handleCategoryModel={handleCategoryModel}/>} */}
      <AddCategoryModel handleCategoryModel={handleCategoryModel}/>
      {/* <AddRecordModel ToggleModel={ToggleModel}/> */}
    </div>
  );
};
