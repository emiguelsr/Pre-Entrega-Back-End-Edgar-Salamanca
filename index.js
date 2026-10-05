import { getCommand } from "./commands.js";
import { handleGet, handlePost, handleDelete } from "./products.js";

const { method, resource, args } = getCommand();

if (method === "GET") {
  console.log(await handleGet(resource));
}

if (method === "POST") {
  console.log(await handlePost(args));
}

if (method === "DELETE") {
  console.log(await handleDelete(resource));
}
