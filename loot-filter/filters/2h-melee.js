import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make4LinkFilter,
} from "../common/generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Turquoise Amulet"';

const ilvl86 = ["Astral Plate", "Glorious Plate"];
const ilvl85 = [
  "Titan Gauntlets",
  "Spiked Gloves",
  "Titan Greaves",
  "Royal Burgonet",
];

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
  ##GoodBaseBorder

Show
  BaseType "Ezomyte Axe" "Despot Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity <= Rare
  SetFontSize 35
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  BaseType "Ezomyte Axe" "Sundering Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity = Rare
  SetFontSize 35
  ##GoodBaseBorder
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

Show
  AreaLevel < 68
  BaseType "Astral Plate"
  SetFontSize 40

Hide
  AreaLevel >= 70
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Bows" "Claws" "Warstaves" "Wand" "Sceptre"
`;

const armourBases = `
Show
  Corrupted False
  BaseType "${ilvl86.join('" "')}" "${ilvl85.join('" "')}"
  ##GoodBaseBorder
  ##DefaultBackground
  Continue

  ## Body Armour
Show
  ItemLevel >= 86
  Rarity <= Rare
  Corrupted False
  BaseType "${ilvl86.join('" "')}"
  SetFontSize 45
  PlayEffect Red
  CustomAlertSound "sounds/brian-05-woosh.mp3"
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

Show
  Corrupted False
  ItemLevel > 77
  AreaLevel < 83
  BaseDefencePercentile >= 90
  Rarity <= Rare
  BaseType "${ilvl86.join('" "')}"
  SetFontSize 35
  PlayEffect Grey
  MinimapIcon 1 Yellow Star

Show
  BaseDefencePercentile >= 33
  AreaLevel < 83
  Rarity = Rare
  BaseType "${ilvl86.join('" "')}"
  SetFontSize 30
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star

Show
  ItemLevel == 77
  Rarity <= Rare
  Corrupted False
  BaseType "${ilvl86.join('" "')}"
  SetFontSize 45
  PlayEffect Yellow
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

  ## Other Armour
Show
  ItemLevel >= 85
  Rarity <= Rare
  Corrupted False
  BaseType "${ilvl85.join('" "')}"
  SetFontSize 40
  PlayEffect Red
  CustomAlertSound "sounds/brian-05-woosh.mp3"
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

Show
  Corrupted False
  ItemLevel >= 76
  AreaLevel < 83
  BaseDefencePercentile >= 90
  Rarity <= Rare
  BaseType "${ilvl85.join('" "')}"
  SetFontSize 35
  PlayEffect Grey
  MinimapIcon 1 Yellow Star

Show
  BaseDefencePercentile >= 33
  AreaLevel < 83
  Rarity = Rare
  BaseType "${ilvl85.join('" "')}"
  SetFontSize 30
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star
`;

const weapons = [
  [12, "Longsword", false],
  [13, "Jade Chopper", true],
  [18, "Mallet", true],
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
    armourBases,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    // make4LinkFilter("GGGR", "3g1r"),
    make4LinkFilter("RRGG", "2r2g"),
    make4LinkFilter("RRRG", "3r1g"),
    // make4LinkFilter("RRRR", "4r"),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots", 1, 12),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves", 1, 12),
    make3LinkFilter("GGR", "Helmets", "2g1r helm", 1, 12),
    make3LinkFilter("GGR", "Body Armours", "2g1r body", 1, 12),

    make3LinkFilter("RRR", "Boots", "3r boots"),
    make3LinkFilter("RRR", "Gloves", "3r gloves"),
    make3LinkFilter("RRR", "Helmets", "3r helm"),
    make3LinkFilter("RRR", "Body Armours", "3r body"),

    make3LinkFilter("RRG", "Boots", "2r1g boots"),
    make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
    make3LinkFilter("RRG", "Helmets", "2r1g helm"),
    make3LinkFilter("RRG", "Body Armours", "2r1g body"),

    // other stuff
    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
  ].join("\n\n");
}
