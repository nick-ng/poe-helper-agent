import {
  mkdirSync,
  writeFileSync as _writeFileSync,
  readdirSync,
  readFileSync,
} from "fs";
import { resolve, dirname, basename } from "path";

export const writeFileSync = (filePath, fileContents) => {
  const dirName = dirname(filePath);
  mkdirSync(dirName, {
    recursive: true,
  });

  return _writeFileSync(filePath, fileContents);
};

/**
 * @param {string} filter
 * @param {string} outputPath
 * @param {boolean} [isDebug=false]
 */
export const writeFilters = (filter, outputPath, isDebug = false) => {
  const baseFiltersPath = resolve(".", "base-filters");
  const baseFilters = readdirSync(baseFiltersPath);

  baseFilters.forEach((baseFilterName) => {
    const baseFilterPath = resolve(baseFiltersPath, baseFilterName);
    const baseFilter = readFileSync(baseFilterPath);
    const filterName = basename(baseFilterName, ".filter");

    if (outputPath) {
      writeFileSync(
        resolve(outputPath, `zzz_${filterName}.filter`.toLowerCase()),
        baseFilter
      );
      writeFileSync(
        resolve(outputPath, `${filterName}_chaos_recipe.filter`.toLowerCase()),
        `${filter}${baseFilter}`
      );
    }
    if (!outputPath || isDebug) {
      writeFileSync(
        resolve(
          ".",
          "output-filters",
          `${filterName}_chaos_recipe.filter`.toLowerCase()
        ),
        `${filter}${baseFilter}`
      );
    }
  });
};
