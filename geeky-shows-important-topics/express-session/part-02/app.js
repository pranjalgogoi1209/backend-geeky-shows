import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

import connectDb from "./db/connectDb.js";
import webRouter from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// db connection
const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";
connectDb(DB_URL);

// MongoDB session
const sessionStorage = MongoStore.create({
  mongoUrl: DB_URL,
  dbName: "schooldb",
  collectionName: "sessions",
  ttl: 14 * 24 * 60 * 60,
  autoRemove: "native",
});

// session
app.use(
  session({
    name: "pranjal_session",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
    store: sessionStorage,
  })
);

// load routes
app.use(webRouter);

app.listen(port, () => {
  console.log("server is running on port 3000");
});
