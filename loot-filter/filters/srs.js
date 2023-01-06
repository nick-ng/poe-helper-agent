import { levelingBaseFilter } from "../filters.js";
import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

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
  Class "Currency"
  BaseType "of Fear"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

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

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    make4LinkFilter("BBBB", "4b"),
    make4LinkFilter("BBBR", "3b1r"),

    // 3-Links
    make3LinkFilter("BBB", "Boots", "3b boots"),
    make3LinkFilter("BBB", "Gloves", "3b gloves"),
    make3LinkFilter("BBB", "Helmets", "3b helm"),
    make3LinkFilter("BBB", "Body Armours", "3b body"),
    make3LinkFilter("BBB", "Sceptre", "3b sceptre"),

    make3LinkFilter("BBR", "Boots", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Gloves", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Helmets", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Body Armours", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Sceptre", "2b1r", 1, 62),

    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
  ].join("\n\n");
}
