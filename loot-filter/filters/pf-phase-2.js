import { makeBaseTypeFilter } from "../common/generators.js";
import getPhase3, { preProcessBase as preProcessBaseA } from "./pf-phase-3.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[
		"The Porcupine", // 6-link Short Bow
		"The Escape", // Seven-League Step
		"Alivia's Grace", // Queen of the Forest
		"The Gladiator", // Devoto's Devotion
		"Broken Truce", // Cold Iron Point
		"Dark Temptation", // Obliteration
	],
	[
		"SetFontSize 45",
		"##BrightBackground",
		"SetTextColor 255 140 54 255",
		"SetBorderColor 47 252 47 255",
		"MinimapIcon 2 Brown Star",
		"PlayEffect Brown",
		'CustomAlertSound "sounds/imexile-ok.mp3"',
	]
);

const uniques = makeBaseTypeFilter(
	[
		"Rawhide Boots", // Seven-League Step
		"Destiny Leather", // Queen of the Forest
		"Stibnite Flask", // Witchfire Brew
		"Nightmare Bascinet", // Devoto's Devotion
		"Sentinel Jacket", // Dendrobate
		"Ezomyte Dagger", // Cold Iron Point
		"Imbued Wand", // Obliteration
	],
	[
		"Rarity Unique",
		"SetFontSize 45",
		"##BrightBackground",
		"SetTextColor 255 140 54 255",
		"SetBorderColor 47 252 47 255",
		"MinimapIcon 2 Brown Star",
		"PlayEffect Brown",
		'CustomAlertSound "sounds/imexile-ok.mp3"',
	]
);

const custom = `
Show
  BaseDefencePercentile >= 50
  Rarity = Rare
  BaseType == ##strdexGloves1 ##dexGloves1 ##strdexBoots1 ##dexBoots1 ##strdexHelmet1 ##dexHelmet1
  ItemLevel >= 85
  LinkedSockets <= 5
  SetFontSize 40
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star

Show
  Rarity = Rare
  BaseType == "Feathered Arrow Quiver"
  ItemLevel >= 77
  SetFontSize 40
  ##DefaultBackground
  ##GoodBaseBorder
  PlayEffect Red
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 72
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Lapis Amulet" "Amber Amulet" "Agate Amulet"
  SetFontSize 35
  PlayEffect Yellow
  MinimapIcon 1 Yellow Cross

Show
  ItemLevel >= 54
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Lapis Amulet" "Amber Amulet" "Agate Amulet"
  SetFontSize 30
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Cross
`;

export default function getFilter() {
	return [getPhase3(), uniqueDivinationCards, uniques, custom].join("\n\n");
}

export function preProcessBase(baseFilter) {
	return preProcessBaseA(baseFilter);
}
