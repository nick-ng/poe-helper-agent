import { levelingBaseFilter } from "../filters.js";
import {
  makeWeaponBlock,
  make3LinkFilter,
  make4LinkFilter,
} from "../common/generators.js";
import { getFilterFragment, basesToFilter } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Turquoise Amulet"';

const custom = `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 44
  CustomAlertSound "sounds/rustic sash.mp3"

Show
  AreaLevel < 20
  BaseType "Lapis Amulet" "Turquoise Amulet"
  Corrupted False
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Blue Moon
  ##GoodBaseBorder

Show
  BaseType "Ezomyte Axe" "Despot Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity <= Rare
  SetFontSize 35
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  BaseType "Ezomyte Axe" "Sundering Axe" #"Piledriver"
  Corrupted False
  ItemLevel >= 73 # T2 Phys %
  Rarity = Rare
  SetFontSize 35
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets GRR

Show
  AreaLevel < 33
  SetFontSize 35
  Class "One Hand" "Daggers" "Rune Dagger" "Sceptre" "Claws" "Shields"
  Sockets RRR

Show
  Rarity >= Rare
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"
  SetFontSize 30
  ##DefaultBackground

Show
  AreaLevel < 68
  BaseType "Astral Plate"
  SetFontSize 40

Hide
  AreaLevel >= 70
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Bows" "Claws" "Warstaves" "Wand" "Sceptre"
`;

export const replacer = {
  ilvl86a: basesToFilter([
    // "Carnal Armour", // Dex/Int
    "Full Dragonscale", // Str/Dex
    // "Cardinal Round Shield", // Str/Dex
    // "Saint's Hauberk", // Str/Int
    // "Supreme Spiked Shield", // Dex/Int
    // "Mirrored Spiked Shield", // Dex/Int
    // "Colossal Tower Shield", // Str
    "Astral Plate", // Str
    "Glorious Plate", // Str
  ]),
  ilvl86b: basesToFilter([
    // "Sadist Garb", // Dex/Int
    // "Blood Raiment", // Dex/Int
    "General's Brigandine", // Str/Dex
    "Triumphant Lamellar", // Str/Dex
    // "Saintly Chainmail", // Str/Int
    // "Assassin's Garb", // Dex
    // "Crusader Buckler", // Dex
  ]),
  ilvl85a: basesToFilter([
    "Pig-Faced Bascinet", // Str/Dex
    "Dragonscale Gauntlets", // Str/Dex
    "Dragonscale Boots", // Str/Dex
    "Two-Toned Boots",

    // "Crusader Gloves", // Str/Int
    // "Crusader Boots", // Str/Int
    // "Prophet Crown", // Str/Int

    // "Murder Mitts", // Dex/Int
    // "Fugitive Boots", // Dex/Int
    // "Murder Boots", // Dex/Int
    // "Vaal Mask", // Dex/Int
    // "Deicide Mask", // Dex/Int

    // "Sorcerer Gloves", // Int
    // "Hubris Circlet", // Int

    // "Lion Pelt", // Dex
    // "Slink Boots", // Dex
    // "Slink Gloves", // Dex
    // "Gripped Gloves", // Dex
  ]),
  ilvl85b: basesToFilter([
    // "Fingerless Silk Gloves", // Int, Spell Damage
    // "Nightmare Bascinet", // Str/Dex
    // "Deicide Mask", // Dex/Int
    "Titan Gauntlets", // Str
    "Spiked Gloves", // Str
    "Titan Greaves", // Str
    "Royal Burgonet", // Str
  ]),
};

const weapons = [
  [12, "Longsword", true],
  [12, "Jade Chopper", true],
  [23, "Woodsplitter", false],
  [23, "Bastard Sword", false],
  [23, "Poleaxe", false],
  [33, "Double Axe", true],
  [37, "Gilded Axe", false],
  [45, "Shadow Axe", true],
  [45, "Jasper Chopper", false],
  [49, "Timber Axe", false],
  [62, "Headsman Axe", true],
  [62, "Labrys", true],
  [58, "Noble Axe", false],
  [60, "Abyssal Axe", false],
  [67, "Karui Chopper", false],
  [67, "Sundering Axe", false],
  [67, "Ezomyte Axe", true],
  [67, "Vaal Axe", false],
  [67, "Despot Axe", true],
  [67, "Void Axe", false],
];

// https://textreader.pro/
export default function getFilter() {
  return [
    custom,
    ...weapons.map((weapon) => {
      const [maxAreaLevel, baseType, sound] = weapon;
      return makeWeaponBlock(maxAreaLevel, baseType, sound);
    }),

    // 4-Links
    // make4LinkFilter("GGGR", "3g1r"),
    make4LinkFilter("RRGG", "2r2g"),
    make4LinkFilter("RRRG", "3r1g"),
    // make4LinkFilter("RRRR", "4r"),

    // 3-Links
    make3LinkFilter("GGR", "Boots", "2g1r boots", 1, 12),
    make3LinkFilter("GGR", "Gloves", "2g1r gloves", 1, 12),
    make3LinkFilter("GGR", "Helmets", "2g1r helm", 1, 12),
    make3LinkFilter("GGR", "Body Armours", "2g1r body", 1, 12),

    make3LinkFilter("RRR", "Boots", "3r boots"),
    make3LinkFilter("RRR", "Gloves", "3r gloves"),
    make3LinkFilter("RRR", "Helmets", "3r helm"),
    make3LinkFilter("RRR", "Body Armours", "3r body"),

    make3LinkFilter("RRG", "Boots", "2r1g boots"),
    make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
    make3LinkFilter("RRG", "Helmets", "2r1g helm"),
    make3LinkFilter("RRG", "Body Armours", "2r1g body"),

    // other stuff
    levelingBaseFilter(),
    getFilterFragment("ssf-bases-top", replacer),
    getFilterFragment("ssf-bases", { amulets }),
    getFilterFragment("base", replacer),
    getFlaskFilter(),
  ].join("\n\n");
}
