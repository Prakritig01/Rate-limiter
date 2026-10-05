import type { NextFunction, Request, Response } from "express";
import { getClientKey } from "../clientKey.js";

export function requestLogger(req: Request, res: Response, next: NextFunction): void {
  const start = process.hrtime.bigint();

  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
    console.log(
      `${new Date().toISOString()} ${req.method} ${req.originalUrl} ` +
        `key=${getClientKey(req)} status=${res.statusCode} ${durationMs.toFixed(1)}ms`
    );
  });

  next();
}
