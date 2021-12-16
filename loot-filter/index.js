import { topUniquesFilter, lowCurrencyHider, otherHider } from "./filters.js";
import getShieldLevelingFilter from "./filters/shield-leveling.js";
import { getCustomItemsFilter, getUniquesFilter } from "./filter-loader.js";
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
    isDebug,
    [0, 10]
  );

  writeFilters(
    [
      getCustomItemsFilter(),
      getShieldLevelingFilter(),
      getChaosFilter(itemCounts, false),
    ]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "!shield_", suffix: "" },
    isDebug,
    [0, 10]
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  const a = getUniquesFilter();
  writeFilters(
    `${getCustomItemsFilter()}${topUniquesFilter}${lowCurrencyHider}${otherHider}`,
    outputDir,
    { prefix: "b", suffix: "_general" },
    isDebug,
    [0, 9999]
  );

  writeFilters(
    `${getCustomItemsFilter()}${otherHider}`,
    outputDir,
    { prefix: "c", suffix: "_general" },
    isDebug,
    [0, 9999]
  );
};
