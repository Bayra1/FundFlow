import { usePathname } from "next/navigation";
import { GuideButton } from "./GuideButton";
import { CubeIcon, Plus } from "./icons";
import { useRouter } from "next/navigation";

export const NavBar = ({ ToggleModel }: { ToggleModel: () => void }) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <main
      style={{ padding: "16px 120px 16px 120px" }}
      className="w-full flex justify-between h-[72px] bg-white"
    >
      <section className="flex flex-row gap-2 items-center">
        <CubeIcon />
        <GuideButton navigateTo="/Dashboard" name="Dashboard" />
        <GuideButton navigateTo="/Record" name="Record" />
      </section>

      <section className="flex flex-row gap-2 items-center">
        <button
          onClick={() => {
            if (pathName !== "/Record") {
              router.push("/Record");
            } else {
              ToggleModel();
            }
          }}
          className="flex flex-row gap-2 items-center bg-[#0166FF] p-[15px] rounded-2xl"
        >
          <Plus />
          <span className="text-white font-semibold text-base">Record</span>
        </button>
        <div className="avatar" style={{ width: "50px", height: "50px" }}>
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </section>
    </main>
  );
};
