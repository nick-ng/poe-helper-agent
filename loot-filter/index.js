import { oniGoroshiFarm, baseFilter } from "./filters.js";
import getShieldFilter from "./filters/shield.js";
import getPoisonFilter from "./filters/poison.js";
import get2HAxeFilter from "./filters/2h-melee.js";
import getSpellFilter from "./filters/spell.js";
import getTrapFilter from "./filters/traps.js";
import getClawFilter from "./filters/claw.js";
import getPhysDotFilter from "./filters/phys-dot.js";
import { getCustomItemsFilter, getFilterFragment } from "./filter-loader.js";
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

export const makeGeneralFilter = (outputDir, isDebug = false) => {
  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), get2HAxeFilter()],
    outputDir,
    { prefix: "0_2h-axe_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getPhysDotFilter()],
    outputDir,
    { prefix: "0_phys-dot_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getShieldFilter()],
    outputDir,
    { prefix: "0_shield_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getSpellFilter()],
    outputDir,
    { prefix: "0_spell_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getPoisonFilter()],
    outputDir,
    { prefix: "0_poison_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getTrapFilter()],
    outputDir,
    { prefix: "0_traps_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), getClawFilter()],
    outputDir,
    { prefix: "0_claw_", suffix: "" },
    isDebug,
    [5, 11]
  );

  writeFilters(
    [getCustomItemsFilter(), getSsfUniquesFilter(), baseFilter()],
    outputDir,
    { prefix: "1_t16-maps_", suffix: "" },
    isDebug,
    [19, 25]
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
  //     getCustomItemsFilter(), getSsfUniquesFilter(),
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
  //     getCustomItemsFilter(), getSsfUniquesFilter(),
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
  //     getCustomItemsFilter(), getSsfUniquesFilter(),
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
  //     getCustomItemsFilter(), getSsfUniquesFilter(),
  //     getAurabotLevelingFilter(),
  //     getFilterFragment("ssf-bases"),
  //   ],
  //   outputDir,
  //   { prefix: "00aurabot_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), getSsfUniquesFilter(), getEHeistFilter()]
  //     .join("\n\n")
  //     .replaceAll(/\n{2,}/g, "\n\n")
  //     .replaceAll(/\t/g, "  "),
  //   outputDir,
  //   { prefix: "eheist_", suffix: "" },
  //   isDebug,
  //   [0, 10]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), getSsfUniquesFilter(), otherHider],
  //   outputDir,
  //   { prefix: "group_", suffix: "_general" },
  //   isDebug,
  //   [20, 9999]
  // );

  // writeFilters(
  //   [getCustomItemsFilter(), getSsfUniquesFilter(), getFilterFragment("ssf-bases"), otherHider],
  //   outputDir,
  //   { prefix: "ssf_", suffix: "_general" },
  //   isDebug,
  //   [0, 9999]
  // );
};
