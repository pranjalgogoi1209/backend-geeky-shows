import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import employeeRouter from "./routes/web.js";

// load environment variables
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// db connection
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);

// for parsing data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// load routes
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
