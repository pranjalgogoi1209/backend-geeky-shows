import path from "path";

const aboutController = (req, res) => {
  res.render("about", {
    name: "Pranjal",
  });
};

export { aboutController };
