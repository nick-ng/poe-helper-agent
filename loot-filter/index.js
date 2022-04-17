import { oniGoroshiFarm } from "./filters.js";
import getShieldLevelingFilter from "./filters/shield-leveling.js";
import getTRLevelingFilter from "./filters/tr-leveling.js";
import getPCLevelingFilter from "./filters/pc-leveling.js";
import get2HAxeLevelingFilter from "./filters/2h-axe-leveling.js";
// import getEHeistFilter from "./filters/endless-heist.js";
import getPSlingerLevelingFilter from "./filters/pslinger-leveling.js";
import getAurabotLevelingFilter from "./filters/aurabot-leveling.js";
import getSpellLevelingFilter from "./filters/spell-leveling.js";
import getTrapFilter from "./filters/traps.js";
import { getCustomItemsFilter, getFilterFragment } from "./filter-loader.js";
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
    [chaosFilter],
    outputDir,
    { prefix: "05chaos", suffix: "" },
    isDebug,
    [5, 10]
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  writeFilters(
    [getCustomItemsFilter(), get2HAxeLevelingFilter()],
    outputDir,
    { prefix: "002h-axe_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getSpellLevelingFilter()],
    outputDir,
    { prefix: "00spell_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getTrapFilter()],
    outputDir,
    { prefix: "00traps_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [oniGoroshiFarm],
    outputDir,
    { prefix: "zzz_oni_farm_", suffix: "" },
    isDebug,
    [0, 2]
  );

  // writeFilters(
  //   [
  //     getCustomItemsFilter(),
  //     getShieldLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00shield_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [
  //     getCustomItemsFilter(),
  //     getTRLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00toxic_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [
  //     getCustomItemsFilter(),
  //     getPCLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00pconc_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [
  //     getCustomItemsFilter(),
  //     getPSlingerLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00pslinger_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [
  //     getCustomItemsFilter(),
  //     getAurabotLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00aurabot_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), getEHeistFilter()]
  //     .join("\n\n")
  //     .replaceAll(/\n{2,}/g, "\n\n")
  //     .replaceAll(/\t/g, "  "),
  //   outputDir,
  //   { prefix: "eheist_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), lowCurrencyHider, otherHider],
  //   outputDir,
  //   { prefix: "group_", suffix: "_general" },
  //   isDebug,
  //   [20, 9999]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), getFilterFragment("ssf-bases"), otherHider],
  //   outputDir,
  //   { prefix: "ssf_", suffix: "_general" },
  //   isDebug,
  //   [0, 9999]
  // );
};
