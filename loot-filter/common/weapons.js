import { makeFullWeaponBlock } from "./generators.js";

export const claws = (maxLevel = 100) =>
  makeFullWeaponBlock(
    [
      { base: "Longsword", requiredLevel: 8 },
      { base: "Awl", requiredLevel: 12 },
      { base: "Cat's Paw", requiredLevel: 17 },
      { base: "Blinder", requiredLevel: 22 },
      { base: "Sparkling Claw", requiredLevel: 30 },
      { base: "Double Claw", requiredLevel: 36 },
      { base: "Gouger", requiredLevel: 40 },
      { base: "Tiger's Paw", requiredLevel: 43 },
      { base: "Noble Claw", requiredLevel: 52 },
      { base: "Twin Claw", requiredLevel: 57 },
      { base: "Hellion's Paw", requiredLevel: 62 },
    ],
    maxLevel
  );

export const slowBows = makeFullWeaponBlock([
  { base: "Long Bow", requiredLevel: 9 },
  { base: "Recurve Bow", requiredLevel: 18 },
  { base: "Death Bow", requiredLevel: 32 },
  { base: "Decurve Bow", requiredLevel: 38 },
  { base: "Sniper Bow", requiredLevel: 44 },
  { base: "Decimation Bow", requiredLevel: 53 },
  { base: "Citadel Bow", requiredLevel: 58 },
]);
