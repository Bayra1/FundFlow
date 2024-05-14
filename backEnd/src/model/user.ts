import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  avatar: String,
});

const userModel = mongoose.model("users", UserSchema);

export { userModel };
