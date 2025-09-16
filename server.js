const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write("Welcome to Home Page");
    res.end();
  } else if (req.url === "/about" && req.method === "GET") {
    res.write("This is About Page");
    res.end();
  } else {
    res.statusCode = 404;
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
