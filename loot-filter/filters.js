/**
 * @param {number} size
 */
export const makeBodyFilter = (size) => {
  if (size <= 0) {
    return `# Body: ${Math.ceil(size)}`;
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
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeGlovesFilter = (size) => {
  if (size <= 0) {
    return `# Gloves: ${Math.ceil(size)}`;
  }
  return `Show
    Class "Gloves"
    SetBorderColor 255 0 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeBootsFilter = (size) => {
  if (size <= 0) {
    return `# Boots: ${Math.ceil(size)}`;
  }
  return `Show
    Class "Boots"
    SetBorderColor 0 0 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeHelmFilter = (size) => {
  if (size <= 0) {
    return `# Helm: ${Math.ceil(size)}`;
  }
  return ` Show
    Class "Helm"
    SetBorderColor 0 255 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeRingFilter = (size) => {
  if (size <= 0) {
    return `# Ring: ${Math.ceil(size)}`;
  }
  return `Show
    Class "Ring"
    SetBorderColor 255 0 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeAmuletFilter = (size) => {
  if (size <= 0) {
    return `# Amulet: ${Math.ceil(size)}`;
  }
  return `Show
    Class "Amulet"
    SetBorderColor 255 255 0
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeBeltFilter = (size) => {
  if (size <= 0) {
    return `# Belt: ${Math.ceil(size)}`;
  }
  return `Show
    Class "Belt"
    SetBorderColor 0 255 255
    ItemLevel >= 60
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};

/**
 * @param {number} size
 */
export const makeWeaponFilter = (size) => {
  if (size <= 0) {
    return `# Weapon: ${Math.ceil(size)}`;
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
    SetFontSize ${Math.ceil(size)}

Show
    ItemLevel >= 60
    Rarity Rare
    Height 3
    Width 1
    Identified False
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 255 119
    SetFontSize ${Math.ceil(size)}`;
};
