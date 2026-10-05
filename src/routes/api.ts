import { Router } from "express";
import { ok } from "../http.js";

export const apiRouter: Router = Router();

apiRouter.get("/resource", (req, res) => {
  ok(res, { at: new Date().toISOString() });
});

apiRouter.post("/login", (req, res) => {
  ok(res, { token: "fake-token" }, "Logged in");
});

apiRouter.get("/search", (req, res) => {
  const q = typeof req.query.q === "string" ? req.query.q : "";
  ok(res, { q, results: [] });
});
