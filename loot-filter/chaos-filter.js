import {
  makeAmuletFilter,
  makeBeltFilter,
  makeBodyFilter,
  makeBootsFilter,
  makeGlovesFilter,
  makeHelmFilter,
  makeRingFilter,
  makeWeaponFilter,
  makeAllLinkFilters,
  makeLevelingFilter,
} from "./filters.js";

/**
 * @typedef ItemSizes
 * @type {object}
 * @property {number} body
 * @property {number} glove
 * @property {number} boot
 * @property {number} helm
 * @property {number} ring
 * @property {number} amulet
 * @property {number} belt
 * @property {number} weapon
 *
 * @param {ItemSizes} itemSizes
 *
 * @return {string} item filter fragment
 */
export const getChaosFilter = (itemSizes, chaosOnly = false) => {
  const { body, glove, boot, helm, ring, amulet, belt, weapon } = itemSizes;

  return [
    `###############################
#### Leveling Filter Start ####
###############################`,
    chaosOnly ? "" : makeLevelingFilter(),
    chaosOnly ? "" : makeAllLinkFilters(),
    `############################
#### Chaos Filter Start ####
############################`,
    makeBodyFilter(body),
    makeGlovesFilter(glove),
    makeBootsFilter(boot),
    makeHelmFilter(helm),
    makeRingFilter(ring),
    makeAmuletFilter(amulet),
    makeBeltFilter(belt),
    makeWeaponFilter(weapon),
    `##########################
#### Chaos Filter End ####
##########################

`,
  ].join("\n");
};
