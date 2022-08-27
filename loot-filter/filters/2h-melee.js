import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make4LinkFilter,
} from "../generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Turquoise Amulet"';

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
  Corrupted False
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Blue Moon
  SetTextColor 255 0 255 200
  SetBorderColor 0 0 255 255

Show
  BaseType "Ezomyte Axe" "Despot Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity <= Rare
  SetFontSize 35
  SetTextColor 255 0 255 200
  SetBorderColor 255 255 0 255
  MinimapIcon 1 Pink Star

Show
  BaseType "Ezomyte Axe" "Sundering Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity = Rare
  SetFontSize 35
  SetTextColor 255 0 255 200
  SetBorderColor 255 255 0 255
  MinimapIcon 1 Pink Star

Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets GRR

Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets RRR

Show
  Rarity >= Rare
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"
  SetFontSize 30
  ##DefaultBackground

Hide
  AreaLevel >= 70
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Bows" "Claws" "Warstaves" "Wand" "Sceptre"
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

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("GGGR", "3g1r"),
    make4LinkFilter("RRGG", "2r2g"),
    // make4LinkFilter("RRRG", "3r1g"),
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
