import express from "express";
const router = express.Router();

// ALL TEACHERS ROUTES
router.get("/all", (req, res) => {
  res.send("All teachers");
});
router.post("/create", (req, res) => {
  res.send("New created");
});
router.put("/update", (req, res) => {
  res.send("Teacher updated");
});

export default router;
