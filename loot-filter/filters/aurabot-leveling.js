import {
  make3LinkFilter,
  make3LinkFilterB,
  make4LinkFilter,
  makeColourFilter,
  levelingCurrencyFilter,
} from "../filters.js";

// const custom = `Show
//   SetBorderColor 200 0 0
//   SetFontSize 45
//   ItemLevel >= 1
//   BaseType "Rustic Sash"
//   ItemLevel <= 50
//   CustomAlertSound "sounds/rustic sash.mp3"

// Show # Fast attack speed, low int req wands
//   ItemLevel >= 35
//   AreaLevel <= 70
//   Rarity = Rare
//   BaseType == "Carved Wand" "Engraved Wand" "Pagan Wand" "Crystal Wand"
//   SetFontSize 45
//   SetBackgroundColor 255 255 0 255
//   SetBorderColor 255 0 0 255
//   SetTextColor 0 0 0 255
//   MinimapIcon 1 Yellow Star
// `;

const bows = [
  "Short Bow",
  "Royal Bow",
  "Reflex Bow",
  "Grove Bow",
  "Highborn Bow",
  "Steelwood Bow",
  "Imperial Bow",
  "Thicket Bow",
  "Maraketh Bow",
];

const custom = `
#Show
#  SetBorderColor 200 0 0
#  SetFontSize 45
#  ItemLevel >= 1
#  BaseType "Rustic Sash"
#  ItemLevel <= 66
#  CustomAlertSound "sounds/rustic sash.mp3"

Show  # %HS3 $type->divination $tier->t4
	Class "Divination"
	BaseType == "Thunderous Skies"
	SetFontSize 45
	SetTextColor 255 0 255 255
	SetBackgroundColor 39 141 192 255
	SetBorderColor 0 0 0 255
	MinimapIcon 2 White Triangle
	PlayAlertSound 16 200
  MinimapIcon 1 Pink Star

#Show
#  BaseType "Long Bow" "Royal Bow" "Crude Bow" "Short Bow" "Imperial Bow"
#  Rarity Unique
#  SetFontSize 45
#  SetBackgroundColor 255 0 255 255
#  SetBorderColor 255 255 255 255
#  PlayAlertSound 16 200
#  MinimapIcon 1 Pink Star
#
#Show
#  AreaLevel <= 75
#  BaseType == "${bows.join('" "')}"
#  ItemLevel >= 25
#  SetFontSize 45
#  Rarity <= Rare
#  SetBackgroundColor 255 0 255 255
#  SetBorderColor 0 0 0 255
#  MinimapIcon 1 Pink Cross
#  PlayAlertSound 16 200
`;

const weapons = [
  [12, "Longsword", true],
  [18, "Woodsplitter", true],
  // [18, "Bastard Sword", true],
  // [23, "Poleaxe", true],
  // [33, "Double Axe", true],
  // [37, "Gilded Axe", true],
  // [41, "Shadow Axe", true],
  // [45, "Jasper Chopper", true],
  // [45, "Dagger Axe", true],
  // [45, "Timber Axe", false],
  // [50, "Headsman Axe", false],
  // [52, "Labrys", true],
  // [55, "Noble Axe", true],
  // [59, "Abyssal Axe", false],
];

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
    // make4LinkFilter("GGGR", "3g1r", 1, 62),
    make4LinkFilter("RRGG", "2r2g", 1, 62),
    make4LinkFilter("RRBB", "2b2r", 1, 62),
    // make4LinkFilter("RRBG", "2rgb", 1, 62),
    // make4LinkFilter("RBBG", "2rgb", 1, 62),
    make4LinkFilter("GGGB", "3g1b", 1, 62),
    make4LinkFilter("BBBG", "3b1g", 1, 62),
    make4LinkFilter("BBBB", "4b", 1, 62),
    make4LinkFilter("BBGG", "2b2g", 1, 62),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots", 1, 12),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves", 1, 12),
    make3LinkFilter("GGR", "Helmets", "2g1r helm", 1, 12),
    make3LinkFilter("GGR", "Body Armours", "2g1r body", 1, 12),
    make3LinkFilter("BBR", "Wand", "2b1r"),
    make3LinkFilter("BBR", "Boots", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Gloves", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Helmets", "2b1r", 1, 62),
    make3LinkFilter("BBR", "Body Armours", "2b1r", 1, 62),
    // make3LinkFilter("BRR", "Wand", "2r1b"),
    // make3LinkFilter("BRR", "Boots", "2r1b", 35, 62),
    // make3LinkFilter("BRR", "Gloves", "2r1b", 35, 62),
    // make3LinkFilter("BRR", "Helmets", "2r1b", 35, 62),
    // make3LinkFilter("BRR", "Body Armours", "2r1b", 35, 62),
    make3LinkFilter("BBG", "Wand", "2b1g wand", 1, 62),
    make3LinkFilter("BBG", "Boots", "2b1g boots", 1, 62),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves", 1, 62),
    make3LinkFilter("BBG", "Helmets", "2b1g helm", 1, 62),
    make3LinkFilter("BBG", "Body Armours", "2b1g body", 1, 62),
    make3LinkFilter("BGG", "Wand", "2g1b wand", 1, 62),
    make3LinkFilter("BGG", "Boots", "2g1b boots", 1, 62),
    make3LinkFilter("BGG", "Gloves", "2g1b gloves", 1, 62),
    make3LinkFilter("BGG", "Helmets", "2g1b helm", 1, 62),
    make3LinkFilter("BGG", "Body Armours", "2g1b body", 1, 62),

    // Other People
    // make3LinkFilter("BBB", "Wand", "ding"),
    // make3LinkFilterB("BBB", "ding"),
    make3LinkFilter("BBG", "Wand", "ding"),
    make3LinkFilterB("BBG", "ding"),
    make3LinkFilter("BGG", "Wand", "ding"),
    make3LinkFilterB("BGG", "ding"),

    // other stuff
    // makeColourFilter("RR"),
    // makeColourFilter("RG"),
    levelingCurrencyFilter(),
  ].join("\n\n");
}
