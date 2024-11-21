import path from "path";

const aboutController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "about.html"));

  console.log(path.join(process.cwd(), "views", "about.html"));
};

export default aboutController;
