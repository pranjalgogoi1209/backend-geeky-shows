import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";

const app = express();
const port = process.env.PORT || 3000;

// Load Router modules
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(port, () => {
  console.log(`http://localhost:3000`);
});
