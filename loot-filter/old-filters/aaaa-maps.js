import { getFilterFragment, basesToFilter } from "../filter-loader.js";
import { uniqueDivinationCards } from "../filters.js";

const custom = `
Show
  BaseType "Reaver Sword" "Maraketh Bow" "Steelwood Bow" "Reflex Bow"
  ItemLevel >= 82
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 100 100 100 100
  SetBorderColor 200 200 255 255
  CustomAlertSound "sounds/ding.mp3"
  MinimapIcon 0 White Star

Show
  BaseType "Reaver Sword" "Maraketh Bow" "Steelwood Bow" "Reflex Bow"
  ItemLevel >= 78
  SetFontSize 35
  SetTextColor 255 255 255 255
  SetBackgroundColor 50 50 50 100
  CustomAlertSound "sounds/ding.mp3"
  MinimapIcon 0 White Star
`;

export const replacer = {
	ilvl86a: basesToFilter([
		// "Carnal Armour", // Dex/Int
		"Full Dragonscale", // Str/Dex
		// "Cardinal Round Shield", // Str/Dex
		// "Saint's Hauberk", // Str/Int
		// "Supreme Spiked Shield", // Dex/Int
		// "Mirrored Spiked Shield", // Dex/Int
		// "Colossal Tower Shield", // Str
	]),
	ilvl86b: basesToFilter([
		// "Sadist Garb", // Dex/Int
		// "Blood Raiment", // Dex/Int
		"General's Brigandine", // Str/Dex
		"Triumphant Lamellar", // Str/Dex
		// "Saintly Chainmail", // Str/Int
		// "Assassin's Garb", // Dex
		// "Crusader Buckler", // Dex
	]),
	ilvl85a: basesToFilter([
		"Pig-Faced Bascinet", // Str/Dex
		"Dragonscale Gauntlets", // Str/Dex
		"Dragonscale Boots", // Str/Dex
		"Two-Toned Boots",

		// "Crusader Gloves", // Str/Int
		// "Crusader Boots", // Str/Int
		// "Prophet Crown", // Str/Int

		"Murder Mitts", // Dex/Int
		"Fugitive Boots", // Dex/Int
		"Murder Boots", // Dex/Int
		"Vaal Mask", // Dex/Int
		"Deicide Mask", // Dex/Int

		// "Sorcerer Gloves", // Int
		// "Hubris Circlet", // Int

		// "Lion Pelt", // Dex
		// "Slink Boots", // Dex
		// "Slink Gloves", // Dex
		// "Gripped Gloves", // Dex
	]),
	ilvl85b: basesToFilter([
		// "Fingerless Silk Gloves", // Int, Spell Damage
		// "Nightmare Bascinet", // Str/Dex
		// "Deicide Mask", // Dex/Int
	]),
};

// https://textreader.pro/
export default function getFilter() {
	return [
		custom,
		uniqueDivinationCards,
		getFilterFragment("ssf-bases-top", replacer),
		getFilterFragment("base", replacer),
	].join("\n\n");
}
