import express from "express";
import connectDB from "./db/connectDB.js";
import router from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// set template engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// load routes
app.use(router);

const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/auth";
connectDB(DB_URL);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
