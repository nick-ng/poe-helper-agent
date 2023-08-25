const mutations = {
  colours: {
    DefaultBackground: "SetBackgroundColor 0 0 0 120",
    BrightBackground: "SetBackgroundColor 255 255 255 200",
    ScrollOfWisdomText: "SetTextColor 210 178 135 220",
    PortalScrollText: "SetTextColor 50 240 240 220",
    T0CurrencyText: "SetTextColor 255 0 0 255",
    T1CurrencyText: "SetTextColor 255 255 0 255",
    T2CurrencyText: "SetTextColor 0 255 0 255",
    T3CurrencyText: "SetTextColor 0 255 0 255",
    T9CurrencyText: "SetTextColor 190 178 135 255",
    CurrencyBorder: "SetBorderColor 0 255 0 255",
    GoodBaseBorder: "SetBorderColor 255 88 255 200",
  },
  bodyArmour: {
    str: [["Glorious Plate", "Astral Plate"], "Gladiator Plate"],
    strdex: [
      ["Triumphant Lamellar", "General's Brigandine", "Full Dragonscale"],
      "Desert Brigandine",
    ],
  },
  gloves: {
    str: ["Titan Gauntlets", ["Vaal Gauntlets", "Spiked Gloves"]],
    strdex: ["Dragonscale Gauntlets", "Hydrascale Gauntlets"],
    dex: [["Slink Gloves", "Gripped Gloves"], "Stealth Gloves"],
  },
  boots: {
    str: [["Brimstone Treads", "Titan Greaves"], "Vaal Greaves"],
    strdex: [["Two-Toned Boots", "Dragonscale Boots"], "Hydrascale Boots"],
  },
  helmets: {
    str: [
      ["Royal Burgonet", "Eternal Burgonet"],
      ["Ezomyte Burgonet", "Samnite Helmet"],
    ],
    strdex: [
      ["Nightmare Bascinet", "Pig-Faced Bascinet", "Fluted Bascinet"],
      "Lacquered Helmet",
    ],
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

/**
 * @param {string} filter
 *
 * @return {string}
 */
const applyArmour = (filter) => {
  const armourReplacer = [];
  for (let n = 0; n < 10; n++) {
    Object.entries(mutations.bodyArmour).forEach(([label, tiers]) => {
      armourReplacer.push([`${label}body${n}`, getTiered(tiers, n)]);
    });

    Object.entries(mutations.gloves).forEach(([label, tiers]) => {
      armourReplacer.push([`${label}gloves${n}`, getTiered(tiers, n)]);
      armourReplacer.push([`${label}golves${n}`, getTiered(tiers, n)]);
    });

    Object.entries(mutations.boots).forEach(([label, tiers]) => {
      armourReplacer.push([`${label}boots${n}`, getTiered(tiers, n)]);
    });

    Object.entries(mutations.helmets).forEach(([label, tiers]) => {
      armourReplacer.push([`${label}helmet${n}`, getTiered(tiers, n)]);
    });
  }

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
