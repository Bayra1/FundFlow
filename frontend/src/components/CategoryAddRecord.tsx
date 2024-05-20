import { useEffect, useState } from "react";
import { AddIcon, ArrowDown } from "./icons";
import useSWR from "swr";
import { SelectedIconComp } from "./SelectedIcon";

type Category = {
  name: string;
  selectedIconIndex: number | undefined;
  selectedColor: string;
};

const fetchCategories = async () => {
  const response = await fetch(
    "http://localhost:8000/category/getAllCategories"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await response.json();
  return data.data;
};

export const CategoryAddRecord = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const { data, error } = useSWR("categories", fetchCategories);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  if (error) return <div>Error loading categories</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-full h-[76px] gap-1">
      <span className="text-base font-normal text-[#171717]">Category</span>
      <details className="dropdown">
        <summary
          className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-full h-[48px]"
          style={{ borderColor: "#D1D5D8" }}
        >
          {selectedCategory ? (
            <div className="flex flex-row gap-3 items-center">
              <SelectedIconComp
                propColor={selectedCategory.selectedColor}
                propIndex={selectedCategory.selectedIconIndex ?? 0}
              />
              {selectedCategory.name}
            </div>
          ) : (
            <span>Find or choose Category</span>
          )}
          <ArrowDown />
        </summary>
        <div className="overflow-y-auto h-[200px]">
          <ul className="p-0 flex flex-col gap-2 shadow menu dropdown-content z-[1] rounded-box w-[356px] bg-white">
            <li style={{ borderBottom: "1px solid #E5E5E5", padding: "10px" }}>
              <a className="leading-6 font-semibold text-base text-[#1F2937]">
                <AddIcon />
                Add Category
              </a>
            </li>
            {categories.map((category, index) => (
              <li key={index} className="p-[10px]">
                <a
                  className="text-black flex flex-row gap-3"
                  onClick={() => handleCategorySelect(category)}
                >
                  <SelectedIconComp
                    propIndex={category.selectedIconIndex ?? 0}
                    propColor={category.selectedColor}
                  />
                  <span className="text-black font-normal leading-6">
                    {category.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};
