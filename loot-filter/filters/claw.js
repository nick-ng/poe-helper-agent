import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make4LinkFilter,
} from "../generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Lapis Amulet" "Amber Amulet" "Agate Amulet"';

export const clawT16 = `
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
  SetBorderColor 255 0 0 255
  MinimapIcon 1 Pink Star
`;

const specific = `
Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets GGB

Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets GGR

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
  [18, "Bastard Sword", true],
  [18, "Awl", true],
  [23, "Cat's Paw", true],
  [33, "Blinder", false],
  [37, "Sparkling Claw", true],
  [45, "Double Claw", false],
  [49, "Gouger", false],
  [52, "Tiger's Paw", true],
  [58, "Noble Claw", true],
  [60, "Twin Claw", false],
  [67, "Hellion's Paw", true],
  [67, "Imperial Claw", true],
  [67, "Gemini Claw", true],
];

// https://textreader.pro/
export default function getFilter() {
  return [
    clawT16,
    specific,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("GGGR", "3g1r", 1, 62),
    make4LinkFilter("GGGB", "3g1b", 1, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),
    make3LinkFilter("GGB", "Boots", "2g1b boots"),
    make3LinkFilter("GGB", "Gloves", "2g1b gloves"),
    make3LinkFilter("GGB", "Helmets", "2g1b helm"),
    make3LinkFilter("GGB", "Body Armours", "2g1b body"),
    make3LinkFilter("RRG", "Boots", "2r1g boots"),
    make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
    make3LinkFilter("RRG", "Helmets", "2r1g helm"),
    make3LinkFilter("RRG", "Body Armours", "2r1g body"),

    getFlaskFilter(),
    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
  ].join("\n\n");
}
