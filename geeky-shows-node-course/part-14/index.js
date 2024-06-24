// URL module

import { URL } from "url";

const myUrl = new URL(
  "https://www.youtube.com:8080/watch?v=OPrP_ge9xpE&list=PLbGui_ZYuhijy1SpwtIS9IwL6OJdbr4kE&index=14#hash"
);

console.log(myUrl);
/* console.log(myUrl.hash);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.pathname);
console.log(myUrl.port);
console.log(myUrl.protocol);
console.log(myUrl.search);
console.log(myUrl.searchParams); */
console.log(myUrl.toString());
console.log(myUrl.toJSON());
