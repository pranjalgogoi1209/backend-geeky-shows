// Routing

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Routes

app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

/* app.all("/sabkuch", (req, res) => {
  res.send("ALL REQUEST");
}); */

app.all("*", (req, res) => {
  res.send("page not found !!!");
});

app.all("/api/*", (req, res) => {
  res.send("page not found !!!");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
