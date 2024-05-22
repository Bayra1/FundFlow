export const GetUserWithInfo = async ({ userId }: { userId: string }) => {
  const response = await fetch(
    `http://localhost:8000/user/userWithInfo/${userId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user with the whole information");
  }

  const data = await response.json();
  return data.data;
};
