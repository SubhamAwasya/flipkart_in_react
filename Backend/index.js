import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";

// app config

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Connected to DB successfully !");
    })
    .catch((err) => {
      throw err;
    });
};

mongoose.set("strictQuery", false);

const isLive = true;

// middlewares;
app.use(
  cors({
    origin: isLive
      ? "https://flipkart-in-react.vercel.app"
      : "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// check if server is running
app.get("/islive", (req, res) => {
  res.send("Hello World!");
});

// routes
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  connect();
  console.log("Server listening on port :", process.env.PORT);
});
