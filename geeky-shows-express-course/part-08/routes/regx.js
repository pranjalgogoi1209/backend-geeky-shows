import express from "express";

const router = express.Router();

// with regx
router.get("/:id([0-9]{2})", (req, res) => {
  const { id } = req.params;
  res.send(`regx id-${id}`);
});

export default router;
