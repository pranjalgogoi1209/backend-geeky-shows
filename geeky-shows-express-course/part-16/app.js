import express from "express";
import web from "./routes/web.js";
import myLogger from "./middlewares/logger-middleware.js";
import student from "./routes/student.js";

const app = express();
const port = process.env.PORT || 3000;

// set template engine
app.set("view engine", "ejs");

// application level middleware => this middleware will run for every page request.
// app.use(myLogger);

// now it will run for only about page and also run for after about  /about/anything
app.use("/about", myLogger);

// load routes
app.use(web);
app.use(student);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
