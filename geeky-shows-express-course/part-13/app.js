import express from "express";
import path from "path";
import home from "./routes/web.js";
import about from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// load routes
app.use(home);
app.use(about);

// virtual path for static files
const options = {
  dotfiles: "allow",
  etag: false,
  extensionos: ["htm", "html"],
  index: false,
  maxAge: "id",
  redirect: false,
  setHeader: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use("/static", express.static(path.join(process.cwd(), "public"), options));

// setup the directory where template files are located
app.set("views", path.join(process.cwd(), "myViews"));
// by default express takes views, so if you are keeping your ejs files in views, then above line is not required.

// setup the template engine to use
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
