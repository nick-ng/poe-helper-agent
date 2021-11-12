import { topUniquesFilter, lowCurrencyHider, otherHider } from "./filters.js";
import {
  getCustomItemsFilter,
  getShieldLevelingFilter,
  getUniquesFilter,
} from "./filter-loader.js";
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

  writeFilters(
    `${getCustomItemsFilter()}${getShieldLevelingFilter()}${chaosFilter}`,
    outputDir,
    { prefix: "!shield_", suffix: "" },
    isDebug
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  const a = getUniquesFilter();
  writeFilters(
    `${getCustomItemsFilter()}${topUniquesFilter}${lowCurrencyHider}${otherHider}`,
    outputDir,
    { prefix: "b", suffix: "_general" },
    isDebug
  );

  writeFilters(
    `${getCustomItemsFilter()}${lowCurrencyHider}${otherHider}`,
    outputDir,
    { prefix: "c", suffix: "_general" },
    isDebug
  );
};
