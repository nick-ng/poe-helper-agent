import { makeBaseTypeFilter } from "../common/generators.js";
import getPhase3 from "./phase-3.js";

export const uniqueDivinationCards = makeBaseTypeFilter(
  [
    "A Dab of Ink", // The Poet's Pen
    "Broken Truce", // Cold Iron Point
  ],
  [
    "SetFontSize 45",
    "##BrightBackground",
    "SetTextColor 255 140 54 255",
    "SetBorderColor 47 252 47 255",
    "MinimapIcon 2 Brown Star",
    "PlayEffect Brown",
    'CustomAlertSound "sounds/imexile-ok.mp3"',
  ]
);

const custom = `
Show
  Rarity Unique
  BaseType == "Carved Wand" "Ezomyte Dagger" "Serpentscale Gauntlets" "Wyrmscale Gauntlets" "Soldier Helmet"
  SetFontSize 45
  ##BrightBackground
  SetTextColor 255 140 54 255
  SetBorderColor 47 252 47 255
  MinimapIcon 2 Brown Star
  PlayEffect Brown
  CustomAlertSound "sounds/imexile-ok.mp3"

Show
  Class "Currency"
  BaseType "of Fear"
  SetFontSize 45
  SetTextColor 0 0 0 255
  SetBorderColor 0 0 0
  SetBackgroundColor 213 159 0 255
  PlayAlertSound 2 50
  PlayEffect White
  MinimapIcon 2 White Circle
`;

export default function getFilter() {
  return [getPhase3(), custom].join("\n\n");
}
