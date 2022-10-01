import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make3LinkFilterB,
  make4LinkFilter,
} from "../common/generators.js";

const custom = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 50
  CustomAlertSound "sounds/rustic sash.mp3"

Show # Fast attack speed, low int req wands
  ItemLevel >= 35
  AreaLevel <= 70
  Rarity = Rare
  BaseType == "Carved Wand" "Engraved Wand" "Pagan Wand" "Crystal Wand"
  SetFontSize 45
  SetBackgroundColor 255 255 0 255
  SetBorderColor 255 0 0 255
  SetTextColor 0 0 0 255
  MinimapIcon 1 Yellow Star
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
  [45, "Timber Axe", false],
  [50, "Headsman Axe", false],
  // [52, "Labrys", true],
  // [55, "Noble Axe", true],
  // [59, "Abyssal Axe", false],
];

// https://textreader.pro/
export default function getFilter() {
  return "";

  return [
    custom,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("GGGR", "3g1r", 1, 40),
    make4LinkFilter("RRGG", "2r2g", 1, 40),
    make4LinkFilter("RRBB", "2b2r", 1, 62),
    make4LinkFilter("RRBG", "2rgb", 1, 62),
    make4LinkFilter("RBBG", "2rgb", 1, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),
    make3LinkFilter("BBR", "Wand", "2b1r"),
    make3LinkFilter("BBR", "Boots", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Gloves", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Helmets", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Body Armours", "2b1r", 1, 62),
    make3LinkFilter("BRR", "Wand", "2r1b"),
    make3LinkFilter("BRR", "Boots", "2r1b", 35, 62),
    make3LinkFilter("BRR", "Gloves", "2r1b", 35, 62),
    make3LinkFilter("BRR", "Helmets", "2r1b", 35, 62),
    make3LinkFilter("BRR", "Body Armours", "2r1b", 35, 62),

    // Other People
    make3LinkFilter("BBB", "Wand", "ding"),
    make3LinkFilterB("BBB", "ding"),
    make3LinkFilter("BBG", "Wand", "ding"),
    make3LinkFilterB("BBG", "ding"),
    make3LinkFilter("BGG", "Wand", "ding"),
    make3LinkFilterB("BGG", "ding"),

    // other stuff
    levelingBaseFilter(),
  ].join("\n\n");
}
