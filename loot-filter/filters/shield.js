import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make4LinkFilter,
} from "../generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Lapis Amulet" "Jade Amulet" "Turquoise Amulet"';

export const shieldT16 = `
Show
  Rarity Unique
  BaseType == "Timeworn Claw" "Twilight Blade" "Viridian Jewel"
  SetFontSize 45
  PlayAlertSound 3 300
  PlayEffect Brown
  MinimapIcon 2 Brown Star

Show
  ItemLevel >= 86
  BaseDefencePercentile >= 50
  Rarity <= Rare
  BaseType "Colossal Tower Shield"
  Corrupted False
  SetFontSize 40
  SetBorderColor 255 0 0 255
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 84
  BaseDefencePercentile >= 80
  Rarity <= Rare
  BaseType "Colossal Tower Shield"
  Corrupted False
  SetFontSize 40
  SetTextColor 255 0 255 200
  SetBorderColor 255 0 0 255
  MinimapIcon 1 Pink Star
`;

const specific = `
Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 30
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  ItemLevel >= 78
  BaseDefencePercentile >= 90
  Rarity <= Rare
  BaseType "Colossal Tower Shield"
  Corrupted False
  SetFontSize 35
  SetTextColor 255 0 255 200
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross

Show
  ItemLevel >= 78
  BaseDefencePercentile >= 33
  Rarity = Rare
  BaseType "Colossal Tower Shield"
  Corrupted False
  SetFontSize 30
  SetTextColor 255 0 255 200
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross

Show
  BaseType "Colossal Tower Shield"
  Corrupted False
  AreaLevel <= 72
  Rarity <= Rare
  SetFontSize 30
  SetTextColor 255 0 255 200
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross

Show
  AreaLevel < 67
  Rarity <= Rare
  BaseType "Girded Tower Shield"
  Corrupted False
  SetFontSize 40
  SetTextColor 255 0 255 200
  SetBorderColor 255 0 0 255
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 40
  Rarity = Rare
  Identified False
  SetFontSize 30
  SetBorderColor 0 100 255 255
  MinimapIcon 1 Pink Cross
  Class "One Hand"

Show
  Rarity = Rare
  Identified True
  HasExplicitMod = "of Haemophilia" "of Exsanguination"
  SetFontSize 45
  SetBorderColor 0 100 255 255
  MinimapIcon 1 Pink Cross
  Class "One Hand"

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
  [67, "Ezomyte Axe", false],
  [67, "Vaal Axe", false],
  [67, "Despot Axe", false],
  [67, "Void Axe", false],
];

// https://textreader.pro/
export default function getFilter() {
  return [
    shieldT16,
    specific,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("RRGG", "2r2g", 1, 55),
    make4LinkFilter("RRRG", "3r1g", 1, 62),
    make4LinkFilter("RRRR", "4r", 45, 62),

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

    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
  ].join("\n\n");
}
