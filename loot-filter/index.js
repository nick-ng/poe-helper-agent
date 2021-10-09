import { getChaosFilter } from "./chaos-filter.js";
import { writeFilters } from "./write-filters.js";

export const makeChaosFilter = (itemCounts, outputDir, isDebug = false) => {
  const chaosFilter = getChaosFilter(itemCounts);
  writeFilters(chaosFilter, outputDir, isDebug);
};
