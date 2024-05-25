import { useContext, useEffect, useState } from "react";
import { Sub_Notes } from "./Sub_Notes";
import { Title } from "./Title";
import useSWR from "swr";
import { LoadingPage } from "./Loading/Loading";
import { TransactionContext } from "./context/allTransactions";
import { TransactionType } from "./Interface";

type IconTypes = {
  name: string;
  selectedIconIndex: number | undefined;
  selectedColor: string;
  _id: string;
};

type CategoryResponse = {
  data: IconTypes[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Category = () => {
  const [newCategories, setNewCategories] = useState<IconTypes[]>([]);
  const [dropdownStates, setDropdownStates] = useState<Record<number, boolean>>(
    {}
  );

  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "Category must be used within a TransactionContextProvider"
    );
  }

  const { filteredData } = transContext;

  const { data, error } = useSWR<CategoryResponse>(
    "http://localhost:8000/category/getAllCategories",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setNewCategories(data.data);
    }
  }, [data]);

  if (error) {
    console.error(error);
    return <div>Error loading categories</div>;
  }

  if (!data) {
    return <LoadingPage />;
  }

  const toggleDropdown = (index: number) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  const DisplayNumberTransForSelCate = (iconId: string) => {
    const filteredDataforCategory = filteredData?.filter(
      (item: TransactionType) => item.categoryId._id === iconId
    );
    return filteredDataforCategory?.length ?? 0;
  };

  return (
    <div className="w-[250px] h-fit flex flex-col gap-4">
      <div className="flex justify-between w-full h-[32px] items-center">
        <Title name="Category" />
      </div>
      {newCategories.map((icon, i) => (
        <div key={icon._id} className="w-full">
          <button onClick={() => toggleDropdown(i)} className="w-full h-full hover:scale-110 duration-300 ease-in-out">
            <Sub_Notes
              selectedColor={icon.selectedColor}
              selectedIconIndex={icon.selectedIconIndex}
              name={icon.name}
            />
          </button>
          {dropdownStates[i] && (
            <div className="w-full h-full flex flex-row font-light gap-1 text-black">
              <span>{DisplayNumberTransForSelCate(icon._id)}</span>
              {DisplayNumberTransForSelCate(icon._id) <= 1
                ? "transaction for this category"
                : "transactions for this category"}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
