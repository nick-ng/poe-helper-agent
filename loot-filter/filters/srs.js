import { levelingBaseFilter } from "../filters.js";
import {
  make3LinkFilter,
  make4LinkFilter,
  makeWeaponBlock,
} from "../common/generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter, {
  getManaFlaskFilter,
} from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Lapis Amulet" "Turquoise Amulet"';

const custom = `
Show
  AreaLevel < 20
  BaseType ${amulets}
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Green Moon
  SetBorderColor 255 55 255 255

Show
  Rarity Unique
  BaseType == "Legion Boots"
  SetFontSize 45
  SetBackgroundColor 255 255 255 255
  PlayAlertSound 3 300
  PlayEffect Brown
  MinimapIcon 2 Brown Star

Show
  BaseType == "Legion Boots"
  Rarity Normal
  BaseDefencePercentile >= 70
  Corrupted False
  SetFontSize 45
  ##GoodBaseBorder
  ##DefaultBackground

Show
  Rarity = Unique
  Class "Rings"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 255 0 0 255
  SetBorderColor 100 100 100 255
  PlayEffect Red
  MinimapIcon 2 Brown Star

Show
  Class == "Sceptres"
  Corrupted False
  Rarity <= Rare
  ItemLevel = 2 # +1 <type> Spells
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star
  ##DefaultBackground

Show
  Corrupted False
  BaseType "Bone Ring" "Bone Ring" "Fossilised Spirit Shield" "Ivory Spirit Shield" "Ghastly Eye Jewel"
  ##GoodBaseBorder
  ##DefaultBackground
  Continue

Show
  BaseType = "Bone Ring" "Fossilised Spirit Shield" "Ivory Spirit Shield" "Ghastly Eye Jewel"
  ItemLevel >= 81
  Rarity <= Rare
  Corrupted False
  SetFontSize 45
  ##GoodBaseBorder
  PlayEffect Red
  MinimapIcon 1 Yellow Cross
  ##DefaultBackground

Show
  ItemLevel >= 81
  Rarity <= Rare
  Corrupted False
  BaseType "Fossilised Spirit Shield" "Ivory Spirit Shield"
  SetFontSize 45
  PlayEffect Yellow
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

Show
  AreaLevel < 68
  Rarity <= Rare
  Corrupted False
  BaseType "Short Bow" "Grove Bow" "Thicket Bow" "Reflex Bow" "Steelwood Bow" "Maraketh Bow"
  SetFontSize 40
  ##GoodBaseBorder
  ##DefaultBackground

Show
  Class "Currency"
  BaseType "of Fear"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

Show
  AreaLevel < 65
  BaseType == "Divine Mana Flask"
  Rarity == Magic
  SetBorderColor 80 150 255 200
  ##DefaultBackground
  MinimapIcon 2 Blue Raindrop
  CustomAlertSound "sounds/ding.mp3"

Show
  ItemLevel >= 50
  Rarity <= Rare
  BaseType "Large Cluster Jewel"
  EnchantmentPassiveNode "Minion Damage"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"

Show
  ItemLevel >= 68
  Rarity <= Rare
  BaseType "Medium Cluster Jewel"
  EnchantmentPassiveNode "Minion Life"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  BaseType == "Rustic Sash" "Cloth Belt" "Studded Belt"

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Two Hand" "Bows" "Claws" "Warstaves"
`;

const weapons = [[12, "Longsword", false]];

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,

    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    make4LinkFilter("GGGR", "3g1r"),
    make4LinkFilter("GGGG", "4g"),
    // make4LinkFilter("BBBR", "3b1r"),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),

    make3LinkFilter("GGG", "Boots", "3g boots"),
    make3LinkFilter("GGG", "Gloves", "3g gloves"),
    make3LinkFilter("GGG", "Helmets", "3g helm"),
    make3LinkFilter("GGG", "Body Armours", "3g body"),

    // make3LinkFilter("BBB", "Boots", "3b boots"),
    // make3LinkFilter("BBB", "Gloves", "3b gloves"),
    // make3LinkFilter("BBB", "Helmets", "3b helm"),
    // make3LinkFilter("BBB", "Body Armours", "3b body"),
    // make3LinkFilter("BBB", "Sceptre", "3b sceptre"),

    // make3LinkFilter("BBR", "Boots", "2b1r", 1, 62),
    // make3LinkFilter("BBR", "Gloves", "2b1r", 1, 62),
    // make3LinkFilter("BBR", "Helmets", "2b1r", 1, 62),
    // make3LinkFilter("BBR", "Body Armours", "2b1r", 1, 62),
    // make3LinkFilter("BBR", "Sceptre", "2b1r", 1, 62),

    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
    getManaFlaskFilter(),
  ].join("\n\n");
}
