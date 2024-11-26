import express from "express";

import "./models/Student.js";
import connectDB from "./db/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
