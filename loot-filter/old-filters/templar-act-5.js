import { levelingBaseFilter } from "../filters.js";
import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import { getFilterFragment, basesToFilter } from "../filter-loader.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

const fast1hSwords = ["Rusted Sword", "Copper Sword"];
const highDex1hSwords = [
	"Sabre",
	"Rusted Spike",
	"Whalebone Rapier",
	"Battered Foil",
];

const fast1hAxes = ["Rusted Hatchet", "Jade Hatchet"];
const highDex1hAxes = ["Boarding Axe"];

const custom = `
Show # Leap Slam swords
	Rarity <= Rare
	SocketGroup = RGB
	BaseType == "${fast1hSwords.join('"  "')}"
	SetFontSize 45
	SetBorderColor 0 185 185 200
	SetBackgroundColor 255 255 255 125
	# SetTextColor 0 140 140 200
	MinimapIcon 0 Cyan Cross
	CustomAlertSound "sounds/brian-weapon.mp3"

Show # Leap Slam swords
	Rarity <= Rare
	SocketGroup = RG
	BaseType == "${fast1hSwords.join('"  "')}"
	SetFontSize 45
	SetBorderColor 0 185 185 200
	SetBackgroundColor 255 255 255 125
	# SetTextColor 0 140 140 200
	MinimapIcon 0 Cyan Cross
	CustomAlertSound "sounds/brian-weapon.mp3"

Show # Leap Slam axes
	Rarity <= Rare
	SocketGroup = RGB
	BaseType == "${fast1hAxes.join('"  "')}"
	SetFontSize 45
	SetBorderColor 255 0 255 200
	SetBackgroundColor 255 255 255 125
	# SetTextColor 255 0 255 200
	MinimapIcon 0 Magenta Cross
	CustomAlertSound "sounds/brian-weapon.mp3"

Show # Goat Horn
	Rarity <= Rare
	SocketGroup = RGB
	BaseType == "Goat's Horn"
	SetFontSize 45
	SetBorderColor 0 0 255 200
	SetBackgroundColor 255 255 255 125
	MinimapIcon 0 Blue Cross
	CustomAlertSound "sounds/brian-goat-horn.mp3"

Show
  AreaLevel < 20
  BaseType "Jade Amulet" "Amber Amulet"
  Corrupted False
  SetFontSize 45
  PlayAlertSound 16 200
  MinimapIcon 1 Blue Moon
  ##GoodBaseBorder

Hide
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"
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
		"Astral Plate", // Str
		"Glorious Plate", // Str
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

		// "Murder Mitts", // Dex/Int
		// "Fugitive Boots", // Dex/Int
		// "Murder Boots", // Dex/Int
		// "Vaal Mask", // Dex/Int
		// "Deicide Mask", // Dex/Int

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
		"Titan Gauntlets", // Str
		"Spiked Gloves", // Str
		"Titan Greaves", // Str
		"Royal Burgonet", // Str
	]),
};

const weapons = [
	[12, "Longsword", true],
	[12, "Jade Chopper", false],
	[23, "Woodsplitter", true],
	[23, "Bastard Sword", false],
	[23, "Poleaxe", false],
	[33, "Double Axe", true],
	[37, "Gilded Axe", false],
	[45, "Shadow Axe", true],
	[45, "Jasper Chopper", false],
	[49, "Timber Axe", false],
	[62, "Headsman Axe", true],
	[62, "Labrys", true],
	[58, "Noble Axe", false],
	[60, "Abyssal Axe", false],
	[67, "Karui Chopper", false],
	[67, "Sundering Axe", false],
	[67, "Ezomyte Axe", true],
	[67, "Vaal Axe", false],
	[67, "Despot Axe", true],
	[67, "Void Axe", false],
];

// https://textreader.pro/
export default function getFilter() {
	return [
		custom,

		// 4-Links
		make4LinkFilter("GGGR", "3g1r"),
		make4LinkFilter("RRGG", "2r2g"),
		// make4LinkFilter("RRRG", "3r1g"),
		// make4LinkFilter("RRRR", "4r"),

		// 3-Links
		make3LinkFilter("GGR", "Boots", "2g1r boots", 1, 12),
		make3LinkFilter("GGR", "Gloves", "2g1r gloves", 1, 12),
		make3LinkFilter("GGR", "Helmets", "2g1r helm", 1, 12),
		make3LinkFilter("GGR", "Body Armours", "2g1r body", 1, 12),

		// make3LinkFilter("RRR", "Boots", "3r boots"),
		// make3LinkFilter("RRR", "Gloves", "3r gloves"),
		// make3LinkFilter("RRR", "Helmets", "3r helm"),
		// make3LinkFilter("RRR", "Body Armours", "3r body"),

		make3LinkFilter("RRG", "Boots", "2r1g boots"),
		make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
		make3LinkFilter("RRG", "Helmets", "2r1g helm"),
		make3LinkFilter("RRG", "Body Armours", "2r1g body"),

		// other stuff
		levelingBaseFilter(),
		getFilterFragment("base", replacer),
		getFlaskFilter(),
	].join("\n\n");
}
