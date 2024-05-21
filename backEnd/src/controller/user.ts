import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../model/user";
import { Request, Response } from "express";
import { InfoModel, TransactionModel } from "../model";

const SignUp = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).send({
        success: false,
        message: "User with this email already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).send({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const getAllUsers = async (_: any, res: any) => {
  try {
    const allUsers = await userModel.find();
    return res.status(200).send({
      success: true,
      allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send({
      success: false,
      message: error,
    });
  }
};

const LogIn = async (req: any, res: any) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();

    const user = await userModel.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });

    if (!user)
      return res.status(400).send({
        success: false,
        message: "user with this email does not exist",
      });

    const id = user._id;
    const name = user.name;
    const userEmail = user.email;

    const legitPassword = await bcrypt.compare(password, user?.password!);
    if (!legitPassword)
      return res
        .status(400)
        .send({ success: false, message: "Password does not match" });

    const token = jwt.sign({ id, name, userEmail }, "secret-key", {
      expiresIn: 3600,
    });

    return res.status(200).json({
      success: true,
      message: "successfully logged in",
      token,
    });
  } catch (error) {
    console.error("Error during LogIn:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getUserWithInfo = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const info = await InfoModel.findOne({ userId });
    const transactions = await TransactionModel.find({ userId }).populate(
      "categoryId"
    );

    const userWithInfo = {
      user,
      info,
      transactions,
    };

    return res.status(200).json({
      success: true,
      message: "User with whole info",
      data: userWithInfo,
    });
    
  } catch (error) {
    console.error("Error during getting userWithInfo:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { SignUp, getAllUsers, LogIn, getUserWithInfo };
