import {
  customExtras,
  topUniquesFilter,
  lowCurrencyHider,
  otherHider,
} from "./filters.js";
import { getChaosFilter } from "./chaos-filter.js";
import { writeFilters } from "./write-filters.js";

export const makeChaosFilter = (
  itemCounts,
  outputDir,
  isDebug = false,
  chaosOnly = false
) => {
  const chaosFilter = getChaosFilter(itemCounts, chaosOnly);
  writeFilters(
    chaosFilter,
    outputDir,
    { prefix: "", suffix: "_chaos_recipe" },
    isDebug
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  writeFilters(
    `${customExtras}${topUniquesFilter}${lowCurrencyHider}${otherHider}`,
    outputDir,
    { prefix: "b", suffix: "_general" },
    isDebug
  );
};
