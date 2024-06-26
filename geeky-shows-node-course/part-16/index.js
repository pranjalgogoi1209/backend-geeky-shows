// create web server => http module

import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("This is response 1");
});

const PORT = process.env.PORT || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log("server running at htttp://localhost:8000");
});
