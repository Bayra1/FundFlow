export const FetchTodayTransactions = async () => {
  const response = await fetch(
    "http://localhost:8000/transaction/getTodayTransaction"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  
  const data = await response.json();
  return data.data;
};
