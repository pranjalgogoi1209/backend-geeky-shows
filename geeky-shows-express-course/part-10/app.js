import express from "express";
import home from "./routes/home.js";
import about from "./routes/about.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(home);
app.use(about);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
