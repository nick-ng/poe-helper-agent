import getPhase2 from "./2h-phase-2.js";

export default function getFilter() {
	return getPhase2();
}

export function preProcessBase(baseFilter) {
	return baseFilter
		.replace(
			/##### Section Section 14 - Caster Levelling ##(.|\n)+### Section 16.1 - 1h Melee Levelling ###/,
			""
		)
		.replace(
			/##### Section 17 - Ranged Levelling ##(.|\n)+### Section 18 - Armour ###/,
			""
		)
		.replaceAll(/^#{2,}$/gm, "");
}
