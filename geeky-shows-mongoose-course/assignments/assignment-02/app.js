import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDb from "./db/connectDb.js";
import addNewStudentRouter from "./routes/addNewStudent.js";
import getAllNewStudentsRouter from "./routes/getAllNewStudents.js";
import updateNewStudentRouter from "./routes/updateNewStudent.js";
import deleteNewStudentRouter from "./routes/deleteNewStudent.js";

const app = express();
const port = process.env.PORT || 3001;

const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/crud";
connectDb(DB_URL);

app.use(bodyParser.json());
app.use(cors());

// add new student
app.use(addNewStudentRouter);

// get all new students
app.use(getAllNewStudentsRouter);

// update new student
app.use(updateNewStudentRouter);

// delete new student
app.use(deleteNewStudentRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
