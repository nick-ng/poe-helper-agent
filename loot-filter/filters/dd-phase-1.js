import { make3LinkFilter, makeLinkFilter } from "../common/generators.js";
import { getLeapSlamFilter } from "../../filter-generators/leap-slam-weapons.js";
import getFlaskFilter from "../../filter-generators/flasks.js";

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
  ##GoodBaseBorder
  PlayEffect Red
  CustomAlertSound "sounds/brian-goat-horn.mp3"
  MinimapIcon 1 Pink Star

Show
  AreaLevel <= 40
  BaseType "Faun's Horn"
  SetFontSize 45
  ##DefaultBackground
  ##GoodBaseBorder
  PlayEffect Red
  CustomAlertSound "sounds/brian-faun-horn.mp3"
  MinimapIcon 1 Pink Star

${getLeapSlamFilter({ maxAreaLevel: 47, minItemLevel: 1 })}
`;

// 3-links
// RGB: Cremation + Cruelty + Arcane Surge/Concentrated Effect
// GBB: Cremation + Arcane Surge + Concentrated Effect
// GGB: Cremation + Arcane Surge/Concentrated Effect + LMP/GMP
// BBB: Armageddon Brand + Combustion + Ele. Prolif./Ignite Prolif.
// 4-links
// RRGB: Cremation + Cruelty + Arcane Surge/Concentrated Effect + Burning Damage
// RGBB: Cremation + Cruelty + Arcane Surge + Concentrated Effect
// RGGB: Cremation + Cruelty + Arcane Surge/Concentrated Effect + LMP/GMP
// GGBB: Cremation + Arcane Surge + Concentrated Effect + LMP/GMP
// GBBB: Cremation + Arcane Surge + Concentrated Effect + Pinpoint
// BBBB: Armageddon Brand + Combustion + Ele. Prolif./Ignite Prolif. + Faster Casting
// RBBB: Armageddon Brand + Combustion + Ele. Prolif./Ignite Prolif. + Cruelty
export default function getFilter() {
	return [
		getPhase2(),
		custom,
		makeLinkFilter("BBBB", "brian-slot-4-link", 1, 44), // Arma. Brand
		makeLinkFilter("BBBR", "brian-slot-4-link", 1, 44), // Arma. Brand
		makeLinkFilter("BBBG", "brian-slot-4-link", 1, 44), // Cremation
		makeLinkFilter("RRGB", "brian-slot-4-link", 1, 44), // Cremation
		makeLinkFilter("RGBB", "brian-slot-4-link", 1, 44), // Cremation
		makeLinkFilter("RGGB", "brian-slot-4-link", 1, 44), // Cremation
		makeLinkFilter("GGBB", "brian-slot-4-link", 1, 44), // Cremation
		make3LinkFilter("BBB", "Boots", "3b boots"),
		make3LinkFilter("BBB", "Gloves", "3b gloves"),
		make3LinkFilter("BBB", "Helmets", "3b helm"),
		make3LinkFilter("BBB", "Body Armours", "3b body"),
		make3LinkFilter("GBB", "Boots", "2b1g boots"),
		make3LinkFilter("GBB", "Gloves", "2b1g gloves"),
		make3LinkFilter("GBB", "Helmets", "2b1g helm"),
		make3LinkFilter("GBB", "Body Armours", "2b1g body"),
		getFlaskFilter(),
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
