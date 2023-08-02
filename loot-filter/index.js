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

  const moduleNames = readdirSync(resolve(".", "loot-filter", "filters"));

  moduleNames.forEach(async (moduleName) => {
    const { default: getFilter } = await import(`./filters/${moduleName}`);

    const filterName = moduleName.replace(".js", "");

    const filterText = getFilter();
    if (!filterText) {
      console.info(`Skipping ${filterName}`);
      return;
    }

    if (filterName.includes("maps")) {
      console.info(`Writing ${filterName}`);
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `2_${filterName}_`, suffix: "" },
        isDebug,
        [19, 25]
      );
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `3_${filterName}_`, suffix: "" },
        isDebug,
        [26, 999]
      );
    } else if (filterName.includes("phase")) {
      console.info(`Writing ${filterName}`);
      // league start
      let filterRange = [0, 999];

      switch (filterName) {
        case "phase-1": {
          filterRange = [5, 11];
          break;
        }
        case "phase-2": {
          filterRange = [19, 25];
          break;
        }
        default: {
          filterRange = [26, 999];
        }
      }

      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `0_${filterName}_`, suffix: "" },
        isDebug,
        filterRange
      );
    } else if (filterName === "phase-2") {
      // league start
    } else {
      console.info(`Skipping ${filterName}`);
      return;
      writeFilters(
        [getCustomItemsFilter(), getFilter(), getSsfUniquesFilter()],
        outputDir,
        { prefix: `0_${filterName}_`, suffix: "" },
        isDebug,
        [5, 11]
      );
    }
  });
};
