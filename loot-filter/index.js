import { oniGoroshiFarm } from "./filters.js";
import getShieldFilter from "./filters/shield.js";
import getTRLevelingFilter from "./filters/tr-leveling.js";
import getPoisonFilter from "./filters/poison-leveling.js";
import get2HAxeFilter from "./filters/2h-melee.js";
// import getEHeistFilter from "./filters/endless-heist.js";
import getPSlingerLevelingFilter from "./filters/pslinger-leveling.js";
import getAurabotLevelingFilter from "./filters/aurabot-leveling.js";
import getSpellFilter from "./filters/spell.js";
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
    { prefix: "99_chaos", suffix: "" },
    isDebug,
    [5, 10]
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  writeFilters(
    [getCustomItemsFilter(), get2HAxeFilter()],
    outputDir,
    { prefix: "02_2h-axe_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getShieldFilter()],
    outputDir,
    { prefix: "04_shield_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getSpellFilter()],
    outputDir,
    { prefix: "01_spell_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getPoisonFilter()],
    outputDir,
    { prefix: "00_poison_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [getCustomItemsFilter(), getTrapFilter()],
    outputDir,
    { prefix: "03_traps_", suffix: "" },
    isDebug,
    [5, 20]
  );

  writeFilters(
    [oniGoroshiFarm],
    outputDir,
    { prefix: "yy_oni_farm_", suffix: "" },
    isDebug,
    [0, 2]
  );

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
