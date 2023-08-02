import { getFilterFragment, basesToFilter } from "../filter-loader.js";
import { uniqueDivinationCards } from "../filters.js";

const custom = `
Show # Aurabot - Redeemer Sceptre
  ItemLevel = 82
  Rarity <= Rare
  Class "Sceptre"
  HasInfluence "Redeemer"
  SetFontSize 45
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 2 Pink Star
  PlayEffect Red
  CustomAlertSound "sounds/brian-05-woosh.mp3"

Show # Aurabot - Crusader Sceptre
  ItemLevel = 80
  Rarity <= Rare
  Class "Sceptre"
  HasInfluence "Crusader"
  SetFontSize 45
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 2 Pink Star
  PlayEffect Red
  CustomAlertSound "sounds/brian-05-woosh.mp3"
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
  ilvl85a: basesToFilter(["Hubris Circlet", "Sorcerer Gloves", "Murder Mitts"]),
  ilvl85b: basesToFilter(["Fingerless Silk Gloves"]),
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
