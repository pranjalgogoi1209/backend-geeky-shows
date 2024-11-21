import express from "express";
import path from "path";

import templates from "./routes/templatesRoute.js";

const app = express();

const port = process.env.PORT || 3001;

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

app.use(
  "/templates",
  express.static(path.join(process.cwd(), "public/templates"), options)
);

app.use(templates);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
