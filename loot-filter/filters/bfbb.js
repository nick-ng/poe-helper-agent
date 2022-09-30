import { levelingBaseFilter } from "../filters.js";
import {
  make3LinkFilter,
  make4LinkFilter,
  make4LinkFilter2,
} from "../generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter, {
  getManaFlaskFilter,
} from "../../filter-generators/flasks.js";

/**
 * Leveling as:
 * 1-27: Stormblast Mine + Orb of Storms
 * 28-59: Armageddon Brand + Cremation
 * 60-~80: Poisonous Concoction
 * 80+: Bladefall + Blade Blast
 */

const amulets = '"Lapis Amulet" "Amber Amulet" "Agate Amulet" "Marble Amulet"';

const custom = `
Show
  AreaLevel < 20
  BaseType ${amulets}
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Green Moon
  SetBorderColor 255 55 255 255

Show
  ItemLevel = 83 # T1 Cast Speed
  AreaLevel < 83
  Rarity = Rare
  BaseType "Pagan Wand" "Heathen Wand"
  SetFontSize 45
  ##GoodBaseText
  ##DefaultBackground
  PlayEffect Red
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 78 # T1 Chaos DoT Multi
  AreaLevel <= 80
  Rarity <= Rare
  BaseType "Pagan Wand" "Heathen Wand"
  SetFontSize 45
  ##GoodBaseText
  ##DefaultBackground
  PlayEffect Yellow
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 64 # T2 Chaos DoT Multi
  AreaLevel <= 80
  Rarity <= Rare
  BaseType "Pagan Wand" "Heathen Wand"
  SetFontSize 35
  ##GoodBaseText
  ##DefaultBackground
  PlayEffect White
  MinimapIcon 1 Pink Star

Show
	ItemLevel >= 50
	Rarity <= Rare
	BaseType "Large Cluster Jewel"
	EnchantmentPassiveNode "Physical Damage"
	SetFontSize 45
	SetTextColor 150 150 255 200
	SetBorderColor 150 150 255 200
	PlayEffect Red
  MinimapIcon 1 Pink Star
  CustomAlertSound "sounds/brian-06-shing.mp3"

#Show  # +1 all Physical Gems recipe
#  Quality >= 1
#  Class "Gems"
#  BaseType "Sweep" "Cleave" "Shield Charge" "Added Fire Damage Support" "Melee Physical Damage Support" "Punishment" "Bloodlust Support" "Molten Shell" "Vaal Molten Shell" "Determination" "Iron Grip Support" "Shockwave Totem" "Holy Flame Totem" "Animate Guardian" "Herald of Purity" "Reckoning" "Vengeance" "Summon Stone Golem" "Chance to Bleed Support" "Maim Support" "Brutality Support" "Vulnerability" "War Banner" "Dread Banner" "Perforate" "Pride" "Awakened Added Fire Damage Support" "Awakened Brutality Support" "Awakened Melee Physical Damage Support" "Intimidating Cry" "Exsanguinate" "Corrupting Fever" "Bloodthirst Support" "Reap" "Defiance Banner" "Absolution" "Shield Crush" "Boneshatter" "Blade Flurry" "Double Strike" "Vaal Double Strike" "Lacerate" "Unearth" "Split Arrow" "Blood Rage" "Phase Run" "Puncture" "Bear Trap" "Ethereal Knives" "Cyclone" "Vaal Cyclone" "Spectral Shield Throw" "Animate Weapon" "Vicious Projectiles Support" "Herald of Agony" "Riposte" "Bladefall" "Blade Vortex" "Vaal Blade Vortex" "Explosive Trap" "Seismic Trap" "Withering Touch Support" "Lancing Steel" "Shattering Steel" "Impale Support" "Shrapnel Ballista" "Awakened Vicious Projectiles Support" "Blade Blast" "Splitting Steel" "Tornado" "Storm Burst" "Glacial Cascade" "Physical to Lightning Support" "Purifying Flame" "Wave of Conviction" "Divine Ire" "Summon Carrion Golem" "Penance Brand" "Void Sphere" "Hydrosphere" "Summon Reaper"
#  SetFontSize 45
#  SetTextColor 30 190 190 255
#  SetBorderColor 255 255 0 255
#  MinimapIcon 1 Yellow Triangle
#  PlayEffect Grey
#  CustomAlertSound "sounds/brian-01-clang.mp3"

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
    make4LinkFilter("BBBG", "3b1g"),
    make4LinkFilter("BBGG", "2b2g"),
    make4LinkFilter("GGGR", "3g1r", 55, 62),
    make4LinkFilter("GGGG", "4g", 55, 62),
    make4LinkFilter2({ evasion: 20 }),

    // 3-Links
    // make3LinkFilter("BBB", "Boots", "3b boots"),
    // make3LinkFilter("BBB", "Gloves", "3b gloves"),
    // make3LinkFilter("BBB", "Helmets", "3b helm"),
    // make3LinkFilter("BBB", "Body Armours", "3b body"),
    // make3LinkFilter("BBB", "Wand", "3b wand"),
    // make3LinkFilter("BBB", "Sceptre", "3b sceptre"),

    make3LinkFilter("BBG", "Boots", "2b1g boots"),
    make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
    make3LinkFilter("BBG", "Helmets", "2b1g helm"),
    make3LinkFilter("BBG", "Body Armours", "2b1g body"),
    make3LinkFilter("BBG", "Wand", "2b1g wand"),
    // make3LinkFilter("BBG", "Sceptre", "2b1g sceptre"),

    make3LinkFilter("BGG", "Boots", "2g1b boots"),
    make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
    make3LinkFilter("BGG", "Helmets", "2g1b helm"),
    make3LinkFilter("BGG", "Body Armours", "2g1b body"),
    make3LinkFilter("BGG", "Wand", "2g1b wand"),
    // make3LinkFilter("BGG", "Sceptre", "2g1b sceptre"),

    levelingBaseFilter(),
    getFilterFragment("ssf-bases", { amulets }),
    getFlaskFilter(),
    getManaFlaskFilter(),
  ].join("\n\n");
}
