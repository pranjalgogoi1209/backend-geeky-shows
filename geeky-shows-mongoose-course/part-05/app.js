import express from "express";
import {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocBySpecificField,
  getLimitedDoc,
  getSkipDoc,
  getDocCount,
  getSortDoc,
  mixDoc,
  compDoc,
  logDoc,
} from "./models/TeacherModel.js";

import connectDb from "./db/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectDb(DATABASE_URL);

// getAllDoc();
// getAllDocSpecificField();
// getSingleDoc();
// getSingleDocSpecificField();
// getDocByField();
// getDocBySpecificField();
// getLimitedDoc();
// getSkipDoc();
// getDocCount();
// getSortDoc();
// mixDoc();
// compDoc();
logDoc();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
