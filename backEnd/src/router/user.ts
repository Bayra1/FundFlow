import express from "express";
import {
  LogIn,
  SignUp,
  getAllUsers,
  getUserWithInfo,
} from "../controller/user";

export const user = express.Router();

user.route("/postUser").post(SignUp);
user.route("/getAllUsers").get(getAllUsers);
user.route("/logIn").post(LogIn);
user.route("/userWithInfo").get(getUserWithInfo);
