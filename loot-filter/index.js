import {
  topUniquesFilter,
  lowCurrencyHider,
  nemThree,
  otherHider,
} from "./filters.js";
import getShieldLevelingFilter from "./filters/shield-leveling.js";
import getTRLevelingFilter from "./filters/tr-leveling.js";
import getPCLevelingFilter from "./filters/pc-leveling.js";
import get2HAxeLevelingFilter from "./filters/2h-axe-leveling.js";
// import getEHeistFilter from "./filters/endless-heist.js";
import getPSlingerLevelingFilter from "./filters/pslinger-leveling.js";
import getAurabotLevelingFilter from "./filters/aurabot-leveling.js";
import getSpellLevelingFilter from "./filters/spell-leveling.js";
import { getCustomItemsFilter } from "./filter-loader.js";
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
    { prefix: "05chaos", suffix: "" },
    isDebug,
    [0, 10]
  );
};

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  writeFilters(
    [getCustomItemsFilter(), getShieldLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00shield_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), getTRLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00toxic_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), getPCLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00pconc_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), getPSlingerLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00pslinger_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), getAurabotLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00aurabot_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), get2HAxeLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "002h-axe_", suffix: "" },
    isDebug,
    [0, 10]
  );

  writeFilters(
    [getCustomItemsFilter(), getSpellLevelingFilter()]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "00spell_", suffix: "" },
    isDebug,
    [0, 10]
  );

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
  //   [
  //     getCustomItemsFilter(),
  //     nemThree,
  //     // topUniquesFilter,
  //     lowCurrencyHider,
  //     otherHider,
  //   ]
  //     .join("\n\n")
  //     .replaceAll(/\n{2,}/g, "\n\n")
  //     .replaceAll(/\t/g, "  "),
  //   outputDir,
  //   { prefix: "nem3_", suffix: "_general" },
  //   isDebug,
  //   [20, 9999]
  // );

  writeFilters(
    [getCustomItemsFilter(), lowCurrencyHider, otherHider]
      .join("\n\n")
      .replaceAll(/\n{2,}/g, "\n\n")
      .replaceAll(/\t/g, "  "),
    outputDir,
    { prefix: "group_", suffix: "_general" },
    isDebug,
    [20, 9999]
  );

  writeFilters(
    `${getCustomItemsFilter()}${otherHider}`,
    outputDir,
    { prefix: "ssf_", suffix: "_general" },
    isDebug,
    [0, 9999]
  );
};
