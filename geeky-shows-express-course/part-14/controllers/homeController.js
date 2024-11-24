const homeController = (req, res) => {
  const data = {
    name: "pranjal",
    marks: [40, 60, 80, 100, 120],
    sumFunc: (num1, num2) => {
      return num1 + num2;
    },
  };
  res.render("index", data);
};

export { homeController };
