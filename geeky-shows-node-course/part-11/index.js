// common js
/* const path = require("path");
console.log(path.basename(__filename, path.extname(__filename))); */

// es module
import path from "path";

//  __filename and __dirname dont works in es module
// console.log(path.basename(__filename, path.extname(__filename)));
console.log(
  path.basename(
    "D:BACKEND\\backend-geeky-shows\\geeky-shows-node-course\\part-10\\index.js",
    ".index"
  )
);
