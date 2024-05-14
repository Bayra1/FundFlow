import { Request, Response } from "express";
import { InfoModel } from "../model";

const createInfo = async (req: Request, res: Response) => {
  try {
    const response = await InfoModel.create({
      ...req.body,
    });
    res.status(201).send({
      success: true,
      response,
    });
  } catch (error) {
    console.error(error);
  }
};

export { createInfo };
