import { makeBaseTypeFilter } from "../common/generators.js";
import getPhase3 from "./phase-3.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[
		"A Dab of Ink", // The Poet's Pen
		"Broken Truce", // Cold Iron Point
		"The Porcupine", // 6-link Short Bow
	],
	[
		"SetFontSize 45",
		"##BrightBackground",
		"SetTextColor 232 99 0 255",
		"SetBorderColor 47 252 47 255",
		"MinimapIcon 2 Brown Star",
		"PlayEffect Brown",
		'CustomAlertSound "sounds/imexile-ok.mp3"',
	]
);

const uniques = makeBaseTypeFilter(
	[
		"Carved Wand", // Poet's Pen
		"Ezomyte Dagger", // Cold Iron Point
		"Serpentscale Gauntlets", // Haemophilia
		"Silk Gloves", // Asenath's Gentle Touch
		"Wyrmscale Gauntlets", // Tanu Ahi
		"Soldier Helmet", // Honourhome
		"Rawhide Boots", // Seven-League Step
		"Destiny Leather", // Queen of the Forest
		"Stibnite Flask", // Witchfire Brew
		"Nightmare Bascinet", // Devoto's Devotion
	],
	[
		"Rarity Unique",
		"SetFontSize 45",
		"##BrightBackground",
		"SetTextColor 232 99 0 255",
		"SetBorderColor 47 252 47 255",
		"MinimapIcon 2 Brown Star",
		"PlayEffect Brown",
		'CustomAlertSound "sounds/imexile-ok.mp3"',
	]
);

const custom = `
Show
  Class "Currency"
  BaseType "of Fear"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle

Show
  BaseDefencePercentile >= 50
  Rarity = Rare
  BaseType == ##strdexGloves1 ##strGloves1 ##strdexBoots1 ##strBoots1 ##strdexHelmet1 ##strHelmet1 ##dexGloves1
  ItemLevel >= 85
  LinkedSockets <= 5
  SetFontSize 40
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star

Show
  Rarity = Rare
  BaseType == "Feathered Arrow Quiver"
  ItemLevel >= 82
  SetFontSize 40
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star

Show
  ItemLevel >= 84
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Turquoise Amulet" "Jade Amulet" "Lapis Amulet"
  SetFontSize 40
  PlayEffect Red
  MinimapIcon 1 Yellow Cross

Show
  ItemLevel >= 72
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Turquoise Amulet" "Jade Amulet" "Lapis Amulet"
  SetFontSize 35
  PlayEffect Yellow
  MinimapIcon 1 Yellow Cross

Show
  ItemLevel >= 54
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Turquoise Amulet" "Jade Amulet" "Lapis Amulet"
  SetFontSize 30
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Cross
`;

export default function getFilter() {
	return [getPhase3(), uniqueDivinationCards, uniques, custom].join("\n\n");
}
