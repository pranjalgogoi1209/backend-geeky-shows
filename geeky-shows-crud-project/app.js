import express from "express";
import path from "path";

import connectDb from "./db/connectDb.js";
import webRouter from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// connect db
const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/crud";
connectDb(DB_URL);

// for parsing data
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(process.cwd(), "public")));

// set view engine
app.set("view engine", "ejs");

// load routes
app.use("/student", webRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
