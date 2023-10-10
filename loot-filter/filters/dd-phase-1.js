import { make3LinkFilter, makeLinkFilter } from "../common/generators.js";
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

Show
  AreaLevel <= 10
  BaseType "Goat's Horn"
  SetFontSize 45
  ##DefaultBackground
  PlayEffect Red
  CustomAlertSound "sounds/brian-goat-horn.mp3"
  MinimapIcon 1 Pink Star

Show
  AreaLevel <= 40
  BaseType "Faun's Horn"
  SetFontSize 45
  ##DefaultBackground
  PlayEffect Red
  CustomAlertSound "sounds/brian-faun-horn.mp3"
  MinimapIcon 1 Pink Star
`;

export default function getFilter() {
	return [
		getPhase2(),
		custom,
		makeLinkFilter("BBBB", "brian-slot-4-link", 1, 44),
		makeLinkFilter("BBBG", "brian-slot-4-link", 1, 44),
		makeLinkFilter("BBBR", "brian-slot-4-link", 1, 44),
		makeLinkFilter("RRGB", "brian-slot-4-link", 1, 44),
		makeLinkFilter("RGBB", "brian-slot-4-link", 1, 44),
		makeLinkFilter("RGGB", "brian-slot-4-link", 1, 44),
		make3LinkFilter("BBB", "Boots", "3b boots"),
		make3LinkFilter("BBB", "Gloves", "3b gloves"),
		make3LinkFilter("BBB", "Helmets", "3b helm"),
		make3LinkFilter("BBB", "Body Armours", "3b body"),
		make3LinkFilter("BBG", "Boots", "2b1g boots"),
		make3LinkFilter("BBG", "Gloves", "2b1g gloves"),
		make3LinkFilter("BBG", "Helmets", "2b1g helm"),
		make3LinkFilter("BBG", "Body Armours", "2b1g body"),
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
