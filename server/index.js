const http = require("http");
http
  .createServer((res, req) => {
    if (res.method === "GET") {
      req.end();
    }
  })
  .listen(5000, () => console.log("Server Started"));
