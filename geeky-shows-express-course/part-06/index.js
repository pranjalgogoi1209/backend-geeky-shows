import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

// String path
app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});

// String pattern
app.get("/ab?cd", (req, res) => {
  res.send("This route path will match acd and abcd");
});

app.all("*", (req, res) => {
  res.send("ALL REQUEST");
});

// Catch-all route handler for any request that doesn't match the above routes
/* app.use((req, res) => {
  res.status(404).send("page not found !!!");
}); */

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
