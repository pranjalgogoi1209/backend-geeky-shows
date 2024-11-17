import http from "http";

const server = http.createServer((req, res) => {
  // request
  /* if (req.url != "/favicon.ico") {
    console.log("url =>", req.url);
  }

  console.log(req.method);
 */

  // response
  console.log(res.statusCode, res.statusMessage);

  /* res.statusCode = 202;
  res.statusMessage = "Jhakas";
  res.setHeader("Content-Type", "text/plain"); */
  res.writeHead(202, "Fantastic", { "Content-Type": "text/plain" });
  res.end("Response from Server");
  // always write res.end in the end

  console.log(res.statusCode, res.statusMessage);
});

const PORT = process.env.port || 8000;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
