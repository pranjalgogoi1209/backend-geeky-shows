import express from "express";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// load routes
app.use(web);

// set template engine
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
