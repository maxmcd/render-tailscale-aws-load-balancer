import http from "node:http";
const server = http
  .createServer((_, res) => setTimeout(() => res.end("Hello World"), 1000))
  .listen(process.env.PORT || 8000)
  .on("listening", () => {
    console.log(`Server listening on port ${server.address().port}`);
  });
