import express from "express";

const router = express.Router();

// example 2 of route parameter
router.get("/:category/:id", (req, res) => {
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
router.get("/order/:year/and/:month", (req, res) => {
  const { year, month } = req.params;
  res.send(`year-${year} , month-${month}`);
});

export default router;
