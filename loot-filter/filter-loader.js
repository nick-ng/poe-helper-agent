import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";

import { getUniquesValue } from "./poe-ninja.js";

const fixComments = (filterFragment) => {
  return filterFragment.toString().replaceAll("//", "#");
};

const basesToFilter = (baseTypes) =>
  baseTypes.map((a) => `"${a.trim()}" `).join("");

const defaultReplacements = {
  ilvl86a: basesToFilter([
    "Carnal Armour", // Dex/Int
    "Full Dragonscale", // Str/Dex
    "Cardinal Round Shield", // Str/Dex
    // "Saint's Hauberk", // Str/Int
    "Supreme Spiked Shield", // Dex/Int
    "Mirrored Spiked Shield", // Dex/Int
    // "Colossal Tower Shield", // Str
  ]),
  ilvl86b: basesToFilter([
    "Sadist Garb", // Dex/Int
    "Blood Raiment", // Dex/Int
    "General's Brigandine", // Str/Dex
    "Triumphant Lamellar", // Str/Dex
    // "Saintly Chainmail", // Str/Int
    "Assassin's Garb", // Dex
    "Crusader Buckler", // Dex
  ]),
  ilvl85a: basesToFilter([
    "Pig-Faced Bascinet", // Str/Dex
    "Dragonscale Gauntlets", // Str/Dex
    "Dragonscale Boots", // Str/Dex
    "Two-Toned Boots",
    // "Crusader Gloves", // Str/Int
    // "Crusader Boots", // Str/Int
    // "Prophet Crown", // Str/Int
    "Lion Pelt", // Dex
    "Slink Boots", // Dex
    "Slink Gloves", // Dex
    "Gripped Gloves", // Dex
  ]),
  ilvl85b: basesToFilter([
    "Nightmare Bascinet", // Str/Dex
    "Fluted Bascinet", // Str/Dex
    "Deicide Mask", // Dex/Int
  ]),
};

export const getFilterFragment = (fragmentName, replacements = {}) => {
  const actualFragmentName = fragmentName.replace(/\.filter$/, "");
  const rawFilter = fixComments(
    readFileSync(
      resolve(".", "filter-fragments", `${actualFragmentName}.filter`)
    )
  );

  const replacedFilter = Object.entries({
    ...defaultReplacements,
    ...replacements,
  }).reduce((prev, curr) => {
    const [original, replacement] = curr;

    return prev.replaceAll(`##${original}##`, replacement);
  }, rawFilter);

  return ["\n\n", replacedFilter, "\n\n"].join("");
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
