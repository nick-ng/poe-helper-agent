import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import _ from "lodash";
import { resolve } from "path";
import { rmSync, copyFileSync, mkdirSync } from "fs";

import { writeFileSync } from "./write-filters.js";

/**
 * level:
 * 10: leveling
 * 20: alch & go
 * 50: nem 3
 */
const FILTER_BLAST = [
  {
    group: "neversink",
    url: "https://filterblast.xyz/api/FilterFile/?filter=NeverSink&colortheme=Normal&soundtheme=Default",
    presets: [
      { filename: "nsss.filter", preset: "SEMI-STRICT", level: 10 },
      { filename: "nsvs.filter", preset: "VERY-STRICT", level: 20 },
      { filename: "nsub.filter", preset: "UBER-STRICT", level: 30 },
      // { filename: "nsup.filter", preset: "UBER-PLUS-STRICT", level: 50 },
    ],
  },
  {
    group: "StupidFatHobbit",
    url: "https://filterblast.xyz/api/FilterFile/?filter=StupidFatHobbit",
    presets: [
      { filename: "sfh1.filter", preset: "General", level: 10 },
      { filename: "sfh2.filter", preset: "Strict", level: 20 },
      { filename: "shf3.filter", preset: "Uberstrict", level: 30 },
    ],
  },
  {
    group: "default",
    url: "https://filterblast.xyz/api/FilterFile/?filter=Default",
    presets: [{ filename: "default.filter", preset: "", level: 1 }],
  },
];

const GGG_FILTERS = [
  // {
  //   filename: "nsvs-l.filter",
  //   preset: "neversink-very-strict-sc-live",
  //   filterUrl: "https://www.pathofexile.com/item-filter/GmXoTD",
  //   level: 19,
  // },
  // {
  //   filename: "nsub-l.filter",
  //   preset: "neversink-uber-strict-sc-live",
  //   filterUrl: "https://www.pathofexile.com/item-filter/wvPeTJ",
  //   level: 44,
  // },
  // {
  // 	filename: "sfh1.filter",
  // 	preset: "stupidfathobbit-general",
  // 	filterUrl: "https://www.pathofexile.com/item-filter/A3BxSM",
  // 	level: 10,
  // },
  // {
  // 	filename: "sfh2.filter",
  // 	preset: "stupidfathobbit-strict",
  // 	filterUrl: "https://www.pathofexile.com/item-filter/zOv6Hz",
  // 	level: 20,
  // },
  // {
  // 	filename: "sfh3.filter",
  // 	preset: "stupidfathobbit-uberstrict",
  // 	filterUrl: "https://www.pathofexile.com/item-filter/Mpxoi0",
  // 	level: 30,
  // },
];

export const presets = _.flatMap(
  [
    // ...FILTER_BLAST, // RIP filterblast.xyz ?
    // { presets: GGG_FILTERS },
    {
      presets: [
        { filename: "aaa.filter", preset: "SEMI-STRICT", level: 10 },
        { filename: "aab.filter", preset: "VERY-STRICT", level: 20 },
        { filename: "aac.filter", preset: "UBER-STRICT", level: 30 },
        { filename: "baa.filter", preset: "General", level: 10 },
        { filename: "bab.filter", preset: "Strict", level: 20 },
        { filename: "bac.filter", preset: "Uberstrict", level: 30 },
      ],
    },
  ],
  (filterGroup) => filterGroup.presets
);

const fetchAndSaveFilter = async (fullUrl, filename) => {
  const res = await fetch(fullUrl);
  const filterText = await res.text();
  writeFileSync(resolve(".", "base-filters", filename), filterText);
};

const fetchGggFilter = async (
  poesessid,
  { filename, preset, filterUrl, level }
) => {
  if (poesessid) {
    try {
      console.info(`Fetching ${preset}`);
      const res = await fetch(filterUrl, {
        credentials: "include",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "en-GB,en;q=0.5",
          Cookie: `POESESSID=${poesessid}`,
          "Upgrade-Insecure-Requests": "1",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-User": "?1",
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
        },
        method: "GET",
        mode: "cors",
      });

      const resText = (await res.text())
        .replace(/^.*<pre.*class="item-filter-view-filter">/s, "")
        .replace(/<\/pre>.*$/s, "")
        .replaceAll("&lt;", "<")
        .replaceAll("&quot;", '"')
        .replaceAll("&gt;", ">")
        .replaceAll("&#039;", "'");

      if (resText.includes("!DOCTYPE")) {
        console.log("resText", resText);
        throw new Error("It looks like your POESESSID has expired");
      }
      writeFileSync(
        resolve(".", "base-filters", `${level}${filename}`),
        resText
      );
      console.info(`${preset} snippet`, resText.slice(0, 32));
    } catch (e) {
      console.error(`Error when fetching ${preset}`);
      console.error("Your POESESSID may have expired.");
      console.error(e);
      return 1;
    }

    return 0;
  }
};

export const fetchAndSaveFilters = async () => {
  console.info("Removing old filters");
  try {
    rmSync(resolve(".", "base-filters"), { recursive: true });
    mkdirSync(resolve(".", "base-filters"));
  } catch (e) {
    console.log("e", e);
  }

  mkdirSync(resolve(".", "base-filters"), { recursive: true });

  console.info("Fetching filters");
  // RIP filterblast.xyz ?
  // for (const filter of FILTER_BLAST) {
  // 	for (const preset of filter.presets) {
  // 		console.info(`Fetching ${filter.group} ${preset.preset}`);
  // 		const presetQuery = preset.preset ? `&preset=${preset.preset}` : "";
  // 		const fullUrl = `${filter.url}${presetQuery}`;
  // 		await fetchAndSaveFilter(fullUrl, `${preset.level}${preset.filename}`);
  // 	}
  // }

  // if (process.env.POESESSID) {
  // 	for (const filter of GGG_FILTERS) {
  // 		await fetchGggFilter(process.env.POESESSID, filter);
  // 	}
  // }

  [
    // Neversink
    "10aaa.filter",
    "20aab.filter",
    "30aac.filter",
    // StupidFatHobbit
    "10baa.filter",
    "20bab.filter",
    "30bac.filter",
  ].forEach((f) => {
    console.info(`Copying ${f} custom base filter`);
    copyFileSync(
      resolve(".", "custom-base-filters", f),
      resolve(".", "base-filters", f)
    );
  });

  console.info("Finished fetching filters");
};
