import express from "express";
const router = express.Router();

// ALL STUDENTS ROUTES
router.get("/all", (req, res) => {
  res.send("All students");
});
router.post("/create", (req, res) => {
  res.send("New student created");
});
router.put("/update", (req, res) => {
  res.send("Student updated");
});

export default router;
