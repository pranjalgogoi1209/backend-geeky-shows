import http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  // response
  // res.writeHead(200, "OK", { "Content-Type": "text/html" });
  res.writeHead(440, "NOT OK", { "Content-Type": "text/html" });

  // serving html tags
  // res.end("<h1>Home Page Content Hai</h1>");

  // serving diffrent html content for different routes
  /* if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Page</h1>");
  } else {
    res.end("<h1>404 Page not found</h1>");
  } */

  // serving html pages
  if (req.url === "/") {
    fs.readFile("public/home.html", (error, data) => {
      if (error) throw error;
      data && res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("public/about.html", (error, data) => {
      if (error) throw error;
      data && res.end(data);
    });
  } else {
    res.end("<h1>404 Page not found</h1>");
  }
});

const PORT = process.env.port || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
