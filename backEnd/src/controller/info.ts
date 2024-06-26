import { Request, Response } from "express";
import mongoose from "mongoose";
import { InfoModel } from "../model";
import jwt from "jsonwebtoken";

const createInfo = async (req: Request, res: Response) => {
  try {
    const { currency, budget, readiness, userId } = req.body;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid req or no userId",
      });
    }

    if (!currency || !budget || readiness === undefined) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const existingInfo = await InfoModel.findById({ userId });
    if (!existingInfo) {
      return res.status(409).json({
        success: false,
        message: "user already has existing information",
      });
    }

    const newInfo = new InfoModel({
      currency,
      budget,
      readiness,
      userId: new mongoose.Types.ObjectId(userId),
    });

    await newInfo.save();
    const InfoToken = jwt.sign({ newInfo }, "secret-key", {
      expiresIn: 3600,
    });

    return res.status(201).json({
      success: true,
      message: "Set up is successfully made",
      data: newInfo,
      token: InfoToken,
    });
  } catch (error) {
    console.error("Error during Creating info:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAllInfo = async (_: Request, res: Response) => {
  try {
    const getWholeInfo = await InfoModel.find().populate("userId");

    return res.status(200).json({
      success: true,
      message: "This is whole info",
      data: getWholeInfo,
    });
  } catch (error) {
    console.error("Error during getting infos:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { createInfo, getAllInfo };
