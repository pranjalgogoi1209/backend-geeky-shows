import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// example 1 of route parameter
app.get("/student/delete/:id", (req, res) => {
  if (req.params.id === String(2)) {
    res.send(`Student deleted ${req.params.id}`);
  } else {
    res.send(`Student not deleted ${req.params.id}`);
  }
});

// example 2 of route parameter
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  if (category === "aloo") {
    if (id === String(2)) {
      res.send(`${id} no. ${category} deleted`);
    } else {
      res.send(`${id} no. ${category} not deleted`);
    }
  } else {
    res.send(`${id} no. ${category} not deleted`);
  }
});

// example 3 of route parameter
app.get("/product/order/:year/and/:month", (req, res) => {
  const { year, month } = req.params;
  res.send(`year-${year} , month-${month}`);
});

// example 4 of route parameter
app.get("/train/:from-:to", (req, res) => {
  const { from, to } = req.params;
  res.send(`from-${from} , to-${to}`);
});

// example 4 of route parameter
app.get("/train/:from.:to", (req, res) => {
  const { from, to } = req.params;
  res.send(`from-${from} , to-${to}`);
});

// with regx
app.get("/teacher/delete/:id([0-9]{2})", (req, res) => {
  res.send(`teacher deleted ${req.params.id}`);
});

app.get("/:type(post|article)/:id([0-9]{2})", (req, res) => {
  const { type, id } = req.params;
  res.send(`type ${type} - id ${id}`);
});

// app.param()
// 1st it will run
app.param("id", (req, res, next, id) => {
  console.log(`ID: ${id}`);
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
  res.send("id page");
});

// query string
// http://localhost:3000/product?category=mobile
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`Product page ${req.query.category}`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
