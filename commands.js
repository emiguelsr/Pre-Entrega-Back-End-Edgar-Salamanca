export function getCommand() {
  const [, , method, resource, ...args] = process.argv;
  return { method, resource, args };
}
