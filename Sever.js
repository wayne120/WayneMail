const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("WayneMail server is running!");
});

server.listen(3000, () => {
  console.log("WayneMail server started on port 3000");
});
