import get2hMeleeFilter from "./2h-melee.js";
import getPhase2 from "./phase-2.js";

const custom = `
Show
  Rarity Unique
  BaseType == "Carved Wand" "Ezomyte Dagger" "Soldier Helmet"
  SetFontSize 45
  ##BrightBackground
  SetTextColor 255 140 54 255
  SetBorderColor 47 252 47 255
  MinimapIcon 2 Brown Star
  PlayEffect Brown
  CustomAlertSound "sounds/imexile-ok.mp3"
`;

export default function getFilter() {
  return [getPhase2(), custom, get2hMeleeFilter()].join("\n\n");
}
