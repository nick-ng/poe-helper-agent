import {
  makeAmuletFilter,
  makeBeltFilter,
  makeBodyFilter,
  makeBootsFilter,
  makeGlovesFilter,
  makeHelmFilter,
  makeRingFilter,
  makeWeaponFilter,
} from "./filters.js";

/**
 * @typedef ItemCounts
 * @type {object}
 * @property {number} body
 * @property {number} gloves
 * @property {number} boots
 * @property {number} helm
 * @property {number} ring
 * @property {number} amulet
 * @property {number} belt
 * @property {number} weapon
 *
 * @param {ItemCounts} itemCounts
 *
 * @return {string} item filter fragment
 */
export const getChaosFilter = (itemCounts) => {
  const { body, gloves, boots, helm, ring, amulet, belt, weapon } = itemCounts;

  return [
    `############################
#### Chaos Filter Start ####
############################`,
    makeBodyFilter(body),
    makeGlovesFilter(gloves),
    makeBootsFilter(boots),
    makeHelmFilter(helm),
    makeRingFilter(ring),
    makeAmuletFilter(amulet),
    makeBeltFilter(belt),
    makeWeaponFilter(weapon),
    `##########################
#### Chaos Filter End ####
##########################

`,
  ].join("\n\n");
};
