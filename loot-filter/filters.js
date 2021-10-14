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
    ItemLevel >= 60
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
    ItemLevel >= 60
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
    ItemLevel >= 60
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
    ItemLevel >= 60
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
    ItemLevel >= 60
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
    ItemLevel >= 60
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
    SetTextColor 255 200 0 # Chaos Recipe
    SetFontSize ${Math.ceil(size)}

Show
    ItemLevel >= 60
    Rarity Rare
    Height 3
    Width 1
    Identified False
    SetBackgroundColor 0 0 0
    SetBorderColor 0 0 0
    SetTextColor 255 200 0 # Chaos Recipe
    SetFontSize ${Math.ceil(size)}`;
};

const make3LinkFilter = (socketGroup, itemClass, sound) => {
  let shape = "Pentagon";

  switch (itemClass) {
    case "Wand":
      shape = "Cross";
      break;
    case "Helmets":
      shape = "Circle";
      break;
    case "Gloves":
      shape = "Triangle";
      break;
    case "Boots":
      shape = "Square";
      break;
    default:
      shape = "Pentagon";
  }

  return `
Show
    AreaLevel < 45 # < Act 6
    Sockets < 6
    Rarity Normal Magic Rare
    LinkedSockets <= 4
    SocketGroup = ${socketGroup}
    Class "${itemClass}"
    SetFontSize 45
    SetBorderColor 200 0 0
    MinimapIcon 0 Cyan ${shape}
    CustomAlertSound "sounds/${sound}.mp3"
`;
};

const make4LinkFilter = (socketGroup, sound) => {
  return `
Show
  AreaLevel < 62 # Blood Aqueduct: 61
  Sockets < 6
  Rarity Normal Magic Rare
  LinkedSockets >= 4
  SocketGroup = ${socketGroup}
  Class "Body Armours" "Boots" "Gloves" "Helmets"
  SetFontSize 45
  SetBorderColor 200 200 0
  MinimapIcon 0 Orange Pentagon
  CustomAlertSound "sounds/${sound}.mp3"
`;
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
    `
Show
  AreaLevel < 45
  Sockets < 6
  Rarity Normal Magic Rare
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
  ].join("\n");
};

export const makeLevelingFilter = () => {
  return `
Show
  AreaLevel < 65
  Class Currency
  BaseType "Muttering Essence of" "Wailing Essence of" "Weeping Essence of" "Whispering Essence of"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

Show
  Class Currency
  SetTextColor 210 178 135
  SetBackgroundColor 0 0 0 255
  SetBorderColor 213 159 100 200
  SetFontSize 42
  BaseType "Scroll of Wisdom"
  AreaLevel <= 11
  CustomAlertSound "sounds/wisdom.mp3"

Show
  Class Currency
  SetTextColor 0 0 0
  SetBackgroundColor 100 200 200
  SetBorderColor 0 0 0
  SetFontSize 42
  BaseType "Portal Scroll"
  AreaLevel <= 31
  CustomAlertSound "sounds/portal.mp3"

Show
  AreaLevel <= 61
  Class Currency
  BaseType "Blacksmith's Whetstone"
  SetFontSize 45
  SetTextColor 170 158 130
  SetBorderColor 190 178 135 180
  SetBackgroundColor 0 0 0 255
  CustomAlertSound "sounds/whetstone.mp3"

Show
  AreaLevel <= 61
  Class Currency
  BaseType "Orb of Transmutation"
  SetFontSize 45
  SetTextColor 170 158 130 220
  SetBorderColor 75 75 75 255
  SetBackgroundColor 0 0 0 255
  CustomAlertSound "sounds/transmute.mp3"

Show
  AreaLevel <= 61
  Class Currency
  BaseType "Orb of Alteration"
  SetFontSize 45
  SetTextColor 170 158 130 220
  SetBorderColor 30 50 100 255
  SetBackgroundColor 0 0 0 255
  CustomAlertSound "sounds/alteration.mp3"

Show
  AreaLevel <= 72
  Class "Currency"
  BaseType "Orb of Chance"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 210 178 135 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 Grey Circle
  PlayEffect Grey
  CustomAlertSound "sounds/chance.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 38
  ItemLevel >= 1
  BaseType "Iron Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/iron.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 38
  ItemLevel >= 1
  BaseType "Ruby Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/ruby ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 38
  ItemLevel >= 1
  BaseType "Sapphire Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/sapphire ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 38
  ItemLevel >= 1
  BaseType "Topaz Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/topaz ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 38
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 20
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  AreaLevel < 35
  Sockets < 6
  LinkedSockets < 4
  Rarity Magic Rare
  SetFontSize 38
  SetBackgroundColor 0 0 0 255
  SetBorderColor 40 40 40
`;
};
