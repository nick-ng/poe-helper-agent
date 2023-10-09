import { levelingBaseFilter } from "../filters.js";
import {
	make3LinkFilter,
	make4LinkFilter,
	makeFullWeaponBlock,
} from "../common/generators.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter, {
	getManaFlaskFilter,
} from "../../filter-generators/flasks.js";

const amulets = '"Amber Amulet" "Citrine Amulet"';

const custom = `
Show
  Rarity Unique
  BaseType == "Deerskin Boots" "Crimson Jewel" "Ezomyte Dagger"
  SetFontSize 45
  CustomAlertSound "sounds/brian-06-shing.mp3"
  PlayEffect Brown
  MinimapIcon 2 Brown Star

#Show  # +1 all Fire Gems recipe
#  Quality >= 1
#  Class "Gems"
#  BaseType "Purity of Fire" "Vaal Molten Shell" "Anger" "Tectonic Slam" "Holy Flame Totem" "Fire Penetration Support" "Searing Bond" "Burning Damage Support" "Flame Link" "Vaal Impurity of Fire" "Infernal Cry" "Summon Flame Golem" "Herald of Ash" "Molten Strike" "Awakened Fire Penetration Support" "Consecrated Path" "Awakened Burning Damage Support" "Cold to Fire Support" "Awakened Added Fire Damage Support" "Infernal Blow" "Added Fire Damage Support" "Molten Shell" "Wild Strike" "Artillery Ballista" "Blast Rain" "Cremation" "Explosive Trap" "Flamethrower Trap" "Volatile Dead" "Explosive Arrow" "Burning Arrow" "Vaal Burning Arrow" "Fire Trap" "Explosive Concoction" "Vaal Detonate Dead" "Detonate Dead" "Elemental Hit" "Flame Wall" "Scorching Ray" "Summon Raging Spirit" "Vaal Fireball" "Righteous Fire" "Vaal Righteous Fire" "Discharge" "Combustion Support" "Firestorm" "Elemental Proliferation Support" "Flammability" "Incinerate" "Flameblast" "Vaal Flameblast" "Blazing Salvo" "Flame Surge" "Pyroclast Mine" "Flame Dash" "Rolling Magma" "Fireball" "Ignite Proliferation Support" "Immolate Support" "Bodyswap" "Armageddon Brand" "Purifying Flame" "Wave of Conviction" "Infernal Legion Support"
#  SetFontSize 45
#  SetBackgroundColor 30 190 190 255
#  SetTextColor 0 0 0 255
#  SetBorderColor 0 0 0 255
#  MinimapIcon 1 White Triangle
#  PlayEffect Grey
#  CustomAlertSound "sounds/brian-01-clang.mp3"

Show  # +1 all Physical Gems recipe
  Quality >= 1
  Class "Gems"
  BaseType "Sweep" "Cleave" "Shield Charge" "Added Fire Damage Support" "Melee Physical Damage Support" "Punishment" "Bloodlust Support" "Molten Shell" "Vaal Molten Shell" "Determination" "Iron Grip Support" "Shockwave Totem" "Holy Flame Totem" "Animate Guardian" "Herald of Purity" "Reckoning" "Vengeance" "Summon Stone Golem" "Chance to Bleed Support" "Maim Support" "Brutality Support" "Vulnerability" "War Banner" "Dread Banner" "Perforate" "Pride" "Awakened Added Fire Damage Support" "Awakened Brutality Support" "Awakened Melee Physical Damage Support" "Intimidating Cry" "Exsanguinate" "Corrupting Fever" "Bloodthirst Support" "Reap" "Defiance Banner" "Absolution" "Shield Crush" "Boneshatter" "Blade Flurry" "Double Strike" "Vaal Double Strike" "Lacerate" "Unearth" "Split Arrow" "Blood Rage" "Phase Run" "Puncture" "Bear Trap" "Ethereal Knives" "Cyclone" "Vaal Cyclone" "Spectral Shield Throw" "Animate Weapon" "Vicious Projectiles Support" "Herald of Agony" "Riposte" "Bladefall" "Blade Vortex" "Vaal Blade Vortex" "Explosive Trap" "Seismic Trap" "Withering Touch Support" "Lancing Steel" "Shattering Steel" "Impale Support" "Shrapnel Ballista" "Awakened Vicious Projectiles Support" "Blade Blast" "Splitting Steel" "Tornado" "Storm Burst" "Glacial Cascade" "Physical to Lightning Support" "Purifying Flame" "Wave of Conviction" "Divine Ire" "Summon Carrion Golem" "Penance Brand" "Void Sphere" "Hydrosphere" "Summon Reaper"
  SetFontSize 45
  SetBackgroundColor 30 190 190 255
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0 255
  MinimapIcon 1 White Triangle
  PlayEffect Grey
  CustomAlertSound "sounds/brian-01-clang.mp3"

Show
  ItemLevel >= 78
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris" "Platinum Kris"
  SetFontSize 40
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 64
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris"
  SetFontSize 35
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  Class == "Rune Daggers"
  Corrupted False
  Rarity <= Rare
  ItemLevel = 12 # T4 DoT Multi
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star
  ##DefaultBackground

Hide
  AreaLevel > 68
  Identified False
	FracturedItem False
  Class "Body Armours" "Boots" "Gloves" "Helmets"
  BaseEvasion < 10
  Sockets < 6
  LinkedSockets < 5

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Two Hand" "Bows" "Claws" "Warstaves"
`;

// https://textreader.pro/
export default function getFilter() {
	return [
		make4LinkFilter("BBBR", "3b1r"),
		make4LinkFilter("BBRR", "2b2r"),

		// 3-Links
		make3LinkFilter("3BR", "Boots", "brian-3-link"),
		make3LinkFilter("3BR", "Gloves", "brian-3-link"),
		make3LinkFilter("3BR", "Helmets", "brian-3-link"),
		make3LinkFilter("3BR", "Body Armours", "brian-3-link"),
		make3LinkFilter("3BR", "Wand", "brian-3-link"),

		make3LinkFilter("BBG", "Boots", "2b1g boots"),
		make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
		make3LinkFilter("BBG", "Helmets", "2b1g helm"),
		make3LinkFilter("BBG", "Body Armours", "2b1g body"),
		make3LinkFilter("BBG", "Wand", "2b1g wand"),

		make3LinkFilter("BGG", "Boots", "2g1b boots"),
		make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
		make3LinkFilter("BGG", "Helmets", "2g1b helm"),
		make3LinkFilter("BGG", "Body Armours", "2g1b body"),
		make3LinkFilter("BGG", "Wand", "2g1b wand"),

		levelingBaseFilter(),
		getFilterFragment("ssf-bases", { amulets }),
		getFlaskFilter(),
		getManaFlaskFilter(),
		makeFullWeaponBlock([{ base: "Longsword", requiredLevel: 8 }]),
		custom,
	].join("\n\n");
}
