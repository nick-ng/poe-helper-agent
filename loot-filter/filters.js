import { getFilterFragment } from "./filter-loader.js";
import {
  make3LinkFilter,
  make4LinkFilter,
  makeBaseTypeFilter,
} from "./common/generators.js";

export const uniqueDivinationCards = makeBaseTypeFilter(
  [
    "The Coming Storm", // Lightning Coil
    "Dark Temptation", // Obliteration
    "A Dab of Ink", // The Poet's Pen
    "A Fate Worse Than Death", // Cortex
    "Broken Truce", // Cold Iron Point
    "Lethean Temptation", // Nebulis
  ],
  [
    "SetFontSize 45",
    "SetTextColor 175 96 37 255",
    "SetBorderColor 47 252 47 255",
    "MinimapIcon 2 Green Triangle",
    "PlayEffect Brown",
    'CustomAlertSound "sounds/brian-03-bong.mp3"',
  ]
);

export const baseFilter = () =>
  [
    getFilterFragment("ssf-bases-top", {}),
    getFilterFragment("base", {}),
    uniqueDivinationCards,
    `Show
  GemLevel > 10
  Class "Gems"
  SetFontSize 45
  SetTextColor 20 240 240 255
  SetBorderColor 0 0 240 255
  CustomAlertSound "sounds/brian-01-clang.mp3"
`,
  ].join("\n\n");

export const levelingBaseFilter = () =>
  [getFilterFragment("leveling"), baseFilter()].join("\n\n");

export const topUniquesFilter = `
# Top Uniques
Show
  BaseType == "Champion Kite Shield" "Ghastly Eye Jewel" "Silk Gloves" "Blunt Arrow Quiver Piece" "Legion Sword Piece" "Hypnotic Eye Jewel" "Carnal Sceptre" "Archon Kite Shield" "Timeless Jewel" "Runic Crown" "Small Cluster Jewel" "Steel Ring" "Ezomyte Dagger" "Carnal Boots" "Jewelled Foil" "Fluted Bascinet" "Crusader Boots" "Sadist Garb" "Saint's Hauberk" "Prismatic Jewel" "Greatwolf Talisman" "Harlequin Mask" "Assassin's Boots" "Imperial Staff Piece" "Archon Kite Shield Piece" "Callous Mask Piece" "Cloth Belt Piece" "Stealth Boots" "Arcanist Gloves" "Wyrmscale Doublet" "Zodiac Leather" "Glorious Plate" "Exquisite Leather" "Jingling Spirit Shield" "Granite Flask" "Pinnacle Tower Shield" "Ornate Quiver" "Medium Cluster Jewel" "Vaal Rapier" "Blood Raiment" "Siege Axe" "Rawhide Boots" "Occultist's Vestment" "Sapphire Flask" "Ezomyte Tower Shield" "Gladiator Plate" "Royal Burgonet" "Imperial Maul" "Unset Amulet" "Large Cluster Jewel" "Prophecy Wand" "Citadel Bow"
  Rarity = Unique
  AreaLevel > 69
  SetFontSize 45
  SetTextColor 255 0 0 255
  SetBackgroundColor 255 255 255 255
  SetBorderColor 255 0 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  PlayAlertSound 6 300

# Unsure Uniques
Show
  BaseType == "Goathide Boots" "Ezomyte Burgonet" "Sinner Tricorne" "Cobalt Jewel" "Crimson Jewel" "Vaal Spirit Shield" "Fiend Dagger" "Assassin Bow" "Two-Point Arrow Quiver" "Onyx Amulet" "Paua Amulet" "Judgement Staff" "Turquoise Amulet" "Leather Belt" "Heavy Belt" "Eternal Sword" "Gavel" "Viridian Jewel" "Varnished Coat" "Ebony Tower Shield" "Prophet Crown" "Citrine Amulet" "Nightmare Bascinet" "Imperial Skean" "Sorcerer Boots" "Iron Flask" "Agate Amulet" "Necromancer Silks" "Jade Amulet" "Highborn Staff" "Sage Wand" "Studded Belt" "Stibnite Flask" "Amber Amulet" "Elegant Round Shield"
  Rarity = Unique
  AreaLevel > 69
  SetFontSize 45
  LinkedSockets < 5
  SetTextColor 255 0 0 255
  SetBackgroundColor 200 200 200 255
  SetBorderColor 255 0 0 255
  MinimapIcon 0 Red Cross
  PlayEffect Red
  PlayAlertSound 2 300
`;

export const oniGoroshiFarm = `
Show
  Class "Sword"
  LinkedSockets = 6
  SetFontSize 45
  SetTextColor 0 0 255 255
  SetBackgroundColor 255 255 255 255
  SetBorderColor 0 0 255 255
  MinimapIcon 0 Blue Star
  PlayEffect Blue
  PlayAlertSound 6 300

Show
  Class "Boots"
  Rarity >= Magic
  SetFontSize 45
  SetBorderColor 200 0 200
  MinimapIcon 0 Purple Pentagon

Show
  SocketGroup = GG
  Rarity < Magic
  Class "Boots" "Gloves" "Helmets"
  SetFontSize 45
  SetBorderColor 200 0 0
  MinimapIcon 0 Orange Pentagon

Show
  SocketGroup = GG
  Rarity < Magic
  Class "Body Armours"
  SetFontSize 25
  SetBorderColor 200 0 0

Show  # %D2 $type->rr->amuring $tier->t3
  Rarity < Magic
  BaseType "Iron Ring"
  SetFontSize 45
  SetBackgroundColor 0 0 0 255
  SetBorderColor 200 0 0

Show
  Class "Two Hand"
  SetFontSize 45
  SetBorderColor 200 200 0
  MinimapIcon 0 Yellow Pentagon
`;

export const otherHider = `
`;

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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    Sockets < 6
    LinkedSockets < 5
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Identified False
    SetBackgroundColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
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
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Class "Bow"
    Rarity Rare
    Height 3
    Width 2
    Identified False
    Sockets < 6
    LinkedSockets < 5
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
    SetFontSize ${Math.ceil(size)}

Show
    AreaLevel <= 68
    ItemLevel >= 60
    ItemLevel <= 70
    Rarity Rare
    Height 3
    Width 1
    Identified False
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
    SetFontSize ${Math.ceil(size)}`;
};

export const makeAllLinkFilters = () => {
  return [
    // 4-Links
    // Aura Bot
    make4LinkFilter("RRRB", "3r1b"),
    make4LinkFilter("RRBB", "2b2r"),
    // Caster, Toxic Rain
    make4LinkFilter("BBBG", "3b1g"),
    make4LinkFilter("GGGB", "3g1b"),
    make4LinkFilter("GGGG", "4g"),
    make4LinkFilter("BBBB", "4b"),
    make4LinkFilter("RRRG", "ding"),
    make4LinkFilter("RRRR", "ding"),
    make4LinkFilter("RRGG", "ding"),
    `
Show
  AreaLevel < 40
  Sockets < 6
  Rarity <= Rare
  LinkedSockets >= 4
  SocketGroup = GGGG GGGB
  Class "Bow"
  SetFontSize 45
  SetBorderColor 200 200 0
  MinimapIcon 0 Orange Cross
  PlayAlertSound 2 70
`,

    // 3-Links
    // Caster
    make3LinkFilter("BBB", "Wand", "3b wand"),
    make3LinkFilter("BBB", "Boots", "3b boots"),
    make3LinkFilter("BBB", "Gloves", "3b gloves"),
    make3LinkFilter("BBB", "Helmets", "3b helm"),
    make3LinkFilter("BBB", "Body Armours", "3b body"),
    make3LinkFilter("BBG", "Wand", "2b1g wand"),
    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BGG", "Boots", "2g1b boots"),
    make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
    make3LinkFilter("BGG", "Helmets", "2g1b helm"),
    make3LinkFilter("BGG", "Body Armours", "2g1b body"),
    make3LinkFilter("GGG", "Boots", "3g boots"),
    make3LinkFilter("GGG", "Gloves", "3g gloves"),
    make3LinkFilter("GGG", "Helmets", "3g helm"),
    make3LinkFilter("GGG", "Body Armours", "3g body"),
    make3LinkFilter("GGR", "Boots", "2g1r"),
    make3LinkFilter("GGR", "Gloves", "2g1r"),
    make3LinkFilter("GGR", "Helmets", "2g1r"),
    make3LinkFilter("GGR", "Body Armours", "2g1r"),
    make3LinkFilter("RRR", "Boots", "ding"),
    make3LinkFilter("RRR", "Gloves", "ding"),
    make3LinkFilter("RRR", "Helmets", "ding"),
    make3LinkFilter("RRR", "Body Armours", "ding"),
    make3LinkFilter("RRG", "Boots", "ding"),
    make3LinkFilter("RRG", "Gloves", "ding"),
    make3LinkFilter("RRG", "Helmets", "ding"),
    make3LinkFilter("RRG", "Body Armours", "ding"),
  ].join("\n");
};

export const rusticSash = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 70
  CustomAlertSound "sounds/rustic sash.mp3"`;

export const makeLevelingFilter = () => {
  return `
${topUniquesFilter}

${levelingBaseFilter()}
`;
};
