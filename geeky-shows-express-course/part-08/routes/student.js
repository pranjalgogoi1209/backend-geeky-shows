import express from "express";
const router = express.Router();

// example 1 of route parameter

router.param("id", (req, res, next, id) => {
  console.log("APP.PARAMID: " + id);
  next();
});

router.get("/all/:id", (req, res) => {
  const add = req.headers["x-forwarded-for"];
  const token = req.headers["token"];

  console.log(add, token);

  if (token === "123") {
    res.send("Token is valid and you are authorized");
    return;
  }

  const { id } = req.params;
  // console.log(id);

  if (Number(id) === 21) {
    res.send("Roll No. 21");
  } else res.send("Roll No. not 21");
});

router
  .route("/akshay/:id")
  .all((req, res, next) => {
    console.log("all");
    next();
  })
  .get((req, res) => {
    res.send("Akshay route checking");
  });

export default router;
