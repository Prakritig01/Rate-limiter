# Distributed Rate Limiter

A portfolio project that will implement a Token Bucket rate limiter shared across multiple
Node.js processes using Redis. The goal is to show how a single logical rate limit stays
correct even when the API runs on several Node instances at once.

## Phase 0 — Baseline API

A small HTTP API with **no rate limiting at all**, so we have an honest "before" state to
compare against later.

```bash
npm install
cp .env.example .env
npm run dev
```

```bash
curl -i localhost:3000/health
curl -i localhost:3000/api/resource
curl -i -X POST localhost:3000/api/login -H "Content-Type: application/json" -d '{"user":"a"}'
curl -i "localhost:3000/api/search?q=hello" -H "X-API-Key: user-1"
curl -i "localhost:3000/api/search"
curl -i localhost:3000/nope
```
