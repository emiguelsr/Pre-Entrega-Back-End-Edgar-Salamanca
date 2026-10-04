import http from "http";
import { getCommand } from "./commands.js";
import { handleGet, handlePost, handleDelete } from "./products.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const { method, resource, args } = getCommand();

  if (req.url.startsWith("/products") && req.method === "GET") {
    const id = req.url.split("/")[2];
    const data = id ? await handleGet(`products/${id}`) : await handleGet("products");
    res.writeHead(200);
    res.end(JSON.stringify(data));
    return;
  }

  if (req.url === "/products" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { title, price, category } = JSON.parse(body);
      const data = await handlePost([title, price, category]);
      res.writeHead(201);
      res.end(JSON.stringify(data));
    });
    return;
  }

  if (req.url.startsWith("/products/") && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    const data = await handleDelete(`products/${id}`);
    res.writeHead(200);
    res.end(JSON.stringify(data));
    return;
  }

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
  res.end(JSON.stringify({ error: "Comando o ruta no válida" }));
});

server.listen(PORT);
