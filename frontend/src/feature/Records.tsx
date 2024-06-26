"use client";
import {
  AddCategoryModel,
  AddRecordModel,
  AsideRecords,
  NavBar,
  RecordContent,
} from "@/components";
import { UserWithInfoContextProvider } from "@/components/context/user";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export const Records = () => {
  const [model, setModel] = useState(false);
  const [categoryModel, setCategoryModel] = useState(false);

  const ToggleModel = () => {
    setModel((preV) => !preV);
  };

  const handleCategoryModel = () => {
    setCategoryModel((preV) => !preV);
  };

  return (
    <UserWithInfoContextProvider>
      <div className="w-full h-fit flex bg-[#F3F4F6] flex-col items-center">
        <NavBar ToggleModel={ToggleModel} />
        <div className="w-[1200px] h-fit flex flex-row gap-5 mt-[20px]">
          <AsideRecords
            handleCategoryModel={handleCategoryModel}
            ToggleModel={ToggleModel}
          />
          <RecordContent />
        </div>
        {model && <AddRecordModel ToggleModel={ToggleModel} />}
        {categoryModel && (
          <AddCategoryModel handleCategoryModel={handleCategoryModel} />
        )}
        <Toaster position="top-center" />
      </div>
    </UserWithInfoContextProvider>
  );
};
