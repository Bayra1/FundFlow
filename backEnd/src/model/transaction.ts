import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: String,
  
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },

  date: { type: Date, default: Date.now },
  time: { type: Date, default: Date.now },

  paymentBy: {
    type: String,
    enum: ["By Card 💳", "By Cash 💸"],
    default: "By Cash 💸",
  },

  description: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },

  transaction_type: {
    type: String,
    enum: ["INC", "EXP"],
    default: "EXP",
  },
});

const TransactionModel = mongoose.model("transaction", TransactionSchema);

export { TransactionModel };
