import express from "express";
import { createDoc, createMultiDoc } from "./models/teacherModel.js";
// import "./models/TeacherModel.js";
import connectDB from "./db/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

// database connection
connectDB(DATABASE_URL);

// create and save document
createDoc(
  "Upama Bora",
  23,
  49000,
  ["Reading", "Eating"],
  true,
  { value: "awesome", publish: new Date() },
  new Date()
);

// create multi doc
createMultiDoc();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
