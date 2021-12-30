import {
  make3LinkFilter,
  make3LinkFilterB,
  make4LinkFilter,
  makeColourFilter,
  levelingCurrencyFilter,
} from "../filters.js";

const custom = `
Show
  BaseType "Carnal Mitts"
  Rarity Unique
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBackgroundColor 255 255 255 255
  SetBorderColor 0 0 0 255
  PlayAlertSound 1 200
  MinimapIcon 1 Pink Star
`;

const weapons = [[12, "Longsword", true]];

function makeWeaponBlock(maxAreaLevel, baseType, sound = true) {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  SetFontSize ${sound ? 45 : 35}
  Rarity <= Rare
  SetBackgroundColor 255 0 255 255
  SetBorderColor 0 0 0 255
  MinimapIcon 1 Pink Cross
  ${sound ? "PlayAlertSound 16 200" : ""}
`;
}

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    make4LinkFilter("GGGR", "3g1r", 1, 62),
    make4LinkFilter("GGGG", "4g", 1, 62),
    make4LinkFilter("GGGB", "3g1b", 1, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots"),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
    make3LinkFilter("GGR", "Helmets", "2g1r helm"),
    make3LinkFilter("GGR", "Body Armours", "2g1r body"),
    make3LinkFilter("GGG", "Boots", "3g boots"),
    make3LinkFilter("GGG", "Gloves", "3g gloves"),
    make3LinkFilter("GGG", "Helmets", "3g helm"),
    make3LinkFilter("GGG", "Body Armours", "3g body"),

    // Other People
    make3LinkFilter("BBB", "Wand", "ding"),
    make3LinkFilterB("BBB", "ding"),
    make3LinkFilter("BBG", "Wand", "ding"),
    make3LinkFilterB("BBG", "ding"),
    make3LinkFilter("BGG", "Wand", "ding"),
    make3LinkFilterB("BGG", "ding"),

    // other stuff
    makeColourFilter("B"),
    makeColourFilter("GG"),
    makeColourFilter("RG"),
    levelingCurrencyFilter,
  ].join("\n\n");
}
