import type { Response } from "express";

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T | null;
}

export function ok<T>(res: Response, data: T, message = "OK"): void {
  res.status(200).json({ statusCode: 200, message, data });
}

export function fail(res: Response, statusCode: number, message: string): void {
  res.status(statusCode).json({ statusCode, message, data: null });
}
