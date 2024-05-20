import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bp from "body-parser";
import ConnectToMongoDB from "./utils/database";
import { category, createInformation, user } from "./router/index";

dotenv.config();
ConnectToMongoDB()
  .then(() => console.log("successfully connected to server"))
  .catch((error) =>
    console.log("DataBase Connection is failed to perform", error)
  );

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bp.json());
app.use(cors());
app.use("/user", user);
app.use("/createInformation", createInformation);
app.use("/category", category);

app.get("/", (_, res) => {
  res.status(200).send({
    success: true,
    message: "successfully connected to server bro",
  });
});

app.listen(PORT, () => {
  console.log(`server is runnning on ${PORT}`);
});
