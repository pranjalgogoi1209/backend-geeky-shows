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

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
