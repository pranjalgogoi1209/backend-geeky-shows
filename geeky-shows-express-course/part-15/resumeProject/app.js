import express from "express";

import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// set template engine
app.set("view engine", "ejs");

// use static files
app.use(express.static("public"));

// load routes
app.use(web);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
