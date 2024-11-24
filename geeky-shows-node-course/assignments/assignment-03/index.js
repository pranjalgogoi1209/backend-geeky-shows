/* 
Assignment: URL Parser and Formatter
Task
Create a simple Node.js program that uses the url module to perform the following tasks:

Parse a given URL string into its components (protocol, host, pathname, query, etc.).
Extract and log the query parameters as an object.
Modify one of the query parameters and reconstruct the URL.
Log both the original and modified URLs.
*/

import { URL } from "url";

const myUrl = new URL(
  "https://mywebsite.com/profile?user=JohnDoe&age=30&ref=homepage"
);

console.log(myUrl.searchParams);
const allParamsSet = new Set(myUrl.searchParams);

console.log(allParamsSet);

const obj = {};

allParamsSet.forEach((item) => {
  obj[item[0]] = item[1];
});

console.log(obj);

myUrl.searchParams.set("user", "PranjalGogoi");
myUrl.searchParams.set("age", "25");
myUrl.searchParams.set("ref", "aboutPage");
myUrl.searchParams.set("designation", "Developer");

// if we are using set then the value will be overwritten
myUrl.searchParams.set("designation", "CEO");
myUrl.searchParams.append("interest", "coding");

// if we are using append then the value will be added
myUrl.searchParams.append("interest", "singing");

console.log(myUrl.toString());

// https://mywebsite.com/profile?user=PranjalGogoi&age=25&ref=aboutPage
