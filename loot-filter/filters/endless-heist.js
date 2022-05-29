import {
  make3LinkFilter,
  make4LinkFilter,
  makeColourFilter,
  levelingBaseFilter,
} from "../filters.js";

// https://textreader.pro/
export default function getFilter() {
  return [
    // `Show  # %H5 $type->heist->contract $tier->any
    // Class "Contract"
    // SetFontSize 45
    // SetTextColor 220 60 60 255
    // SetBackgroundColor 0 0 0 255
    // SetBorderColor 220 60 60 255
    // MinimapIcon 2 White UpsideDownHouse
    // PlayEffect White
    // PlayAlertSound 4 300`,
    // 4-Links
    make4LinkFilter("BBBB", "4b"),
    make4LinkFilter("BBBG", "3b1g"),
    make4LinkFilter("BBGG", "2b2g"),
    // 3-Links
    make3LinkFilter("BBB", "Boots", "3b boots"),
    make3LinkFilter("BBB", "Gloves", "3b gloves"),
    make3LinkFilter("BBB", "Helmets", "3b helm"),
    make3LinkFilter("BBB", "Body Armours", "3b body"),
    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BGG", "Boots", "2g1b boots"),
    make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
    make3LinkFilter("BGG", "Helmets", "2g1b helm"),
    make3LinkFilter("BGG", "Body Armours", "2g1b body"),
    // other stuff
    makeColourFilter("BB"),
    makeColourFilter("BG"),
    levelingBaseFilter(),
  ].join("\n\n");
}
