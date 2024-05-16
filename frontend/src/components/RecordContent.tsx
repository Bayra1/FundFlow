import {
  ControlDateButton,
  DropDownRecord,
  SelectAllRecords,
  TodayNotes,
  YesterDayNotes,
} from "./index";

export const RecordContent = () => {
  return (
    <main className="w-[894px] h-fit">
      <section className="flex justify-between flex-row w-full h-fit items-center">
        <ControlDateButton />
        <DropDownRecord />
      </section>
      <SelectAllRecords />
      <TodayNotes />
      <YesterDayNotes />
    </main>
  );
};
