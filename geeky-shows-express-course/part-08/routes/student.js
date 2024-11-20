import express from "express";
const router = express.Router();

// example 1 of route parameter
router.get("/all/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (Number(id) === 21) {
    res.send("Roll No. 21");
  } else res.send("Roll No. not 21");
});

export default router;
