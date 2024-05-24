type Category = {
  name: string;
  selectedColor: string;
  selectedIconIndex: number;
};

export type TransactionType = {
  _id: any;
  amount: string;
  categoryId: Category;
  date: string;
  description: string;
  paymentBy: string;
  time: string;
  transaction_type: string;
  userId: string;
};
