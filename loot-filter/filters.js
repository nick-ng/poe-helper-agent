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

# Hidden Uniques
Hide
  BaseType == "Goat's Horn" "Gut Ripper" "Colossal Tower Shield" "Timeworn Claw" "Opal Wand" "Quartz Wand" "Buckskin Tunic" "Amethyst Flask" "Steelscale Gauntlets" "Basket Rapier" "Bronze Sceptre" "Two-Toned Boots" "Slaughter Knife" "Clutching Talisman" "Sanctified Life Flask" "Bone Armour" "Marble Amulet" "Meatgrinder" "War Hammer" "Trapper Boots" "Cutthroat's Garb" "Auric Mace" "Elegant Foil" "Scholar's Robe" "Diamond Flask" "Assassin's Garb" "Silken Hood" "Serrated Arrow Quiver" "Pine Buckler" "Vine Circlet" "Regicide Mask" "Latticed Ringmail" "Plague Mask" "Thresher Claw" "Baroque Round Shield" "Estoc" "Dragonscale Boots" "Karui Sceptre" "Deerskin Boots" "Satin Gloves" "Sage's Robe" "Large Hybrid Flask" "Greater Mana Flask" "Lunaris Circlet" "Royal Bow" "Lion Sword" "Vaal Sceptre" "Cleaver" "Infernal Axe" "Iron Staff" "Grinning Fetish" "Etched Greatsword" "Steel Kite Shield" "Goliath Gauntlets" "Dusk Blade" "Antique Rapier" "Iron Hat" "Strapped Mitts" "Tricorne" "Runic Helm" "Primordial Staff" "Gnarled Branch" "Jagged Foil" "Dream Mace" "Ironscale Gauntlets" "Wild Leather" "Vaal Mask" "Bronze Gauntlets" "Burnished Spiked Shield" "Spiked Club" "Skinning Knife" "Corrugated Buckler" "Velvet Slippers" "Mind Cage" "Royal Skean" "Deicide Mask" "Soldier Helmet" "Ranger Bow" "Sledgehammer" "Samnite Helmet" "Decimation Bow" "Elder Sword" "Supreme Spiked Shield" "Steelhead" "Samite Gloves" "Painted Buckler" "Karui Chopper" "Conquest Chainmail" "Zealot Helmet" "Ezomyte Blade" "Ivory Spirit Shield" "Elegant Sword" "Sanctified Mana Flask" "Festival Mask" "Driftwood Wand" "Ornate Ringmail" "Desert Brigandine" "Bronzescale Boots" "Iron Gauntlets" "Harmonic Spirit Shield" "Compound Spiked Shield" "Fossilised Spirit Shield" "Platinum Kris" "Tribal Circlet" "Steel Circlet" "Runic Gauntlets" "Steel Gauntlets" "Slink Gloves" "Engraved Wand" "Flaying Knife" "Aventail Helmet" "Tomahawk" "Imbued Wand" "Fright Claw" "Enameled Buckler" "Rotfeather Talisman" "Abyssal Axe" "Black Maw Talisman" "Runic Gages" "Strapped Boots" "Harbinger Bow" "Crystal Sceptre" "Demon's Horn" "Lion Pelt" "Wrapped Mitts" "Shagreen Gloves" "Vanguard Belt" "Bone Circlet" "Twilight Blade" "Ornate Sword" "Conjurer Boots" "Riveted Boots" "Ursine Pelt" "Shadow Axe" "Broadhead Arrow Quiver" "Ancient Greaves" "Decorative Axe" "Spike-Point Arrow Quiver" "War Sword" "Shagreen Boots" "Boot Knife" "Great Helmet" "Laminated Kite Shield" "Ezomyte Axe" "Highland Blade" "Quicksilver Flask" "Recurve Bow" "Loricated Ringmail" "Wool Gloves" "Soldier Gloves" "Brass Spirit Shield" "Chain Gloves" "Scholar Boots" "Bastard Sword" "Platinum Sceptre" "Secutor Helm" "Bronzescale Gauntlets" "Copper Plate" "Spidersilk Robe" "Iron Sceptre" "Plated Greaves" "Dragonscale Gauntlets" "Murderous Eye Jewel" "Tiger Sword" "Close Helmet" "Royal Sceptre" "Sharkskin Boots" "Headsman Axe" "Destroyer Regalia" "Studded Round Shield" "Chiming Spirit Shield" "Siege Helmet" "Teak Round Shield" "Whalebone Rapier" "Raven Mask" "Visored Sallet" "Sabre" "Sharkskin Tunic" "Golden Mask" "Throat Stabber" "Vile Staff" "Bismuth Flask" "Simple Robe" "Vaal Buckler" "Reinforced Tower Shield" "Antique Greaves" "Military Staff" "Mesh Gloves" "Cedar Tower Shield" "Searching Eye Jewel" "Eternal Burgonet" "Full Scale Armour" "Conjurer Gloves" "Dread Maul" "Holy Chainmail" "Mesh Boots" "Rotted Round Shield" "Poleaxe" "Boot Blade" "Awl" "Ancient Gauntlets" "Wyrmscale Gauntlets" "Coiled Staff" "Polished Spiked Shield" "Grand Mana Flask" "Silver Flask" "Crystal Wand" "Golden Plate" "Titan Gauntlets" "Goliath Greaves" "Death Bow" "Despot Axe" "Sentinel Jacket" "Maelström Staff" "Velvet Gloves" "Rusted Sword" "Ironscale Boots" "Callous Mask" "Rustic Sash" "Gemstone Sword" "Great Crown" "Quartz Flask" "Ornate Mace" "Leather Hood" "Brass Maul" "Elegant Ringmail" "Ambusher" "Imperial Claw" "Crusader Gloves" "Reaver Sword" "Goathide Gloves" "Legion Sword" "Sharktooth Arrow Quiver" "Titan Greaves" "Terror Maul" "Nailed Fist" "Woodsplitter" "Imperial Bow" "Iron Mask" "Blunt Arrow Quiver" "Lacquered Buckler" "Infernal Sword" "Jagged Maul" "Tornado Wand" "Spine Bow" "Carnal Armour" "Gladius" "Crude Bow" "Plank Kite Shield" "Long Bow" "Vaal Regalia" "Jade Hatchet" "Royal Staff" "Reinforced Greaves"
  Rarity = Unique
  AreaLevel > 69
  LinkedSockets < 5
`;

export const nemThree = `
Show  # Good Large Cluster Jewels
  EnchantmentPassiveNum = 8
  ItemLevel >= 50
  Rarity <= Rare
  BaseType "Large Cluster Jewel"
  EnchantmentPassiveNode "Physical Damage" "Chaos Damage" "Minion Damage" "Cold Damage" "Lightning Damage"
  SetFontSize 45
  SetTextColor 0 200 0 255
  SetBackgroundColor 255 255 255 255
  SetBorderColor 0 200 0 255
  MinimapIcon 1 Green Pentagon
  PlayEffect Green
  PlayAlertSound 2 300

Show
  MapTier <= 5
  AreaLevel >= 77
  Class "Maps"

Show
  Class "Currency"
  BaseType "Simple Sextant" "Cartographer's Chisel"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 249 150 25 255
  SetBorderColor 255 0 0 255
  MinimapIcon 2 Pink Circle
  PlayEffect Pink
  PlayAlertSound 2 300

Show  # %H5 $type->maps $tier->maps_b_t13
  MapTier >= 14
  Rarity <= Rare
  Class "Maps"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 255 255 255 255
  MinimapIcon 2 Grey Square
  PlayAlertSound 5 300

Show  # %H5 $type->maps $tier->maps_b_t13
  MapTier >= 11
  Rarity <= Rare
  Class "Maps"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 200 200 200 255
  MinimapIcon 2 Grey Square

Show
  Class "Currency"
  BaseType "Simple Sextant" "Cartographer's Chisel"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 249 150 25 255
  SetBorderColor 255 0 0 255
  MinimapIcon 2 Pink Circle
  PlayEffect Pink
  PlayAlertSound 2 300

Show  # %H4 $type->currency $tier->t6chrom
  Class "Currency"
  BaseType "Noxious Catalyst" "Orb of Alteration" "Orb of Fusing"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 210 178 135 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 Grey Circle
  PlayEffect Grey

Show  # %H5 $type->currency $tier->t5alchemy
  Class "Currency"
  BaseType == "Orb of Binding" "Abrasive Catalyst" "Ancient Shard" "Annulment Shard" "Bestiary Orb" "Blessed Orb" "Facetor's Lens" "Gemcutter's Prism" "Harbinger's Shard" "Intrinsic Catalyst" "Orb of Alchemy" "Orb of Horizons" "Orb of Regret" "Orb of Scouring" "Regal Orb" "Simple Sextant" "Tainted Armourer's Scrap" "Tainted Jeweller's Orb" "Turbulent Catalyst" "Vaal Orb"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 213 159 0 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 White Circle
  PlayEffect White
  PlayAlertSound 2 300

Show  # %H4 $type->currency $tier->t6chrom
  Class "Currency"
  BaseType == "Enkindling Orb" "Glassblower's Bauble" "Imbued Catalyst" "Instilling Orb" "Noxious Catalyst" "Orb of Alteration" "Orb of Fusing"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 210 178 135 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 Grey Circle
  PlayEffect Grey
  PlayAlertSound 2 300

Show  # %H4 $type->currency $tier->t6chrom
  Class "Currency"
  BaseType == "Chromatic Orb"
  StackSize >= 3
  SetFontSize 35
  SetTextColor 0 0 0 255
  SetBackgroundColor 210 178 135 255
  SetBorderColor 0 0 0 255
  MinimapIcon 2 Grey Circle
  PlayEffect Grey
  PlayAlertSound 2 300

Show  # %H5 $type->currency->splinter->simulacrum $tier->t5
  Class "Currency"
  BaseType "Simulacrum Splinter"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 65 20 80
  SetBorderColor 130 15 255 255
  MinimapIcon 2 Grey Circle

Show  # %H5 $type->currency->splinter $tier->t2
  Class "Currency"
  BaseType == "Timeless Eternal Empire Splinter" "Timeless Karui Splinter"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 65 20 80
  SetBorderColor 130 15 255 255
  MinimapIcon 2 Grey Circle

Show  # %H4 $type->currency->splinter $tier->t3
  Class "Currency"
  BaseType == "Splinter of Esh" "Splinter of Tul" "Splinter of Uul-Netol" "Splinter of Xoph"
  SetFontSize 40
  SetTextColor 255 255 255 255
  SetBackgroundColor 65 20 80
  SetBorderColor 115 115 115 255
  MinimapIcon 2 Grey Circle

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
  minLevel,
  maxLevel = 45
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
    "    SetBorderColor 200 0 0",
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
    SetBorderColor 200 0 0
    MinimapIcon 0 Cyan ${shape}
    CustomAlertSound "sounds/${sound}.mp3"
`;
};

export const make4LinkFilter = (
  socketGroup,
  sound,
  minLevel,
  maxLevel = 62
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
    "    SetBorderColor 200 0 0",
    "    MinimapIcon 0 Orange Pentagon",
    `    CustomAlertSound "sounds/${sound}.mp3"`,
  ].filter((a) => a);

  return ["", "", "Show", ...filterLines, "", ""].join("\n");
};

export const makeColourFilter = (sockets) => {
  return `
Show
  AreaLevel < 30
  Sockets < 6${sockets}
  Rarity <= Rare
  LinkedSockets < 3
  Class "Body Armours" "Boots" "Gloves" "Helmets"
  SetFontSize 35
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

export const levelingCurrencyFilter = `
Show
  Class "Life Flask"
  Rarity <= Rare
  SetBackgroundColor 200 0 0 255
  Continue

Show
  Class "Mana Flask"
  Rarity <= Rare
  SetBackgroundColor 0 0 200 255
  Continue

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
  MinimapIcon 2 Grey Star
  PlayEffect Grey
  AreaLevel <= 31
  CustomAlertSound "sounds/portal.mp3"

Show
  Class Currency
  StackSize >= 4
  AreaLevel <= 67
  SetTextColor 0 0 0
  SetBackgroundColor 100 200 200
  SetBorderColor 0 0 0
  SetFontSize 35
  BaseType "Portal Scroll"
  PlayEffect Grey

Show
  Class Currency
  StackSize >= 6
  SetTextColor 0 0 0
  SetBackgroundColor 100 200 200
  SetBorderColor 0 0 0
  SetFontSize 35
  BaseType "Portal Scroll"
  PlayEffect Grey

Show
  AreaLevel <= 61
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
  AreaLevel <= 61
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
  AreaLevel <= 61
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
  ItemLevel >= 1
  BaseType "Iron Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/iron.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Ruby Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/ruby ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Sapphire Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/sapphire ring.mp3"

Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Topaz Ring"
  ItemLevel <= 20
  CustomAlertSound "sounds/topaz ring.mp3"

Show
  Rarity = Unique
  Class "Rings"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 255 0 0 255
  SetBorderColor 100 100 100 255
  PlayEffect Red
`;

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

${levelingCurrencyFilter}
`;
};
