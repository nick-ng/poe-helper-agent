import { readdirSync } from "fs";
import { resolve } from "path";

import { oniGoroshiFarm, baseFilter } from "./filters.js";
import { getCustomItemsFilter } from "./filter-loader.js";
import { getChaosFilter } from "./chaos-filter.js";
import { writeFilters } from "./write-filters.js";
import { getSsfUniquesFilter } from "../filter-generators/uniques.js";

export const makeChaosFilter = (
  itemCounts,
  outputDir,
  isDebug = false,
  chaosOnly = false
) => {
  const chaosFilter = getChaosFilter(itemCounts, chaosOnly);
  writeFilters(
    [chaosFilter],
    outputDir,
    { prefix: "99_chaos", suffix: "" },
    isDebug,
    [5, 10]
  );
};

export const autoMakeFilters = (outputDir, isDebug = false) => {
  const moduleNames = readdirSync(resolve(".", "loot-filter", "filters"));

  moduleNames.forEach(async (moduleName) => {
    const { default: getFilter } = await import(`./filters/${moduleName}`);

    const filterName = moduleName.replace(".js", "");

    const filterText = getFilter();
    if (!filterText) {
      console.info(`Skipping ${filterName}`);
      return;
    }

    console.info(`Writing ${filterName}`);
    if (filterName.includes("maps")) {
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `1_${filterName}_`, suffix: "" },
        isDebug,
        [19, 25]
      );
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `2_${filterName}_`, suffix: "" },
        isDebug,
        [26, 999]
      );
    } else {
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `0_${filterName}_`, suffix: "" },
        isDebug,
        [5, 11]
      );
    }
  });

  writeFilters(
    [getCustomItemsFilter(), baseFilter(), getSsfUniquesFilter()],
    outputDir,
    { prefix: "1_t16-maps_", suffix: "" },
    isDebug,
    [19, 25]
  );
  writeFilters(
    [getCustomItemsFilter(), baseFilter(), getSsfUniquesFilter()],
    outputDir,
    { prefix: "2_t16-maps_", suffix: "" },
    isDebug,
    [26, 999]
  );

  writeFilters(
    [oniGoroshiFarm],
    outputDir,
    { prefix: "yy_oni_farm_", suffix: "" },
    isDebug,
    [0, 2]
  );
};
