import express from "express";
import createAdmissionDoc from "./models/admissionModel.js";
import bodyParser from "body-parser";

import connectDb from "./db/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/schooldb";

connectDb(DATABASE_URL);

// POST API
app.post("/", (req, res) => {
  console.log("Received request body:", req.body);

  // Data from the client (replace with actual data processing)
  const data = {
    name: req.body.name || "Sharshti Kumari",
    age: req.body.age || 13,
    previousClass: req.body.previousClass || "Seven",
    previousClassScore: req.body.previousClassScore || 560,
  };

  // Create a new document
  createAdmissionDoc(data);

  // Send a success response
  res.status(201).json({
    message: "Admission document created successfully!",
    data: data,
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
