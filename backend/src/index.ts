import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouters from "./routes/users";
import authRouters from "./routes/auth";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);
app.listen(4000, () => {
  console.log("server running on port 4000...");
});
