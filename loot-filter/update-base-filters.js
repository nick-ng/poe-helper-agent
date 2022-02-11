import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";
import _ from "lodash";
import { resolve } from "path";
import { writeFileSync } from "./write-filters.js";

/**
 * level:
 * 10: leveling
 * 20: alch & go
 * 50: nem 3
 */
const FILTERS = [
  {
    group: "neversink",
    url: "https://filterblast.xyz/api/FilterFile/?filter=NeverSink&colortheme=Normal&soundtheme=Default",
    presets: [
      { filename: "nsss.filter", preset: "SEMI-STRICT", level: 10 },
      { filename: "nsvs.filter", preset: "VERY-STRICT", level: 20 },
      { filename: "nsub.filter", preset: "UBER-STRICT", level: 45 },
      { filename: "nsup.filter", preset: "UBER-PLUS-STRICT", level: 50 },
    ],
  },
];

export const presets = _.flatMap(
  [
    ...FILTERS,
    {
      presets: [
        {
          filename: "custom.filter",
          presets: "a",
          level: 46,
        },
      ],
    },
  ],
  (filterGroup) => filterGroup.presets
);

console.log("presets", presets);

const fetchAndSaveFilter = async (fullUrl, filename) => {
  const res = await fetch(fullUrl);
  const filterText = await res.text();
  writeFileSync(resolve(".", "base-filters", filename), filterText);
};

export const fetchAndSaveFilters = async () => {
  console.log("Fetching filters");
  for (const filter of FILTERS) {
    for (const preset of filter.presets) {
      const fullUrl = `${filter.url}&preset=${preset.preset}`;
      await fetchAndSaveFilter(fullUrl, `${preset.level}${preset.filename}`);
    }
  }

  if (process.env.POESESSID) {
    const res = await fetch("https://www.pathofexile.com/item-filter/AQmW9TM", {
      credentials: "include",
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-GB,en;q=0.5",
        Cookie: `POESESSID=${process.env.POESESSID}`,
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

    writeFileSync(resolve(".", "base-filters", "46custom.filter"), resText);
  }

  console.log("Finished fetching filters");
};
