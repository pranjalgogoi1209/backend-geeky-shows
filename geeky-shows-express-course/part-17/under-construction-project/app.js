import express from "express";
import web from "./routes/web.js";
import underConstruction from "./middlewares/uc-middleware.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

// application level middleware
app.use("/about", underConstruction);

app.use(web);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
