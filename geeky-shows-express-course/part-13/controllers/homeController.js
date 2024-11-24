import path from "path";

const homeController = (req, res) => {
  // res.send("Home Page");
  //   res.sendFile(path.join(process.cwd(), "views", "index.html"));
  // this line is for ejs file, we set the template engine to use in app.js, so we didn't mention the extension here.
  res.render("index", {
    name: "Pranjal",
  });
};

export { homeController };
