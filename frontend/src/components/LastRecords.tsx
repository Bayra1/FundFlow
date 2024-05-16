import { Notes } from "./Notes";

export const LastRecords = () => {
  return (
    <section className="w-[1200px] mt-[20px] bg-white h-[456px] rounded-xl">
      <div
        className="w-full h-[56px]"
        style={{
          padding: "16px 24px 16px 24px",
          borderStyle: "solid",
          borderBottomWidth: "2px",
          borderColor: "#E2E8F0",
        }}
      >
        <span className="text-base leading-6 font-semibold text-black">
          Last Records
        </span>
      </div>
      <div className="w-full" style={{ padding: "0px 24px 0px 24px" }}>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
        <Notes/>
      </div>
    </section>
  );
};
