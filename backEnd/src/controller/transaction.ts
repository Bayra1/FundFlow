import { Request, Response } from "express";
import { TransactionModel } from "../model/transaction";
import mongoose from "mongoose";

const CreateTransaction = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      categoryId,
      date,
      time,
      paymentBy,
      description,
      userId,
      transaction_type,
    } = req.body;

    if (!amount || !paymentBy || !description) {
      return res.status(400).json({
        success: false,
        message: "Some fields are empty",
      });
    }
    const newTransaction = new TransactionModel({
      amount,
      categoryId: new mongoose.Types.ObjectId(categoryId),
      date,
      time,
      paymentBy,
      description,
      userId: new mongoose.Types.ObjectId(userId),
      transaction_type,
    });

    await newTransaction.save();

    return res.status(201).json({
      success: true,
      message: "record is created prosperously",
    });
  } catch (error) {
    console.error("Error during Creating transaction:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { CreateTransaction };
