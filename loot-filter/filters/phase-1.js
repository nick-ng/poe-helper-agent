import get2hMeleeFilter from "./2h-melee.js";
import getPhase2 from "./phase-2.js";

const custom = `
`;

export default function getFilter() {
  return [getPhase2(), custom, get2hMeleeFilter()].join("\n\n");
}
