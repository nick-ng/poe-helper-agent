import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import getPhase2 from "./dd-phase-2.js";

const custom = `
Show
  BaseDefencePercentile >= 40
  Rarity = Rare
  BaseType == ##strdexBody9 ##strBody9
  ItemLevel >= 77
  SetFontSize 40
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star

Show
  BaseDefencePercentile >= 40
  Rarity = Rare
  BaseType == ##strdexGloves9 ##strGloves9 ##strdexBoots9 ##strBoots9 ##strdexHelmet9 ##strHelmet9
  ItemLevel >= 76
  SetFontSize 40
  PlayEffect Grey Temp
  MinimapIcon 1 Yellow Star
`;

export default function getFilter() {
	return [
		getPhase2(),
		custom,
		make4LinkFilter("BBBB", "4b"), // Armageddon Brand
		make4LinkFilter("BBBG", "3b1g"),
		make4LinkFilter("BBBR", "3b1r"),
		make4LinkFilter("RRGB", "2rgb"),
		make3LinkFilter("BBB", "Boots", "3b boots"),
		make3LinkFilter("BBB", "Gloves", "3b gloves"),
		make3LinkFilter("BBB", "Helmets", "3b helm"),
		make3LinkFilter("BBB", "Body Armours", "3b body"),
		make3LinkFilter("BBB", "Wand", "3b wand"),
		make3LinkFilter("BBG", "Boots", "2b1g boots"),
		make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
		make3LinkFilter("BBG", "Helmets", "2b1g helm"),
		make3LinkFilter("BBG", "Body Armours", "2b1g body"),
		make3LinkFilter("BBG", "Wand", "2b1g wand"),
	].join("\n\n");
}
