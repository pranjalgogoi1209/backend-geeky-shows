import express from "express";
import connectDb from "./db/connectDb.js";
import {
  updateDocById,
  updateOneDoc,
  updateManyDoc,
} from "./models/TeacherModel.js";

const app = express();
const port = process.env.PORT || 3000;

const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectDb(DB_URL);

// updateDocById("67460b083dc33910dab93a3e");

// updateOneDoc("67460b4feacf51b37aa36a19");
updateManyDoc();

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
