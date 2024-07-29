import express from "express";
import homePage from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// load routes
app.use(homePage);

// set template engine
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
