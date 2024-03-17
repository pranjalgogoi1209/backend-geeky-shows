// path module
const path = require("path");

console.log();

// basename
console.log(
  path.basename(
    "D:BACKEND\\backend-geeky-shows\\geeky-shows-node-course\\part-10\\index.js",
    ".js"
  )
);
console.log(path.basename(__filename, ".js"));
console.log(path.basename(__filename, path.extname(__filename)));

// dirname
console.log(path.dirname(__filename));

// extname
console.log(path.extname(__filename));

// join
console.log(path.join("search", "label", "course", "oop"));
console.log(path.join("search", "label", "course", "oop", ".."));
console.log(path.join("search", "label", "course", "oop", "..", ".."));
console.log(path.join(__dirname, "course", "oop"));

// normalize
console.log(path.normalize("c:\\temp\\/\\foo\\bar"));
console.log(path.normalize("c:\\temp\\/\\foo\\bar\\..\\"));

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// isAbsolute
console.log(path.isAbsolute("//server"));
console.log(path.isAbsolute("\\\\server"));
console.log(path.isAbsolute("c:/foo/.."));
console.log(path.isAbsolute("C:\\foo\\.."));
console.log(path.isAbsolute("bar\\baz"));
console.log(path.isAbsolute("bar/baz"));
console.log(path.isAbsolute("."));
