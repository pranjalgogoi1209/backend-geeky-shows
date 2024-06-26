import http from "http";

const server = http.createServer((req, res) => {
  res.end("Using Nodemon...! nodemon is working");
});

server.listen(8001, "localhost", () => {
  console.log("server is started at localhost:8001");
});
