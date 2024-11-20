import express from "express";
import student from "./routes/student.js";
import product from "./routes/product.js";
import train from "./routes/train.js";
import regx from "./routes/regx.js";

const app = express();

const port = process.env.PORT || 3000;

app.use("/product", product);

app.use("/student", student);

app.use("/train", train);

app.use("/regx", regx);

// type could be post or article
app.get("/:type(post|article)/:id([0-9]{2})", (req, res) => {
  const { type, id } = req.params;
  res.send(`type ${type} - id ${id}`);
});

// app.param() => single route parameter
// 1st it will run
// app.param only works for the current app instance or router where it's defined.
app.param("id", (req, res, next, id) => {
  console.log(`APP.PARAMID: ${id}`);
  next();
});

// 2ndly it will run
app.get("/user/:id", (req, res) => {
  console.log("This is User Id path");
  res.send("Response OK");
});

// app.param() => array of route parameter
app.param(["id", "page"], (req, res, next, value) => {
  console.log("value", value);
  next();
});
app.get("/user/:id/:page", (req, res) => {
  console.log("This is User Id and Page path");
  res.send("id page");
});

// query string
// http://localhost:3000/product?category=mobile&id=12
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`Product page ${req.query.category || "no category"}`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
