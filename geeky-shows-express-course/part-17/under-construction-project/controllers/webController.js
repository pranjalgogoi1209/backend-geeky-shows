const homeController = (req, res) => {
  res.render("home");
};

const aboutController = (req, res) => {
  res.render("about");
};

export { homeController, aboutController };
