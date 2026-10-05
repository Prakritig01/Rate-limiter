import type { Request } from "express";

export function getClientKey(req: Request): string {
  const apiKey = req.header("x-api-key");
  if (apiKey) {
    return `key:${apiKey}`;
  }
  return `ip:${req.ip}`;
}
