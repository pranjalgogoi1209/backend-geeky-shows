import path from "path";

const homeController = (req, res) => {
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
  console.log(path.join(process.cwd(), "views", "index.html"));
};

export default homeController;
