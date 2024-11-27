import express from "express";
import { getAllDoc, getAllDocSpecificField } from "./models/TeacherModel.js";

import connectDb from "./db/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectDb(DATABASE_URL);

getAllDoc();
getAllDocSpecificField();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
