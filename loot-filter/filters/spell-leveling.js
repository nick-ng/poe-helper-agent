import {
  make3LinkFilter,
  make4LinkFilter,
  levelingCurrencyFilter,
} from "../filters.js";

const custom = `
Show
  ItemLevel >= 64
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 35
  SetBackgroundColor 0 75 23 255 # Bases BG Colour
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
    make3LinkFilter("BBB", "Boots", "3b boots", 1, 44),
    make3LinkFilter("BBB", "Gloves", "3b gloves", 1, 44),
    make3LinkFilter("BBB", "Helmets", "3b helm", 1, 44),
    make3LinkFilter("BBB", "Body Armours", "3b body", 1, 44),
    make3LinkFilter("BBB", "Wand", "3b wand", 1, 44),
    make3LinkFilter("BBG", "Boots", "2b1g boots", 1, 44),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves", 1, 44),
    make3LinkFilter("BBG", "Helmets", "2b1g helm", 1, 44),
    make3LinkFilter("BBG", "Body Armours", "2b1g body", 1, 44),
    make3LinkFilter("BBG", "Wand", "2b1g wand", 1, 44),
    // make3LinkFilter("BBR", "Wand", "2b1r", 1, 44),
    // make3LinkFilter("BBR", "Boots", "2b1r", 1, 44),
    // make3LinkFilter("BBR", "Gloves", "2b1r", 1, 44),
    // make3LinkFilter("BBR", "Helmets", "2b1r", 1, 44),
    // make3LinkFilter("BBR", "Body Armours", "2b1r", 1, 44),
    // other stuff
    // makeColourFilter("BB"),
    // makeColourFilter("BR"),
    // makeColourFilter("BG"),
    levelingCurrencyFilter,
  ].join("\n\n");
}