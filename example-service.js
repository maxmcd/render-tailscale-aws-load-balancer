import { spawn } from "node:child_process";
import http from "node:http";
http
  .createServer((_, res) => setTimeout(() => res.end("Hello World"), 1000))
  .listen(8000);
