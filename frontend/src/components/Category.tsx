import { useEffect, useState } from "react";
import { Sub_Notes } from "./Sub_Notes";
import { Title } from "./Title";
import useSWR from "swr";

type IconTypes = {
  name: string;
  selectedIconIndex: number | undefined;
  selectedColor: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Category = () => {  
  const [newCategories, setNewCategories] = useState<IconTypes[]>([]);
  const { data, error } = useSWR(
    "http://localhost:8000/category/getAllCategories",
    fetcher
  );

  useEffect(() => {  
    if (data) {
      setNewCategories(data.data);
    }
  }, [data]);

  if (error) {
    console.log(error);
    return <div>Error loading categories</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[250px] h-fit flex flex-col gap-4">
      <div className="flex justify-between w-full h-[32px] items-center">
        <Title name="Category" />
        <button className="w-[61px] h-[32px]" style={{ borderRadius: "20px" }}>
          clear
        </button>
      </div>
      {newCategories.map((icon: IconTypes, i: number) => {
        return (
          <Sub_Notes
            key={i}
            selectedColor={icon.selectedColor}
            selectedIconIndex={icon.selectedIconIndex}
            name={icon.name}
          />
        );
      })}
    </div>
  );
};
