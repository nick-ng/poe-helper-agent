import { makeFullWeaponBlock } from "./generators.js";

export const claws = makeFullWeaponBlock([
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
]);
