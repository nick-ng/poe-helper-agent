import {
  make3LinkFilter,
  make4LinkFilter,
  levelingCurrencyFilter,
} from "../filters.js";
import { getFilterFragment } from "../filter-loader.js";

const amulets = '"Jade Amulet" "Citrine Amulet"';

const custom = `
Show
  AreaLevel < 20
  BaseType "Jade Amulet" "Citrine Amulet"
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
    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BBG", "Wand", "2b1g wand"),
    // make3LinkFilter("BBR", "Wand", "2b1r"),
    // make3LinkFilter("BBR", "Boots", "2b1r"),
    // make3LinkFilter("BBR", "Gloves", "2b1r"),
    // make3LinkFilter("BBR", "Helmets", "2b1r"),
    // make3LinkFilter("BBR", "Body Armours", "2b1r"),
    // other stuff
    // makeColourFilter("BB"),
    // makeColourFilter("BR"),
    // makeColourFilter("BG"),
    levelingCurrencyFilter,
    getFilterFragment("ssf-bases", { amulets }),
  ].join("\n\n");
}
