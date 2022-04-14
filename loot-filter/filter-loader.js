import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import { getUniquesValue } from "./poe-ninja.js";

const fixComments = (filterFragment) => {
  return filterFragment.toString().replaceAll("//", "#");
};

export const getFilterFragment = (fragmentName, replacements = {}) => {
  const actualFragmentName = fragmentName.replace(/\.filter$/, "");
  const rawFilter = fixComments(
    readFileSync(
      resolve(".", "filter-fragments", `${actualFragmentName}.filter`)
    )
  );

  const replacedFilter = Object.entries(replacements).reduce((prev, curr) => {
    const [original, replacement] = curr;

    return prev.replaceAll(`##${original}##`, replacement);
  }, rawFilter);

  return ["\n\n", replacedFilter, "\n\n"].join();
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
