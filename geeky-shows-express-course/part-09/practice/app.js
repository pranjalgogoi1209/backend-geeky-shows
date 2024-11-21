import express from "express";
import student from "./routes/studentRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/student", student);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
