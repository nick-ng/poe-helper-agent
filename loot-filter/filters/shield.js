import {
  make3LinkFilter,
  make4LinkFilter,
  levelingCurrencyFilter,
} from "../filters.js";
import { getFilterFragment } from "../filter-loader.js";

const amulets = '"Lapis Amulet" "Turquoise Amulet"';

const custom = `
Show
  Rarity Unique
  BaseType == "Twilight Blade" "Viridian Jewel"
  SetFontSize 45
  PlayAlertSound 3 300
  PlayEffect Brown
  MinimapIcon 2 Brown Star

Show
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
`;

const weapons = [
  [12, "Longsword", true],
  [18, "Woodsplitter", false],
  [18, "Bastard Sword", false],
  [23, "Poleaxe", true],
  [33, "Double Axe", false],
  [37, "Gilded Axe", true],
  [41, "Shadow Axe", false],
  [45, "Jasper Chopper", false],
  [49, "Timber Axe", true],
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
  SetFontSize ${sound ? 45 : 30}
  Rarity <= Rare
  SetBackgroundColor 101 8 214 255 # Bases BG Colour
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

    levelingCurrencyFilter,
    getFilterFragment("ssf-bases", { amulets }),
  ].join("\n\n");
}
