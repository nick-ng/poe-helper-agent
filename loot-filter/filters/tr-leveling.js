import {
  make3LinkFilter,
  make3LinkFilterB,
  make4LinkFilter,
  makeColourFilter,
  levelingCurrencyFilter,
} from "../filters.js";

const bows = [
  "Short Bow",
  "Royal Bow",
  "Reflex Bow",
  "Grove Bow",
  "Highborn Bow",
  "Steelwood Bow",
  "Imperial Bow",
  "Thicket Bow",
  "Maraketh Bow",
];

const custom = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 30
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  BaseType "Long Bow" "Crude Bow" "Short Bow" "Imperial Bow"
  Rarity Unique
  SetFontSize 45
  SetBackgroundColor 255 0 255 255
  SetBorderColor 255 255 255 255
  PlayAlertSound 16 200
  MinimapIcon 1 Pink Star

Show
  BaseType "Long Bow" "Crude Bow" "Short Bow" "Imperial Bow"
  Rarity Unique
  SetFontSize 35
  SetBackgroundColor 255 0 255 255
  SetBorderColor 214 126 0 255
  MinimapIcon 1 Pink Cross

Show
  AreaLevel <= 75
  BaseType == "${bows.join('" "')}"
  ItemLevel >= 25
  SetFontSize 45
  Rarity <= Rare
  SetBackgroundColor 255 0 255 255
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross
  PlayAlertSound 16 200
`;

const weapons = [
  [12, "Longsword", true],
  [18, "Woodsplitter", true],
  [18, "Bastard Sword", true],
  [23, "Poleaxe", true],
  [28, "Double Axe", true],
  [33, "Gilded Axe", true],
  [37, "Shadow Axe", false],
  // [41, "Jasper Chopper", true],
  // [41, "Dagger Axe", true],
  // [45, "Timber Axe", true],
  // [49, "Headsman Axe", true],
  // [52, "Labrys", true],
  // [55, "Noble Axe", true],
  // [59, "Abyssal Axe", false],
];

function makeWeaponBlock(maxAreaLevel, baseType, sound = true) {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  SetFontSize ${sound ? 45 : 35}
  Rarity <= Rare
  SetBackgroundColor 255 0 255 255
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross
  ${sound ? "PlayAlertSound 16 200" : ""}
`;
}

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("GGGR", "3g1r", 1, 62),
    make4LinkFilter("GGGG", "4g", 25, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),
    make3LinkFilter("GGG", "Boots", "3g boots"),
    make3LinkFilter("GGG", "Gloves", "3g gloves"),
    make3LinkFilter("GGG", "Helmets", "3g helm"),
    make3LinkFilter("GGG", "Body Armours", "3g body"),

    // Other People
    make3LinkFilter("BBB", "Wand", "ding"),
    make3LinkFilterB("BBB", "ding"),
    make3LinkFilter("BBG", "Wand", "ding"),
    make3LinkFilterB("BBG", "ding"),
    make3LinkFilter("BGG", "Wand", "ding"),
    make3LinkFilterB("BGG", "ding"),

    // other stuff
    makeColourFilter("B"),
    makeColourFilter("GG"),
    makeColourFilter("RG"),
    levelingCurrencyFilter(),
  ].join("\n\n");
}
