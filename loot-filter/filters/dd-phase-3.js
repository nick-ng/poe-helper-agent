import { makeBaseTypeFilter } from "../common/generators.js";
import { getDivCardFilter } from "../common/divination-cards.js";
import { getFilterFragment } from "../filter-loader.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[],
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
	[],

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
  ItemLevel >= 84
  Rarity = Rare
  BaseType "Void Sceptre" "Opal Sceptre"
  SetFontSize 40
  ##DefaultBackground
  PlayEffect Red
  MinimapIcon 1 Pink Star
`;

export default function getFilter() {
	return [
		uniqueDivinationCards,
		uniques,
		custom,
		getDivCardFilter(),
		getFilterFragment("ssf-bases-top", {
			amulets: '"Jade Amulet" "Amber Amulet" "Citrine Amulet"',
		}),
		getFilterFragment("ssf-bases", {
			amulets: '"Jade Amulet" "Amber Amulet" "Citrine Amulet"',
		}),
		getFilterFragment("base", {
			amulets: '"Jade Amulet" "Amber Amulet" "Citrine Amulet"',
		}),
	].join("\n\n");
}
