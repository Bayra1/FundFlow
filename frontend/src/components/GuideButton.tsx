"use client";
import { usePathname } from "next/navigation";

type propsType = {
  name: string;
  navigateTo: string;
};
export const GuideButton = ({ name, navigateTo }: propsType) => {
  const pathName = usePathname();
  const exactName = pathName.split("/").pop();
  return (
    <button
      style={{ fontWeight: exactName === name ? 800 : 500 }}
      className=" text-black text-base"
    >
      <a href={navigateTo}>{name}</a>
    </button>
  );
};
