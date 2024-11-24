const aboutController = (req, res) => {
  if (req.params.id) {
    res.send(`req.params.id`);
    return;
  }
  res.render("about");
};

export { aboutController };
