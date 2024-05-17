import React from "react";
import { AddRecordLeftSide, AddRecordRightSide, CloseModel } from "./index";

type propsType = {
  ToggleModel: () => void;
};

export const AddRecordModel = ({ ToggleModel }: propsType) => {
  return (
    <main
      className="w-screen absolute top-0 h-screen flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <section
        className="w-[792px] h-[512px] flex flex-col bg-white rounded-xl shadow-lg"
        style={{ border: "1px solid #ccc" }}
      >
        <CloseModel name="Add Records" ToggleModel={ToggleModel} />
        <main className="w-full h-full flex flex-row">
          <AddRecordLeftSide />
          <AddRecordRightSide />
        </main>
      </section>
    </main>
  );
};
