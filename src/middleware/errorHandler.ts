import type { NextFunction, Request, Response } from "express";
import { fail } from "../http.js";

export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  fail(res, 404, `Route ${req.method} ${req.path} not found`);
}

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error("[error]", err);
  if (res.headersSent) {
    next(err);
    return;
  }
  fail(res, 500, "Internal server error");
}
