import http from "node:http";
const server = http
  .createServer((req, res) => {
    console.log(JSON.stringify([req.url, req.headers]));
    if (req.url.includes("health")) {
      res.end("OK");
      return;
    }
    setTimeout(() => res.end("Hello World!"), 1000);
  })
  .listen(process.env.PORT || 8000)
  .on("listening", () => {
    console.log(`Server listening on port ${server.address().port}`);
  });
