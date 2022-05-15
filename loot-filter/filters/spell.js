import {
  make3LinkFilter,
  make4LinkFilter,
  levelingCurrencyFilter,
} from "../filters.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Amber Amulet" "Citrine Amulet"';

const custom = `
Show
  AreaLevel < 20
  BaseType ${amulets}
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Green Moon
  SetBorderColor 0 255 0 255

Show
  Class Currency
  BaseType "of Fear"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

Show
  ItemLevel >= 78
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 40
  SetBackgroundColor 101 8 214 255 # Bases BG Colour
  SetBorderColor 255 0 0 255
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 64
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 35
  SetBackgroundColor 101 8 214 255 # Bases BG Colour
  SetBorderColor 255 255 0 255
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
    make3LinkFilter("BBB", "Wand", "3b wand"),
    // make3LinkFilter("BBB", "Sceptre", "3b sceptre"),

    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BBG", "Wand", "2b1g wand"),
    // make3LinkFilter("BBG", "Sceptre", "2b1g sceptre"),

    // make3LinkFilter("BGG", "Boots", "2g1b boots"),
    // make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
    // make3LinkFilter("BGG", "Helmets", "2g1b helm"),
    // make3LinkFilter("BGG", "Body Armours", "2g1b body"),
    // make3LinkFilter("BGG", "Wand", "2g1b wand"),
    // make3LinkFilter("BGG", "Sceptre", "2g1b sceptre"),

    getFlaskFilter(),
    levelingCurrencyFilter(),
    getFilterFragment("ssf-bases", { amulets }),
  ].join("\n\n");
}
