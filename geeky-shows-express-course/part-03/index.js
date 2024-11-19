// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Pranjal Gogoi Test 15!");
});

app.listen(port, "localhost", () => {
  console.log(`Example app listening on port ${port}`);
});
