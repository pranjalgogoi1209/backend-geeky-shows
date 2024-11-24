import express from "express";
import path from "path";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3003;

// load routes
app.use(web);

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
// if views folder's name is different then only below line is required otherwise not required
// by default express takes views, so if you are keeping your ejs files in views, then below line is not required.
app.set("views", path.join(process.cwd(), "myViews"));

// setup the template engine to use
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
