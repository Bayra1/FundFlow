import { RecordNotes, Title } from "./index";

export const TodayNotes = () => {
  return (
    <div className="flex flex-col mt-[20px]">
      <Title name="Today" />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
      <RecordNotes />
    </div>
  );
};
