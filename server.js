import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import fetch from "node-fetch";

import { makeChaosFilter } from "./loot-filter/index.js";

const MS_PER = process.env.MS_PER
  ? Math.max(parseInt(process.env.MS_PER, 10), 200)
  : 1000;
const MAX_REQUESTS = process.env.MAX_REQUESTS
  ? Math.min(parseInt(process.env.MAX_REQUESTS, 10), 100)
  : 5;
const PORT = process.env.PORT || 8910;

const limit = {
  counter: 0,
  lastUpdate: Date.now(),
};

const rateLimited = () => {
  const { counter, lastUpdate } = limit;
  const now = Date.now();
  const elapsed = now - lastUpdate;
  const reduced = Math.floor(elapsed / MS_PER);
  const newCounter = Math.max(counter - reduced, 0);
  if (newCounter < MAX_REQUESTS) {
    limit.counter = newCounter + 1;
    limit.lastUpdate = now;
    console.log(
      new Date().toLocaleTimeString(),
      "limit hit",
      newCounter,
      MAX_REQUESTS
    );
    return false;
  }
  return true;
};

const app = express();
const server = createServer(app);

app.use(compression());
app.use(json());
app.use(cors());

app.get("/", async (_req, res, _next) => {
  res.sendStatus(200);
});

app.post("/chaos-filter", async (req, res, _next) => {
  console.log("req.body", req.body);
  makeChaosFilter(
    {
      body: 0,
      glove: 0,
      boot: 0,
      helm: 0,
      ring: 0,
      amulet: 0,
      belt: 0,
      weapon: 0,
      ...req.body,
    },
    process.env.POE_SETTINGS_PATH
  );

  res.sendStatus(200);
});

app.post("/", async (req, res, _next) => {
  if (rateLimited()) {
    res.set({
      "access-control-expose-headers": "X-Ms-Per-Request",
      "X-Ms-Per-Request": MS_PER,
    });
    res.statusMessage = "Too many requests";
    res.status(429).end();
    return;
  }

  try {
    const { url, options } = req.body;

    const res2 = await fetch(url, options);

    if (!res2.ok) {
      const resText = await res2.text();
      console.log("res2", res2);
      console.log("text", resText);
      res.status(res2.status);
      res.send(resText);
      return;
    }

    const contentType = res2.headers.get("content-type");
    const contentLength = res2.headers.get("content-length");
    if (contentType === "application/json" && contentLength > 0) {
      res.json(await res2.json());
      return;
    } else {
      res.send(await res2.text());
    }
  } catch (e) {
    res.statusMessage = e.message;
    res.status(500).end();
  }
});

server.listen(PORT, () => {
  console.log(`${new Date()} Website server listening on ${PORT}.`);
});
