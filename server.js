import http from "http";
import { getCommand } from "./commands.js";
import { handleGet, handlePost, handleDelete } from "./products.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const { method, resource, args } = getCommand();

  if (method === "GET") {
    const data = await handleGet(resource);
    res.writeHead(200);
    res.end(JSON.stringify(data));
    return;
  }

  if (method === "POST") {
    const data = await handlePost(args);
    res.writeHead(201);
    res.end(JSON.stringify(data));
    return;
  }

  if (method === "DELETE") {
    const data = await handleDelete(resource);
    res.writeHead(200);
    res.end(JSON.stringify(data));
    return;
  }

  res.writeHead(400);
  res.end(JSON.stringify({ error: "Comando no válido" }));
});

server.listen(PORT);
