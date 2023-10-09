import { getFilterFragment, basesToFilter } from "../filter-loader.js";
import { uniqueDivinationCards } from "../filters.js";

const weapons = `
Show
  ItemLevel >= 76
  ItemLevel < 78
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris" "Platinum Kris"
  SetFontSize 45
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 2 Pink Star

Show
  ItemLevel >= 76
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris" "Platinum Kris"
  SetFontSize 35
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  Class == "Rune Daggers"
  Corrupted False
  Rarity <= Rare
  SetFontSize 30
  ItemLevel >= 76
  ItemLevel < 78
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star
  ##DefaultBackground
`;

const replacer = {
	ilvl86a: basesToFilter([
		"Full Dragonscale", // Str/Dex
		"Saint's Hauberk", // Str/Int
		"Titanium Spirit Shield", // Int - Max ES
		"Harmonic Spirit Shield", // Int - Spell Power
	]),
	ilvl86b: basesToFilter([
		"General's Brigandine", // Str/Dex
		"Triumphant Lamellar", // Str/Dex
		"Saintly Chainmail", // Str/Int
	]),
	ilvl85a: basesToFilter([
		"Pig-Faced Bascinet", // Str/Dex
		"Dragonscale Gauntlets", // Str/Dex
		"Dragonscale Boots", // Str/Dex
		"Two-Toned Boots",
	]),
	ilvl85b: basesToFilter([
		"Nightmare Bascinet", // Str/Dex
		"Fluted Bascinet", // Str/Dex
	]),
};

// https://textreader.pro/
export default function getFilter() {
	return [
		weapons,
		getFilterFragment("ssf-bases-top", replacer),
		getFilterFragment("base", replacer),
		uniqueDivinationCards,
	].join("\n\n");
}
