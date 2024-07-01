import http from "http";

const server = http.createServer((req, res) => {
  // request
  if (req.url != "/favicon.ico") {
    console.log("url =>", req.url);
  }

  console.log(req.method);

  // response
  //   res.setHeader("Content-Type", "text/plain");
  //   console.log(res.statusCode, res.statusMessage);
  // res.statusCode = 202;
  // res.statusMessage = "Jhakas";

  res.writeHead(202, "Fantastic", { "Content-Type": "text/plain" });

  console.log(res.statusCode, res.statusMessage);
  res.end("Response from Server");
});

const PORT = process.env.port || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
