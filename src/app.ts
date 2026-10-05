import express, { type Express } from "express";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { ok } from "./http.js";
import { apiRouter } from "./routes/api.js";

export function createApp(): Express {
  const app = express();

  app.use(express.json());
  app.use(requestLogger);

  app.get("/health", (req, res) => {
    ok(res, { uptime: process.uptime() });
  });

  app.use("/api", apiRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
