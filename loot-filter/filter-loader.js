import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import { getUniquesValue } from "./poe-ninja.js";

const fixComments = (filterFragment) => {
  return filterFragment.toString().replaceAll("//", "#");
};

export const getFilterFragment = (fragmentName) => {
  const actualFragmentName = fragmentName.replace(/\.filter$/, "");

  return `
${fixComments(
  readFileSync(resolve(".", "filter-fragments", `${actualFragmentName}.filter`))
)}
`;
};

export const getShieldLevelingFilter = () => {
  return getFilterFragment("shield-leveling");
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
  return getFilterFragment("maps");
};

export const getUniquesFilter = () => {
  getUniquesValue();
};
