import { makeBaseTypeFilter } from "../common/generators.js";
import { getDivCardFilter } from "../common/divination-cards.js";
import { getFilterFragment } from "../filter-loader.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[
		"The Coming Storm", // Lightning Coil
		"Gift of Asenath", // Asenath's Gentle Touch
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
		"Desert Brigandine", // Lightning Coil
		"Silk Gloves", // Asenath's Gentle Touch
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
  Rarity = Unique
  Class "Rings"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 255 0 0 255
  SetBorderColor 100 100 100 255
  PlayEffect Red
  MinimapIcon 2 Brown Star

Show
  Rarity Rare
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Dagger" "Warstaves"
  FracturedItem False
  Identified False
  SetFontSize 30
  SetBorderColor 0 200 157 255
  SocketGroup RGB
  Sockets < 6
  Height <= 2
  SetBackgroundColor 40 40 40
  SetBorderColor 150 150 150

Show
  Rarity Rare
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Dagger" "Warstaves"
  FracturedItem False
  Identified False
  SetFontSize 30
  SetBorderColor 0 200 157 255
  SocketGroup RGB
  Sockets < 6
  Width <= 1
  SetBackgroundColor 40 40 40
  SetBorderColor 150 150 150

Hide
  Rarity Rare
  AreaLevel > 24
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Daggers" "Warstaves"
  FracturedItem False
  Identified False
  SetFontSize 45
  SetBorderColor 0 200 157 255
  Sockets < 6
`;

export default function getFilter() {
	return [
		uniqueDivinationCards,
		uniques,
		custom,
		getDivCardFilter(),
		getFilterFragment("ssf-bases-top", {
			amulets: '"Lapis Amulet" "Amber Amulet" "Agate Amulet"',
		}),
		getFilterFragment("ssf-bases", {
			amulets: '"Lapis Amulet" "Amber Amulet" "Agate Amulet"',
		}),
		getFilterFragment("base", {
			amulets: '"Lapis Amulet" "Amber Amulet" "Agate Amulet"',
		}),
	].join("\n\n");
}

export function preProcessBase(baseFilter) {
	return baseFilter
		.replace(
			/##### Section 14 - Caster Levelling ##(.|\n)+### Section 18 - Armour ###/,
			""
		)
		.replaceAll(/^#{2,}$/gm, "");
}
