import getPhase3 from "./2h-phase-3.js";
import {
	make3LinkFilter,
	make4LinkFilter,
	makeWeaponBlock,
} from "../common/generators.js";

import getFlaskFilter from "../../filter-generators/flasks.js";

const amulets = '"Jade Amulet" "Turquoise Amulet"';

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

export default function getFilter() {
	return [
		getPhase3(),
		...weapons.map((weapon) => {
			const [maxAreaLevel, baseType, sound] = weapon;
			return makeWeaponBlock(maxAreaLevel, baseType, sound);
		}),

		// 4-Links
		// make4LinkFilter("GGGR", "3g1r"),
		// make4LinkFilter("RRGG", "2r2g"),
		make4LinkFilter("RRRG", "3r1g"),
		make4LinkFilter("RRRR", "4r"),

		// 3-Links
		make3LinkFilter("GGR", "Boots", "2g1r boots"),
		make3LinkFilter("GGR", "Gloves", "2g1r gloves"),
		make3LinkFilter("GGR", "Helmets", "2g1r helm"),
		make3LinkFilter("GGR", "Body Armours", "2g1r body"),

		make3LinkFilter("RRR", "Boots", "3r boots"),
		make3LinkFilter("RRR", "Gloves", "3r gloves"),
		make3LinkFilter("RRR", "Helmets", "3r helm"),
		make3LinkFilter("RRR", "Body Armours", "3r body"),

		make3LinkFilter("RRG", "Boots", "2r1g boots"),
		make3LinkFilter("RRG", "Gloves", "2r1g gloves"),
		make3LinkFilter("RRG", "Helmets", "2r1g helm"),
		make3LinkFilter("RRG", "Body Armours", "2r1g body"),

		// other stuff
		getFlaskFilter(),
	].join("\n\n");
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
