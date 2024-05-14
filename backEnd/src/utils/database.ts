import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    const MONGODM_URL: string = process.env.MONGODB_URL || "";
    await mongoose.connect(MONGODM_URL);
  } catch (error) {
    console.error(error);
    throw new Error("Error at connecting to MongoDB");
  }
};

export default ConnectToMongoDB;
