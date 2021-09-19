const LOW_ITEM_THRESHOLD = 3;
const HIGH_ITEM_THRESHOLD = 8;
const LOW_FONT_SIZE = 15;
const HIGH_FONT_SIZE = 45;

/**
 * @param {number} count
 * @return {number} size
 */
const getSize = (count) => {
  if (count < LOW_ITEM_THRESHOLD) {
    return HIGH_FONT_SIZE;
  }

  const sizeDiff = HIGH_FONT_SIZE - LOW_FONT_SIZE;
  const countDiff = HIGH_ITEM_THRESHOLD - LOW_ITEM_THRESHOLD;
  const sizePerCount = sizeDiff / countDiff;

  const count2 = HIGH_ITEM_THRESHOLD - count;

  return Math.floor(LOW_FONT_SIZE + count2 * sizePerCount);
};

/**
 * @param {number} count
 */
export const makeBodyFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Body: ${count}`;
  }
  return `Show
    Class "Body Armour"
    SetBorderColor 255 255 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    Sockets < 6
    LinkedSockets < 5
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeGlovesFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Gloves: ${count}`;
  }
  return `Show
    Class "Gloves"
    SetBorderColor 255 0 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeBootsFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Boots: ${count}`;
  }
  return `Show
    Class "Boots"
    SetBorderColor 0 0 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeHelmFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Helm: ${count}`;
  }
  return ` Show
    Class "Helm"
    SetBorderColor 0 255 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeRingFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Ring: ${count}`;
  }
  return `Show
    Class "Ring"
    SetBorderColor 255 0 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeAmuletFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Amulet: ${count}`;
  }
  return `Show
    Class "Amulet"
    SetBorderColor 255 255 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeBeltFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Belt: ${count}`;
  }
  return `Show
    Class "Belt"
    SetBorderColor 0 255 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};

/**
 * @param {number} count
 */
export const makeWeaponFilter = (count) => {
  if (count > HIGH_ITEM_THRESHOLD) {
    return `# Weapon: ${count}`;
  }
  return `Show
    ItemLevel >= 60
    Class "Bow"
    Rarity Rare
    Height 3
    Width 2
    Identified False
    Sockets < 6
    LinkedSockets < 5
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}

Show
    ItemLevel >= 60
    Rarity Rare
    Height 3
    Width 1
    Identified False
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${getSize(count)}`;
};
