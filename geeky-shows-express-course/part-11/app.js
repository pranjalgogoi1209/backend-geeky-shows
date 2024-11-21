import express from "express";
import path from "path";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || 3000;

// static files

// relative path
// app.use(express.static("public"));

// absolute path
// app.use(express.static(path.join(process.cwd(), "public")));

// virtual path
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

// for specific virtual path
/* app.use("/css", express.static(path.join(process.cwd(), "public/css")));
app.use("/images", express.static(path.join(process.cwd(), "public/images")));
app.use("/js", express.static(path.join(process.cwd(), "public/js"))); */

// load routes
app.use(web);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
