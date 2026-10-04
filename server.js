import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ mensaje: "Servidor iniciado" }));
});

server.listen(PORT);