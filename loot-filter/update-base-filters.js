import fetch from "node-fetch";
import { resolve } from "path";
import { writeFileSync } from "./write-filters.js";

const FILTERS = [
  {
    group: "neversink",
    url: "https://filterblast.xyz/api/FilterFile/?filter=NeverSink&colortheme=Normal&soundtheme=Default",
    presets: [
      { filename: "24_neversink_semi-strict.filter", preset: "SEMI-STRICT" },
      { filename: "26_neversink_very-strict.filter", preset: "VERY-STRICT" },
      { filename: "28_neversink_uber-plus.filter", preset: "UBER-PLUS-STRICT" },
    ],
  },
];

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
      await fetchAndSaveFilter(fullUrl, preset.filename);
    }
  }
  console.log("Finished fetching filters");
};
