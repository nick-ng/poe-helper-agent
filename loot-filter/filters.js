export const currencyFilter = () => {
  return `
Show
  Class "Currency"
  BaseType == "Annulment Shard" "Orb of Binding"
  SetFontSize 45
  SetTextColor 210 178 135 255
  SetBorderColor 210 178 135 255

Show
  BaseType "Scroll of Wisdom"
  Class Currency
  StackSize >= 10
  SetTextColor 210 178 135 200
  ##DefaultBackground
  SetBorderColor 213 159 100 200
  SetFontSize 45

Show
  BaseType "Scroll of Wisdom"
  Class Currency
  AreaLevel <= 77
  StackSize >= 6
  SetTextColor 210 178 135 200
  ##DefaultBackground
  SetBorderColor 213 159 100 200
  SetFontSize 45

Show
  BaseType "Portal Scroll"
  Class Currency
  StackSize >= 10
  SetTextColor 100 200 200 200
  ##DefaultBackground
  SetBorderColor 100 200 200 200
  SetFontSize 45

Show
  BaseType "Portal Scroll"
  Class Currency
  AreaLevel <= 77
  StackSize >= 6
  SetTextColor 100 200 200 200
  ##DefaultBackground
  SetBorderColor 100 200 200 200
  SetFontSize 45

Show
  Class "Currency"
  BaseType == "Orb of Alteration" "Chaos Orb" "Orb of Binding" "Orb of Fusing" "Orb of Horizons" "Orb of Scouring" "Orb of Regret" "Orb of Unmaking" "Regal Orb" "Enkindling Orb" "Instilling Orb"
  SetFontSize 45
  SetTextColor 47 252 47 255
  SetBorderColor 47 252 47 255
  MinimapIcon 0 Green Circle
  PlayEffect Green
  CustomAlertSound "sounds/brian-02-doof.mp3"

Show
  Class "Currency"
  BaseType "Catalyst" "Eldritch"
  SetFontSize 45
  SetTextColor 47 252 47 255
  SetBorderColor 47 252 47 255
  MinimapIcon 0 Green Circle
  PlayEffect Green
  CustomAlertSound "sounds/brian-02-doof.mp3"

Show
  Class "Currency"
  BaseType == "Alchemy Shard" "Alteration Shard" "Binding Shard" "Chaos Shard" "Horizon Shard" "Regal Shard"
  SetFontSize 45
  SetTextColor 190 178 135 255
  SetBorderColor 190 178 135 255

Show
  StackSize >= 8
  Class "Currency"
  BaseType == "Blacksmith's Whetstone" "Glassblower's Bauble"
  SetFontSize 45
  SetTextColor 213 159 0 255
  SetBorderColor 213 159 0 255
  MinimapIcon 2 White Circle
  PlayEffect White
  PlayAlertSound 2 300

Show
  StackSize >= 5
  AreaLevel <= 77
  Class "Currency"
  BaseType == "Blacksmith's Whetstone" "Glassblower's Bauble"
  SetFontSize 45
  SetTextColor 213 159 0 255
  SetBorderColor 213 159 0 255
  MinimapIcon 2 White Circle
  PlayEffect White
  PlayAlertSound 2 300

Show
  Class "Divination"
  BaseType == "Abandoned Wealth" "Alluring Bounty" "Brother's Stash" "The Hoarder" "The Long Con" "The Saint's Treasure" "The Scout" "House of Mirrors" "Seven Years Bad Luck" "The Immortal" "Unrequited Love" "Darker Half" "Altered Perception" "Rebirth and Renewal"
  SetFontSize 45
	SetTextColor 255 0 0 255
	SetBackgroundColor 255 255 255 200
	SetBorderColor 255 0 0 255
	MinimapIcon 0 Red Star
	PlayEffect Red
	PlayAlertSound 6 300

Show
  Class "Divination"
  BaseType == "A Sea of Blue" "Acclimatisation" "Chaotic Disposition" "Coveted Possession" "Demigod's Wager" "Emperor's Luck" "Harmony of Souls" "Loyalty" "Lucky Connections" "Lucky Deck" "No Traces" "Parasitic Passengers" "Rain of Chaos" "Society's Remorse" "The Cacophony" "The Cartographer" "The Catalyst" "The Fool" "The Gemcutter" "The Heroic Shot" "The Innocent" "The Inventor" "The Journey" "The Master Artisan" "The Puzzle" "The Rabbit's Foot" "The Scholar" "The Seeker" "The Sephirot" "The Survivalist" "The Tinkerer's Table" "The Tireless Extractor" "The Union" "The Wrath" "Three Faces in the Dark" "Three Voices" "Underground Forest" "Vinia's Token" "Bowyer's Dream" "Draped in Dreams" "Emperor of Purity" "Humility" "Immortal Resolve" "Imperial Legacy" "Rebirth" "The Celestial Justicar" "The Chains that Bind" "The Dapper Prodigy" "The Dark Mage" "The Ethereal" "The Porcupine" "The Sacrifice" "The Warlord" "The White Knight" "Vanity"
  SetFontSize 45
  SetTextColor 47 252 47 255
  SetBorderColor 47 252 47 255
  MinimapIcon 2 Green Triangle
  PlayEffect White
  CustomAlertSound "sounds/brian-02-doof.mp3"
`;
};

export const levelingCurrencyFilter = () => `
Show
  BaseType == "Quicksilver Flask"
  AreaLevel <= 15
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBorderColor 255 255 255 255
  SetBackgroundColor 0 203 221 255
  PlayEffect Green
  MinimapIcon 2 Green Circle
  PlayAlertSound 5 200

Show
  Class "Mana Flask"
  Rarity <= Rare
  SetBackgroundColor 0 0 200 255
  Continue

Show
  AreaLevel = 1
  SetFontSize 45

Show
  AreaLevel <= 23
  Class Currency
  BaseType "Essence of"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

Show
  BaseType "Scroll of Wisdom"
  Class Currency
  SetTextColor 210 178 135
  ##DefaultBackground
  SetBorderColor 213 159 100 200
  SetFontSize 42
  AreaLevel <= 11
  CustomAlertSound "sounds/wisdom.mp3"

Show
  Class Currency
  SetTextColor 0 0 0
  SetBackgroundColor 100 200 200
  SetBorderColor 0 0 0
  SetFontSize 42
  BaseType "Portal Scroll"
  MinimapIcon 2 Grey Star
  PlayEffect Grey
  AreaLevel <= 31
  CustomAlertSound "sounds/portal.mp3"

Show
  Class Currency
  StackSize >= 4
  AreaLevel < 44
  SetTextColor 100 200 200 200
  ##DefaultBackground
  SetBorderColor 100 200 200 150
  SetFontSize 35
  BaseType "Portal Scroll"
  PlayEffect Grey

Show
  AreaLevel < 44
  Class Currency
  BaseType "Blacksmith's Whetstone"
  SetFontSize 45
  SetTextColor 190 178 135 255
  SetBackgroundColor 0 0 0 255
  SetBorderColor 190 178 135 255
  MinimapIcon 2 Grey Cross
  PlayEffect Grey
  CustomAlertSound "sounds/whetstone.mp3"

Show
  AreaLevel < 44
  Class Currency
  BaseType "Orb of Transmutation"
  SetFontSize 45
  SetTextColor 190 178 135 255
  SetBackgroundColor 0 0 0 255
  SetBorderColor 190 178 135 255
  MinimapIcon 2 Grey Cross
  PlayEffect Grey
  CustomAlertSound "sounds/transmute.mp3"

Show
  AreaLevel < 44
  Class Currency
  BaseType "Orb of Alteration"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 210 178 135 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 Grey Circle
  PlayEffect Grey
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
  SetFontSize 45
  BaseType "Iron Ring"
  AreaLevel <= 30
  CustomAlertSound "sounds/iron.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  BaseType "Ruby Ring"
  AreaLevel <= 30
  CustomAlertSound "sounds/ruby ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  BaseType "Sapphire Ring"
  AreaLevel <= 30
  CustomAlertSound "sounds/sapphire ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  BaseType "Topaz Ring"
  AreaLevel <= 30
  CustomAlertSound "sounds/topaz ring.mp3"

Show
  Rarity = Unique
  Class "Rings"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 255 0 0 255
  SetBorderColor 100 100 100 255
  PlayEffect Red

${currencyFilter()}
`;

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

export const lowCurrencyHider = `
Hide
  Class "Currency"
  BaseType ==  "Orb of Chance" "Alteration Shard" "Armourer's Scrap" "Orb of Augmentation" "Portal Scroll" "Scroll of Wisdom"
  AreaLevel > 69
  StackSize < 6

Hide
  Class "Currency"
  BaseType == "Orb of Transmutation" "Blacksmith's Whetstone" "Alchemy Shard"
  AreaLevel > 69
  StackSize < 3
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

export const make3LinkFilter = (
  socketGroup,
  itemClass,
  sound,
  minLevel = 1,
  maxLevel = 44
) => {
  // Level 45: < Act 6
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

  const filterLines = [
    maxLevel ? `    AreaLevel < ${maxLevel}` : null,
    minLevel ? `    AreaLevel >= ${minLevel}` : null,
    "    Sockets < 6",
    "    Rarity <= Rare",
    "    LinkedSockets <= 4",
    `    SocketGroup = ${socketGroup}`,
    `    Class "${itemClass}"`,
    "    SetFontSize 45",
    "    SetBorderColor 200 0 0 255",
    "    SetBackgroundColor 88 0 87 255",
    `    MinimapIcon 0 Cyan ${shape}`,
    `    CustomAlertSound "sounds/${sound}.mp3"`,
  ].filter((a) => a);

  return ["", "", "Show", ...filterLines, "", ""].join("\n");
};

export const make3LinkFilterB = (socketGroup, sound) => {
  let shape = "Pentagon";

  return `
Show
    AreaLevel < 45 # < Act 6
    Sockets < 6
    Rarity <= Rare
    LinkedSockets <= 4
    SocketGroup = ${socketGroup}
    Class "Body Armours" "Boots" "Gloves" "Helmets"
    SetFontSize 45
    SetBorderColor 200 0 0 255
    SetBackgroundColor 88 0 87 255
    MinimapIcon 0 Cyan ${shape}
    CustomAlertSound "sounds/${sound}.mp3"
`;
};

export const make4LinkFilter = (
  socketGroup,
  sound,
  minLevel = 1,
  maxLevel = 44
) => {
  // Blood Aqueduct: 61

  const filterLines = [
    maxLevel ? `    AreaLevel < ${maxLevel}` : null,
    minLevel ? `    AreaLevel >= ${minLevel}` : null,
    "    Sockets < 6",
    "    Rarity <= Rare",
    "    LinkedSockets >= 4",
    `    SocketGroup = ${socketGroup}`,
    '    Class "Body Armours" "Boots" "Gloves" "Helmets"',
    "    SetFontSize 45",
    "    SetBorderColor 200 0 0 255",
    "    SetBackgroundColor 88 0 87 255",
    "    MinimapIcon 0 Orange Pentagon",
    `    CustomAlertSound "sounds/${sound}.mp3"`,
  ].filter((a) => a);

  return ["", "", "Show", ...filterLines, "", ""].join("\n");
};

export const make4LinkFilter2 = (
  { armour, evasion, es },
  maxAreaLevel = 62, // Foothills
  increment = 5
) => {
  const allFilterLines = [];

  for (let n = maxAreaLevel; n >= 25; n -= increment) {
    const filterLines = [
      `    AreaLevel <= ${n}`,
      `    DropLevel >= ${n - 5}`,
      "    Sockets < 6",
      "    Rarity <= Rare",
      "    LinkedSockets >= 4",
      '    Class "Body Armours" "Boots" "Gloves" "Helmets"',
      "    SetFontSize 45",
      armour ? `    BaseArmour >= ${armour}` : null,
      evasion ? `    BaseEvasion >= ${evasion}` : null,
      es ? `    BaseEnergyShield >= ${es}` : null,
      "    SetBorderColor 200 0 0 255",
      "    SetBackgroundColor 88 0 87 255",
      "    MinimapIcon 0 Yellow Pentagon",
      '    CustomAlertSound "sounds/brian-03-bong.mp3"',
    ].filter((a) => a);

    allFilterLines.push(...["", "", "Show", ...filterLines, "", ""]);
  }

  return allFilterLines.join("\n");
};

export const makeColourFilter = (sockets) => {
  return "";
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

${levelingCurrencyFilter()}
`;
};
