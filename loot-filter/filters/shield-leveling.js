import {
  make3LinkFilter,
  make3LinkFilterB,
  make4LinkFilter,
  makeColourFilter,
  levelingCurrencyFilter,
} from "../filters.js";

const custom = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 30
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  BaseType "Colossal Tower Shield"
  BaseDefencePercentile >= 85
  Rarity <= Rare
  SetFontSize 45
  SetBackgroundColor 255 0 255 255
  SetBorderColor 255 255 255 255
  MinimapIcon 1 Pink Star

Show
  BaseType "Colossal Tower Shield"
  Rarity <= Rare
  SetFontSize 35
  SetBackgroundColor 255 0 255 255
  SetBorderColor 214 126 0 255
  MinimapIcon 1 Pink Cross

Show # Bleed chance fast 1h weapons
  ItemLevel >= 40
  BaseType == "Driftwood Club" "Spiked Club" "War Hammer" "Tenderizer" "Phantom Mace" "Battle Hammer" "Barbed Club" "Dream Mace" "Bladed Mace" "Siege Axe" "Tomahawk" "Boarding Axe"
  Rarity = Rare
  SetFontSize 45
  SetBackgroundColor 255 255 0 255
  SetBorderColor 255 0 0 255
  SetTextColor 0 0 0 255
  MinimapIcon 1 Yellow Star

Show # Bleed chance 1h weapons
  ItemLevel >= 40
  AreaLevel <= 55
  Rarity = Rare
  Class == "One Hand Axes" "One Hand Maces" "One Hand Swords"
  SetFontSize 45
  SetBackgroundColor 255 255 0 255
  SetTextColor 0 0 0 255
  MinimapIcon 1 Yellow Star

Show # Bleed chance 1h weapons
  ItemLevel >= 20
  AreaLevel < 40
  Rarity = Rare
  Class == "One Hand Axes" "One Hand Maces" "One Hand Swords"
  SetFontSize 35
  SetBackgroundColor 255 255 0 255
  SetTextColor 0 0 0 255
  MinimapIcon 1 Yellow Cross
  `;

const weapons = [
  [12, "Longsword", true],
  [18, "Woodsplitter", true],
  [18, "Bastard Sword", true],
  [23, "Poleaxe", true],
  [33, "Double Axe", true],
  [33, "Gilded Axe", false],
  // [33, "Shadow Axe", false],
  // [41, "Jasper Chopper", true],
  // [41, "Dagger Axe", true],
  // [45, "Timber Axe", true],
  // [49, "Headsman Axe", true],
  // [52, "Labrys", true],
  // [55, "Noble Axe", true],
  // [59, "Abyssal Axe", false],
  [51, "Reinforced Tower Shield", true],
  [67, "Girded Tower Shield", true],
  [70, "Colossal Tower Shield", true],
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
    make4LinkFilter("GGGR", "3g1r", 1, 55),
    make4LinkFilter("RRGG", "2r2g", 1, 55),
    make4LinkFilter("RRRG", "3r1g", 1, 62),
    make4LinkFilter("RRRR", "4r", 55, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),
    make3LinkFilter("RRR", "Boots", "3r boots", 55, 62),
    make3LinkFilter("RRR", "Gloves", "3r gloves", 55, 62),
    make3LinkFilter("RRR", "Helmets", "3r helm", 55, 62),
    make3LinkFilter("RRR", "Body Armours", "3r body", 55, 62),
    make3LinkFilter("RRG", "Boots", "2r1g boots"),
    make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
    make3LinkFilter("RRG", "Helmets", "2r1g helm"),
    make3LinkFilter("RRG", "Body Armours", "2r1g body"),

    // Other People
    make3LinkFilter("BBB", "Wand", "ding"),
    make3LinkFilterB("BBB", "ding"),
    make3LinkFilter("BBG", "Wand", "ding"),
    make3LinkFilterB("BBG", "ding"),
    make3LinkFilter("BGG", "Wand", "ding"),
    make3LinkFilterB("BGG", "ding"),

    // other stuff
    makeColourFilter("RR"),
    makeColourFilter("RG"),
    levelingCurrencyFilter,
  ].join("\n\n");
}