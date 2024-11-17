import * as fs from "fs";
import http from "http";
import zlib from "zlib";

const server = http.createServer((req, res) => {
  // create zip using stream
  fs.createReadStream("data.txt").pipe(
    zlib.createGzip().pipe(fs.createWriteStream("data.zip"))
  );

  // sending data using stream
  const stream = fs.createReadStream("data.txt", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

server.listen(8000, "localhost", () => {
  console.log("Server is running on port 8000");
});
