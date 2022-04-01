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
  ItemLevel <= 67
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  BaseType "Vaal Axe" "Despot Axe"
  Rarity <= Rare
  ItemLevel <= 83
  PlayAlertSound 16 200
  Continue

Show
  BaseType "Vaal Axe" "Despot Axe"
  Rarity <= Rare
  SetFontSize 45
  SetBackgroundColor 255 0 255 255
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Star
`;

const weapons = [
  [12, "Longsword", true],
  [18, "Woodsplitter", true],
  [18, "Bastard Sword", true],
  [23, "Poleaxe", true],
  [33, "Double Axe", true],
  [37, "Gilded Axe", true],
  [41, "Shadow Axe", true],
  [45, "Jasper Chopper", true],
  [45, "Dagger Axe", true],
  [49, "Timber Axe", false],
  [52, "Headsman Axe", false],
  [55, "Labrys", true],
  [58, "Noble Axe", true],
  [60, "Abyssal Axe", false],
  [67, "Karui Chopper", false],
  [67, "Sundering Axe", false],
  [67, "Ezomyte Axe", false],
  [67, "Vaal Axe", false],
  [67, "Despot Axe", false],
  [67, "Void Axe", false],
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

    // other stuff
    makeColourFilter("RR"),
    makeColourFilter("RG"),
    levelingCurrencyFilter,
  ].join("\n\n");
}
