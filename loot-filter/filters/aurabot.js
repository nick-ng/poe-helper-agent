import { getFilterFragment } from "../filter-loader.js";
import { levelingBaseFilter } from "../filters.js";
import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import getMapsFilter from "./aurabot-maps.js";

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
  BaseType "Bismuth Flask"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 100 100 100 100
  CustomAlertSound "sounds/ding.mp3"
  MinimapIcon 0 White Star
`;

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    make4LinkFilter("BBBB", "4b"),
    make4LinkFilter("BBGR", "brian-01-clang"),
    make4LinkFilter("BBBG", "3b1g"),
    make4LinkFilter("BBBR", "3b1r"),
    make3LinkFilter("BBR", "Boots", "2b1r"),
    make3LinkFilter("BBR", "Gloves", "2b1r"),
    make3LinkFilter("BBR", "Helmets", "2b1r"),
    make3LinkFilter("BBR", "Body Armours", "2b1r"),
    make3LinkFilter("BBR", null, "2b1r"),
    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BBG", null, "2b1g wand"),
    make3LinkFilter("BBB", "Boots", "3b boots"),
    make3LinkFilter("BBB", "Gloves", "3b gloves"),
    make3LinkFilter("BBB", "Helmets", "3b helm"),
    make3LinkFilter("BBB", "Body Armours", "3b body"),
    make3LinkFilter("BBB", null, "3b wand"),
    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getMapsFilter(),
  ].join("\n\n");
}
