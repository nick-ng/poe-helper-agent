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
