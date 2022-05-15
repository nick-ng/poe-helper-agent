import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import fetch from "node-fetch";

import { makeChaosFilter, makeGeneralFilter } from "./loot-filter/index.js";
import { fetchAndSaveFilters } from "./loot-filter/update-base-filters.js";
import trimLogs from "./tools/trim-log.js";
import getTracker, { getTrackerUrl } from "./poe-racing/get-tracker.js";

const sleep = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const args = process.argv.slice(2);
const mode = args[0];

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

let autoClose = true;

const rateLimited = () => {
  const { counter, lastUpdate } = limit;
  const now = Date.now();
  const elapsed = now - lastUpdate;
  const reduced = Math.floor(elapsed / MS_PER);
  const newCounter = Math.max(counter - reduced, 0);
  if (newCounter < MAX_REQUESTS) {
    limit.counter = newCounter + 1;
    limit.lastUpdate = now;

    return false;
  }

  console.info(new Date().toLocaleTimeString(), "limit hit", MS_PER - elapsed);
  return true;
};

const app = express();
const server = createServer(app);

app.use(compression());
app.use(json());
app.use(cors());

app.get("/", async (_req, res, _next) => {
  autoClose = false;
  res.sendStatus(200);
});

app.get("/poe-racing", (_req, res, _next) => {
  res.send(getTracker());
});

app.get("/poe-racing-1", (_req, res, _next) => {
  res.redirect(getTrackerUrl(1));
});

app.get("/poe-racing-2", (_req, res, _next) => {
  res.redirect(getTrackerUrl(2));
});

app.post("/chaos-filter", async (req, res, _next) => {
  autoClose = false;
  makeChaosFilter(
    {
      body: 35,
      glove: 35,
      boot: 35,
      helm: 35,
      ring: 35,
      amulet: 35,
      belt: 35,
      weapon: 35,
      ...req.body,
    },
    process.env.POE_SETTINGS_PATH,
    false,
    process.env.CHAOS_FILTER_ONLY?.toLowerCase() === "true"
  );

  res.sendStatus(200);
});

app.post("/", async (req, res, _next) => {
  autoClose = false;
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

    const randomSleep = Math.random() * 500;
    if (randomSleep > 200) {
      console.log(
        `sleeping for ${randomSleep} ms before making request to ${url}`
      );
    }
    await sleep(Math.random() * 500);

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

const updateFilters = async () => {
  console.info("Updating base filters and making chaos filters");
  await fetchAndSaveFilters();
  makeChaosFilter(
    {
      body: 35,
      glove: 35,
      boot: 35,
      helm: 35,
      ring: 35,
      amulet: 35,
      belt: 35,
      weapon: 35,
    },
    process.env.POE_SETTINGS_PATH,
    true,
    process.env.CHAOS_FILTER_ONLY?.toLowerCase() === "true"
  );
  makeGeneralFilter(process.env.POE_SETTINGS_PATH, true);
};

switch (mode) {
  case "--trim-logs":
    trimLogs();
    break;
  case "--update-filters":
    updateFilters();
    break;
  case "--chaos-only":
    console.info("Making chaos filters");
    makeChaosFilter(
      {
        body: 35,
        glove: 35,
        boot: 35,
        helm: 35,
        ring: 35,
        amulet: 35,
        belt: 35,
        weapon: 35,
      },
      process.env.POE_SETTINGS_PATH,
      true,
      process.env.CHAOS_FILTER_ONLY?.toLowerCase() === "true"
    );
    break;
  default:
    trimLogs();
    server.listen(PORT, () => {
      console.info(`${new Date()} Website server listening on ${PORT}.`);
      updateFilters();
      // let counter = 0;
      // setInterval(
      //   () => {
      //     updateFilters();
      //     console.info(counter++);
      //   },
      //   7200000 // 2 hours in milliseconds
      // );
    });
}
