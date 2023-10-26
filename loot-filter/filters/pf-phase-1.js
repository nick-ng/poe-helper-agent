import { makeLinkFilter } from "../common/generators.js";

import getPhase2, { preProcessBase as preProcessBaseA } from "./pf-phase-2.js";

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
		makeLinkFilter("RGGG", "3g1r", 1, 44),
		makeLinkFilter("RGG", "2g1r slot", 1, 44),
		makeLinkFilter("GGG", "3g slot", 1, 44),
	].join("\n\n");
}

export function preProcessBase(baseFilter) {
	return preProcessBaseA(baseFilter);
}
