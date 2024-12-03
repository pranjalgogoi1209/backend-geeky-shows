import express from "express";
import session from "express-session";

import webRouter from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// session
app.use(
  session({
    name: "pranjal_session",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 200000 },
  })
);

// load routes
app.use(webRouter);

app.listen(port, () => {
  console.log("server is running on port 3000");
});
