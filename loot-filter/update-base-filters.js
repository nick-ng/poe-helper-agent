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
      { filename: "nsup.filter", preset: "UBER-PLUS-STRICT", level: 50 },
    ],
  },
];

export const presets = _.flatMap(FILTERS, (filterGroup) => filterGroup.presets);

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
  console.log("Finished fetching filters");
};
