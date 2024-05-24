import { SelectAllRecords, TodayNotes, YesterDayNotes } from "./index";

export const RecordContent = () => {
  return (
    <main className="w-[894px] h-fit pb-4">
      <SelectAllRecords />
      <TodayNotes />
      <YesterDayNotes />
    </main>
  );
};
