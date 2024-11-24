import express from "express";
// import mongoose from "mongoose";
import connectDB from "./db/connectdb.js";

const app = express();
const port = process.env.PORT || 3000;

/* mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
  console.log("connnected successfully");
}); */

// database connection
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";
connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
