import express from "express";

const router = express.Router();

// example 4 of route parameter
router.get("/:from-:to", (req, res) => {
  const { from, to } = req.params;
  res.send(`train in going from-${from} , to-${to}`);
});

// example 4 of route parameter
router.get("/:from.:to", (req, res) => {
  const { from, to } = req.params;
  res.send(`train is going from-${from} , to-${to}`);
});

export default router;
