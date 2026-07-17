const http = require("http");
const { createUser } = require("./userService");
const config = require("./config");

const server = http.createServer((req, res) => {

  if (req.url === "/create-user") {

    const user = createUser(
      "Normal",
      config.plans.normal.duration
    );

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(user, null, 2));

  } else {

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("WayneMail Server Running");

  }

});

server.listen(3000, () => {
  console.log("WayneMail started on port 3000");
});
