// const path = require("path");
// we cann't use common js in .mjs extension file and type: "module" in package.json.

// es module

import path from "path";
console.log(path.basename("C::hi/hello.js"));

console.log();

// we can't access __dirname and __pathname in es module because these are only accessible in common js because of wrapper module.
// console.log(__dirname, __pathname);
