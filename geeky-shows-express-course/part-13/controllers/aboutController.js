import path from "path";

const aboutController = (req, res) => {
  // res.send("about page");
  res.render("about", {
    ctoName: "Pranjal Gogoi",
    ceoName: "Elon Musk",
  });
};

export { aboutController };
