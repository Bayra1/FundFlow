export const GetAllTransactions = async () => {
  const response = await fetch(
    "http://localhost:8000/transaction/getAllTransactions"
  );

  if (!response.ok) {
    console.error("it might be that there is no data or something else");
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data.data;
};
