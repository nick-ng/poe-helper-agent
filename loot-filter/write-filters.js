import {
  mkdirSync,
  writeFileSync as _writeFileSync,
  readdirSync,
  readFileSync,
} from "fs";
import { resolve, dirname, basename } from "path";

import { presets } from "./update-base-filters.js";
import { getMapsFilter } from "./filter-loader.js";

export const writeFileSync = (filePath, fileContents) => {
  const dirName = dirname(filePath);
  mkdirSync(dirName, {
    recursive: true,
  });

  return _writeFileSync(filePath, fileContents);
};

const isWithinLevelRange = (filterPath, levelRange) => {
  const a = presets.filter((a) => filterPath.endsWith(a.filename));

  if (a.length === 0) {
    return;
  }

  const filterInfo = a.pop();

  return (
    filterInfo.level >= Math.min(...levelRange) &&
    filterInfo.level <= Math.max(...levelRange)
  );
};

/**
 * @param {string[]} filterFragments
 * @param {string} outputPath
 * @param {boolean} [isDebug=false]
 */
export const writeFilters = (
  filterFragments,
  outputPath,
  filenameInfo,
  isDebug = false,
  levelRange = [-9999, 9999]
) => {
  const filter = filterFragments
    .join("\n\n")
    .replaceAll(/\n{2,}/g, "\n\n")
    .replaceAll(/\t/g, "  ");
  const baseFiltersPath = resolve(".", "base-filters");
  const baseFilters = readdirSync(baseFiltersPath);

  const { prefix, suffix } = filenameInfo;

  baseFilters.forEach((baseFilterName) => {
    const baseFilterPath = resolve(baseFiltersPath, baseFilterName);
    const baseFilter = readFileSync(baseFilterPath);
    const filterName = basename(baseFilterName, ".filter");

    if (!isWithinLevelRange(baseFilterPath, levelRange)) {
      return;
    }

    if (outputPath) {
      writeFileSync(
        resolve(outputPath, `zzz_${filterName}.filter`.toLowerCase()),
        baseFilter
      );
      writeFileSync(
        resolve(
          outputPath,
          `${prefix}${filterName}${suffix}.filter`.toLowerCase()
        ),
        `${getMapsFilter()}${filter}${baseFilter}`
      );
      // writeFileSync(
      //   resolve(
      //     outputPath,
      //     `zno_effect_${prefix}${filterName}${suffix}.filter`.toLowerCase()
      //   ),
      //   `${getMapsFilter()}${filter}${baseFilter}`.replaceAll(
      //     "PlayEffect",
      //     "#bb# PlayEffect"
      //   )
      // );
    }
    if (!outputPath || isDebug) {
      writeFileSync(
        resolve(
          ".",
          "output-filters",
          `${prefix}${filterName}${suffix}.filter`.toLowerCase()
        ),
        `${getMapsFilter()}${filter}${baseFilter}`
      );
    }
  });
};
