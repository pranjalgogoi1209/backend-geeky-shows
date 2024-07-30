import express from "express";

import homePage from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// load routes
app.get(homePage);

// set ejs middleware
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
