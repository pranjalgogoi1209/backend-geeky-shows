import express from "express";
import connectDB from "./db/connectDb.js";
import {
  deleteDocById,
  deleteOneDoc,
  delelteManyDoc,
} from "./models/TeacherModel.js";

const app = express();
const port = process.env.PORT || 3000;

const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";
connectDB(DB_URL);

// deleteDocById("67461d546abacf174741959a");
// deleteOneDoc("67461be59681ea0e665b5294");
delelteManyDoc();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
