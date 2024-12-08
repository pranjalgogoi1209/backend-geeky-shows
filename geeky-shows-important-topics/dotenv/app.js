import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

// load environment variables
dotenv.config();

const app = express();

const port = process.env.PORT;

// db connection
const DB_URL = process.env.DATABASE_URL;
console.log(DB_URL);

connectDB(DB_URL);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
