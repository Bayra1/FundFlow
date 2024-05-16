import { RecordNotes, Title } from "./index";

export const YesterDayNotes = () => {
  return (
    <div className="flex w-full flex-col mt-[20px]">
      <Title name="YesterDay" />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
    </div>
  );
};
