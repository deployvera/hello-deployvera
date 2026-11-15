import http from "node:http";

const port = Number(process.env.PORT || 3000);
const greeting = process.env.GREETING || "Hello from DeployVera";

http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(`${greeting}\nCommit: ${process.env.SOURCE_COMMIT || "unknown"}\n`);
}).listen(port, () => console.log(`hello-deployvera listening on ${port}`));
