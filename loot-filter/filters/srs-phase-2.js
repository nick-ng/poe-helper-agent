import { makeBaseTypeFilter } from "../common/generators.js";
import getPhase3 from "./srs-phase-3.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[
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
		"Rawhide Boots", // Seven-League Step
		"Destiny Leather", // Queen of the Forest
		"Stibnite Flask", // Witchfire Brew
		"Nightmare Bascinet", // Devoto's Devotion
		"Tyrant's Sekhem", // Sign of the Sin Eater
		"Legion Boots", // March of the Legion
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
  ItemLevel >= 50
  Rarity <= Rare
  BaseType "Large Cluster Jewel"
  EnchantmentPassiveNode "Minion Damage"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"

Show
  ItemLevel >= 68
  Rarity <= Rare
  BaseType "Medium Cluster Jewel"
  EnchantmentPassiveNode "Minion Life"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"

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
  ItemLevel >= 72
  AreaLevel < 83
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 40
  ##DefaultBackground
  ##GoodBaseBorder
  PlayEffect Red
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 55
  AreaLevel <= 72
  Rarity <= Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 35
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

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
  BaseType == "Jade Amulet" "Amber Amulet" "Citrine Amulet"
  SetFontSize 35
  PlayEffect Yellow
  MinimapIcon 1 Yellow Cross

Show
  ItemLevel >= 54
  AreaLevel < 83
  Rarity <= Rare
  BaseType == "Jade Amulet" "Amber Amulet" "Citrine Amulet"
  SetFontSize 30
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Cross
`;

export default function getFilter() {
	return [getPhase3(), uniqueDivinationCards, uniques, custom].join("\n\n");
}

export function preProcessBase(baseFilter) {
	return baseFilter
		.replace(
			/##### Section 16.1 - 1h Melee Levelling ##(.|\n)+### Section 18 - Armour ###/,
			""
		)
		.replaceAll(/^#{2,}$/gm, "");
}
