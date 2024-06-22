const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    console.log(req.url, req.headers, req.method);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(req.url.split("/")[1], (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found");
        return;
      }
      res.write("Deneme");
      res.end(data);
    });
  })
  .listen(8080);
