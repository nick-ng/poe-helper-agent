import { getChaosFilter } from "./chaos-filter.js";
import { writeFilters } from "./write-filters.js";

export const makeChaosFilter = (itemCounts, outputDir) => {
  const chaosFilter = getChaosFilter(itemCounts);
  writeFilters(chaosFilter, outputDir);
};
