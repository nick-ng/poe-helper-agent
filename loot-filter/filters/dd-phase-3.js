import { makeBaseTypeFilter } from "../common/generators.js";
import { getDivCardFilter } from "../common/divination-cards.js";
import { getFilterFragment } from "../filter-loader.js";

const uniqueDivinationCards = makeBaseTypeFilter(
	[],
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
	[],
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
  ##GoodBaseBorder
  PlayEffect Red
  MinimapIcon 1 Pink Star

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
  Corrupted False
  FracturedItem False
  Identified False
  HasInfluence None
  SetFontSize 45
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Magic
  AreaLevel > 24
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Daggers" "Warstaves"
  Corrupted False
  FracturedItem False
  Identified False
  HasInfluence None
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Normal
  AreaLevel > 24
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Daggers" "Warstaves"
  Corrupted False
  HasInfluence None
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Magic
  AreaLevel > 24
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Daggers" "Warstaves"
  Corrupted False
  FracturedItem False
  Identified False
  HasInfluence None
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Normal
  AreaLevel > 24
  Class == "One hand axes" "Claw" "Thrusting one hand swords" "Staff" "One hand swords" "Two hand swords" "Two hand maces" "Two hand axes" "One hand maces" "Daggers" "Warstaves"
  Corrupted False
  HasInfluence None
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Magic
  AreaLevel > 65
  ItemLevel < 83
  Class "Helmets" "Gloves" "Boots" "Body Armour"
  Corrupted False
  FracturedItem False
  Identified False
  HasInfluence None
  SetBorderColor 0 200 157 255
  Sockets < 6

Hide
  Rarity Normal
  AreaLevel > 65
  ItemLevel < 83
  Class "Helmets" "Gloves" "Boots" "Body Armour"
  Corrupted False
  FracturedItem False
  HasInfluence None
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

export function preProcessBase(baseFilter) {
	return baseFilter
		.replace(
			/##### Section 15 - Summoner Levelling ##(.|\n)+### Section 18 - Armour ###/,
			""
		)
		.replaceAll(/^#{2,}$/gm, "");
}
