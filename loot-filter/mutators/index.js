const mutations = {
	colours: {
		DefaultBackground: "SetBackgroundColor 0 0 0 120",
		BrightBackground: "SetBackgroundColor 255 255 255 255",
		ScrollOfWisdomText: "SetTextColor 210 178 135 220",
		PortalScrollText: "SetTextColor 50 240 240 220",
		T0CurrencyText: "SetTextColor 250 0 125 255",
		T1CurrencyText: "SetTextColor 255 127 0 255",
		T2CurrencyText: "SetTextColor 255 255 0 255",
		T3CurrencyText: "SetTextColor 0 255 0 255",
		T9CurrencyText: "SetTextColor 190 178 135 255",
		CurrencyBorder: "SetBorderColor 0 255 0 255",
		GoodBaseBorder: "SetBorderColor 255 88 255 200",
	},
	bodyArmour: {
		str: ["Glorious Plate", ["Gladiator Plate", "Astral Plate"]],
		dex: ["Zodiac Leather", "Assassin's Garb"],
		int: ["Vaal Regalia", "Widowsilk Robe"],
		strdex: [
			"General's Brigandine",
			["Triumphant Lamellar", "Full Dragonscale"],
			"Desert Brigandine",
		],
		strint: ["Saint's Hauberk", "Saintly Chainmail", "Elegant Ringmail"],
		dexint: [
			"Blood Raiment",
			["Carnal Armour", "Sadist Garb"],
			"Varnished Coat",
		],
	},
	gloves: {
		str: [
			["Titan Gauntlets", "Debilitation Gauntlets"],
			["Vaal Gauntlets", "Spiked Gloves"],
		],
		dex: [
			["Slink Gloves", "Gripped Gloves", "Sinistral Gloves"],
			"Stealth Gloves",
		],
		int: [
			"Sorcerer Gloves",
			["Nexus Gloves", "Fingerless Silk Gloves", "Arcanist Gloves"],
		],
		strdex: ["Dragonscale Gauntlets", "Hydrascale Gauntlets"],
		strint: ["Crusader Gloves", ["Apothecary's Gloves", "Legion Gloves"]],
		dexint: ["Murder Mitts", "Assassin's Mitts"],
	},
	boots: {
		str: [["Brimstone Treads", "Titan Greaves"], "Vaal Greaves"],
		dex: [["Stormrider Boots", "Slink Boots"], "Stealth Boots"],
		int: [["Dreamquest Slippers", "Sorcerer Boots"], "Arcanist Slippers"],
		strdex: [["Two-Toned Boots", "Dragonscale Boots"], "Hydrascale Boots"],
		strint: [["Two-Toned Boots", "Crusader Boots"], "Legion Boots"],
		dexint: [
			["Two-Toned Boots", "Fugitive Boots", "Murder Boots"],
			"Assassin's Boots",
		],
	},
	helmet: {
		str: ["Royal Burgonet", "Eternal Burgonet", "Ezomyte Burgonet"],
		dex: ["Lion Pelt", "Sinner Tricorne"],
		int: ["Hubris Circlet", "Mind Cage"],
		strdex: [
			"Pig-Faced Bascinet",
			["Nightmare Bascinet", "Fluted Bascinet", "Penitent Mask"],
			"Lacquered Helmet",
		],
		strint: [
			["Archdemon Crown", "Bone Helmet", "Prophet Crown"],
			"Praetor Crown",
			"Magistrate Crown",
		],
		dexint: [["Blizzard Crown", "Vaal Mask"], "Deicide Mask", "Harlequin Mask"],
	},
};

/**
 * @param {[string, string][]} replacer
 * @param {string} filter
 *
 * @return {string}
 */
const applyReplacer = (replacer, filter) => {
	return replacer.reduce((accumulator, r) => {
		const [key, value] = r;
		const re0 = new RegExp(`##${key}(##)?`, "ig");

		return accumulator.replaceAll(re0, `${value}`);
	}, filter);
};

/**
 * @param {string} filter
 *
 * @return {string}
 */
const applyColours = (filter) => {
	let newFilter = `
 Show
	AreaLevel >= 43
	${mutations.colours.DefaultBackground}
	Continue

 ${filter}`;

	return applyReplacer(Object.entries(mutations.colours), newFilter);
};

/**
 * @return {string}
 */
const getTiered = (tiers, tier) => {
	const tempTiers = [];

	for (let i = 0; i < tier + 1; i++) {
		if (!tiers[i]) {
			continue;
		}
		if (typeof tiers[i] === "string") {
			tempTiers.push(tiers[i]);
		} else {
			tempTiers.push(...tiers[i]);
		}
	}

	return `"${tempTiers.join('" "')}"`;
};

const tempFunc = (r, level, label, bases) => {
	if (!r[level]) {
		r[level] = {};
	}

	if (!r[level][label]) {
		r[level][label] = [];
	}

	r[level][label].push(...bases);

	return r;
};

/**
 * @param {string} filter
 *
 * @return {string}
 */
const applyArmour = (filter) => {
	const armourReplacer = [];
	const statReplacer = {};
	for (let n = 0; n < 10; n++) {
		Object.entries(mutations.bodyArmour).forEach(([label, tiers]) => {
			armourReplacer.push([`${label}body${n}`, getTiered(tiers, n)]);

			tempFunc(statReplacer, n, label, tiers);
		});

		Object.entries(mutations.gloves).forEach(([label, tiers]) => {
			armourReplacer.push([`${label}gloves${n}`, getTiered(tiers, n)]);

			tempFunc(statReplacer, n, label, tiers);
		});

		Object.entries(mutations.boots).forEach(([label, tiers]) => {
			armourReplacer.push([`${label}boots${n}`, getTiered(tiers, n)]);

			tempFunc(statReplacer, n, label, tiers);
		});

		Object.entries(mutations.helmet).forEach(([label, tiers]) => {
			armourReplacer.push([`${label}helmet${n}`, getTiered(tiers, n)]);

			tempFunc(statReplacer, n, label, tiers);
		});
	}

	Object.keys(statReplacer).forEach((n) => {
		Object.entries(statReplacer[n]).forEach(([label, tiers]) => {
			armourReplacer.push([`${label}${n}`, getTiered(tiers, n)]);
		});
	});

	return applyReplacer(armourReplacer, filter);
};

/**
 * @param {string} filter
 *
 * @return {string}
 */
const fixIndents = (filter) => filter.replaceAll(/^ +/gm, "\t");

/**
 * @param {string} filter
 *
 * @return {string}
 */
const cleanComments = (filter) => {
	const filterLines = filter.split("\n");

	const nonCommentLines = filterLines.filter((line) => {
		return !line.match(/^\s*#([^#]|$)/i);
	});

	return nonCommentLines
		.join("\n")
		.replaceAll(/\r/g, "")
		.replaceAll(/\n{2,}/g, "\n\n")
		.replaceAll(/##[^#\s]+##/g, '"Fishscale Gauntlets" ');
};

/**
 * @param {string} filter
 *
 * @return {string}
 */
export const applyMutations = (filter) => {
	const temp = [applyColours, applyArmour, fixIndents, cleanComments].reduce(
		(a, currFn) => currFn(a),
		filter
	);

	return temp;
};
