import {
  make3LinkFilter,
  make4LinkFilter,
  levelingBaseFilter,
} from "../filters.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Lapis Amulet" "Turquoise Amulet"';

const custom = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 44
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  AreaLevel < 20
  BaseType "Lapis Amulet" "Turquoise Amulet"
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Blue Moon
  SetBorderColor 0 0 255 255

Show
  BaseType "Vaal Axe" "Despot Axe" "Piledriver"
  Rarity <= Rare
  ItemLevel >= 83 # T1 Phys %
  PlayAlertSound 16 200
  Continue

Show
  BaseType "Vaal Axe" "Despot Axe" "Piledriver"
  ItemLevel >= 73 # T2 Phys %
  Rarity <= Rare
  SetFontSize 35
  SetBackgroundColor 101 8 214 255 # Bases BG Colour
  SetBorderColor 255 255 0 255
  MinimapIcon 1 Pink Star

Show
  BaseType "Ezomyte Axe" "Sundering Axe" "Piledriver"
  AreaLevel <= 80
  ItemLevel >= 73 # T2 Phys %
  Rarity = Rare
  SetFontSize 35
  SetBackgroundColor 101 8 214 255 # Bases BG Colour
  SetBorderColor 255 255 0 255
  MinimapIcon 1 Pink Star
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
  [52, "Headsman Axe", false],
  [55, "Labrys", false],
  [58, "Noble Axe", true],
  [60, "Abyssal Axe", false],
  [67, "Karui Chopper", false],
  [67, "Sundering Axe", false],
  [67, "Ezomyte Axe", true],
  [67, "Vaal Axe", false],
  [67, "Despot Axe", true],
  [67, "Void Axe", false],
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
    // make4LinkFilter("GGGR", "3g1r"),
    // make4LinkFilter("RRGG", "2r2g"),
    make4LinkFilter("RRRG", "3r1g"),
    // make4LinkFilter("RRRR", "4r"),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots", 1, 28),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves", 1, 28),
    make3LinkFilter("GGR", "Helmets", "2g1r helm", 1, 28),
    make3LinkFilter("GGR", "Body Armours", "2g1r body", 1, 28),
    // make3LinkFilter("RRR", "Boots", "3r boots", 55, 44),
    // make3LinkFilter("RRR", "Gloves", "3r gloves", 55, 44),
    // make3LinkFilter("RRR", "Helmets", "3r helm", 55, 44),
    // make3LinkFilter("RRR", "Body Armours", "3r body", 55, 44),
    make3LinkFilter("RRG", "Boots", "2r1g boots"),
    make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
    make3LinkFilter("RRG", "Helmets", "2r1g helm"),
    make3LinkFilter("RRG", "Body Armours", "2r1g body"),

    // other stuff
    getFlaskFilter(),
    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
  ].join("\n\n");
}
