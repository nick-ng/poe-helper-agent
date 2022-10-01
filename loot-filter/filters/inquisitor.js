import { levelingBaseFilter } from "../filters.js";
import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter, {
  getManaFlaskFilter,
} from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Amber Amulet" "Citrine Amulet"';

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
  BaseType == "Platinum Sceptre" "Vaal Blade" "Infernal Axe"
  SetFontSize 45
  PlayAlertSound 3 300
  PlayEffect Brown
  MinimapIcon 2 Brown Star

Show
  ItemLevel >= 84
  AreaLevel <= 80
  Rarity = Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 40
  ##GoodBaseBorder
  ##DefaultBackground
  PlayEffect Red
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 78
  AreaLevel <= 80
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 40
  ##GoodBaseBorder
  ##DefaultBackground
  PlayEffect Red
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 64
  AreaLevel <= 80
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 35
  ##GoodBaseBorder
  ##DefaultBackground
  MinimapIcon 1 Pink Star

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
    make4LinkFilter("BBBG", "3b1g"),
    // make4LinkFilter("BBBR", "3b1r"),
    make4LinkFilter("BBGG", "2b2g"),

    // 3-Links
    make3LinkFilter("BBB", "Boots", "3b boots"),
    make3LinkFilter("BBB", "Gloves", "3b gloves"),
    make3LinkFilter("BBB", "Helmets", "3b helm"),
    make3LinkFilter("BBB", "Body Armours", "3b body"),
    // make3LinkFilter("BBB", "Wand", "3b wand"),
    make3LinkFilter("BBB", "Sceptre", "3b sceptre"),

    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    // make3LinkFilter("BBG", "Wand", "2b1g wand"),
    make3LinkFilter("BBG", "Sceptre", "2b1g sceptre"),

    // make3LinkFilter("BGG", "Boots", "2g1b boots"),
    // make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
    // make3LinkFilter("BGG", "Helmets", "2g1b helm"),
    // make3LinkFilter("BGG", "Body Armours", "2g1b body"),
    // make3LinkFilter("BGG", "Wand", "2g1b wand"),
    make3LinkFilter("BGG", "Sceptre", "2g1b sceptre"),

    make3LinkFilter("3BG", "Sceptre", "brian-3-link"),
    make3LinkFilter("3BB", "Sceptre", "brian-3-link"),
    make3LinkFilter("BG", "Sceptre", "brian-2-link"),
    make3LinkFilter("BB", "Sceptre", "brian-2-link"),

    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
    getManaFlaskFilter(),
  ].join("\n\n");
}
