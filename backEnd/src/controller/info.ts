import { Request, Response } from "express";
import { InfoModel } from "../model";

const createInfo = async (req: Request, res: Response) => {
  try {
    const response = await InfoModel.create({
      ...req.body,
    });
    return res.status(201).json({
      success: true,
      message: "set up is successfully made",
    });
  } catch (error) {
    console.error("Error during Creating info:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { createInfo };
