import express from "express";
import cookieParser from "cookie-parser";

import webRouter from "./routes/web.js";

const app = express();

// cookie-parser
app.use(cookieParser());

// load routes
app.use(webRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
