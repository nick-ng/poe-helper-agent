import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import { getUniquesValue } from "./poe-ninja.js";

const fixComments = (filterFragment) => {
  return filterFragment.toString().replaceAll("//", "#");
};

export const getShieldLevelingFilter = () => {
  return (
    fixComments(
      readFileSync(resolve(".", "filter-fragments", "shield-leveling.filter"))
    ) + "\n"
  );
};

export const getCustomItemsFilter = () => {
  const filters = readdirSync(resolve(".", "filter-fragments"));

  const customFilterPath = resolve(".", "filter-fragments", "!custom.filter");

  if (!filters.includes("!custom.filter")) {
    writeFileSync(customFilterPath, "## Put your custom filter stuff here");
    return "";
  }

  return fixComments(readFileSync(customFilterPath));
};

export const getMapsFilter = () => {
  const mapsFilterPath = resolve(".", "filter-fragments", "maps.filter");

  return fixComments(readFileSync(mapsFilterPath));
};

export const getUniquesFilter = () => {
  getUniquesValue();
};
