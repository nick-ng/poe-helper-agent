import { makeBaseTypeFilter } from "../common/generators.js";

export const cortexDivinationCards = makeBaseTypeFilter(
  [
    "A Fate Worse Than Death", // Cortex
  ],
  [
    "SetFontSize 45",
    "SetTextColor 255 140 54 255",
    "SetBorderColor 47 252 47 255",
    "MinimapIcon 2 Green Triangle",
    "PlayEffect Brown",
    'CustomAlertSound "sounds/brian-03-bong.mp3"',
  ]
);

export const uniqueDivinationCards = makeBaseTypeFilter(
  [
    "The Darkest Dream", // Severed in Sleep
  ],
  [
    "SetFontSize 45",
    "##BrightBackground",
    "SetTextColor 255 140 54 255",
    "SetBorderColor 47 252 47 255",
    "MinimapIcon 2 Brown Star",
    "PlayEffect Brown",
    'CustomAlertSound "sounds/brian-03-bong.mp3"',
  ]
);

const custom = `
Show
  Rarity = Unique
  Class "Rings"
  SetFontSize 45
  SetTextColor 255 255 255 255
  SetBackgroundColor 255 0 0 255
  SetBorderColor 100 100 100 255
  PlayEffect Red
  MinimapIcon 2 Brown Star

Show
  Rarity Unique
  BaseType == "Cutlass"
  SetFontSize 45
  ##BrightBackground
  SetTextColor 255 140 54 255
  SetBorderColor 47 252 47 255
  MinimapIcon 2 Brown Star
  PlayEffect Brown
  CustomAlertSound "sounds/brian-03-bong.mp3"

Show
  BaseType = "Bone Ring" "Fossilised Spirit Shield" "Ivory Spirit Shield" "Ghastly Eye Jewel"
  ItemLevel >= 81
  Rarity <= Rare
  Corrupted False
  SetFontSize 45
  ##GoodBaseBorder
  PlayEffect Red
  MinimapIcon 1 Yellow Cross
  ##DefaultBackground

Show
  Corrupted False
  BaseType "Bone Ring" "Bone Ring" "Fossilised Spirit Shield" "Ivory Spirit Shield" "Ghastly Eye Jewel"
  ItemLevel >= 60
  ##GoodBaseBorder
  ##DefaultBackground
  Continue

Show
  ItemLevel >= 81
  Rarity <= Rare
  Corrupted False
  BaseType "Fossilised Spirit Shield" "Ivory Spirit Shield"
  SetFontSize 45
  PlayEffect Yellow
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

Show
  ItemLevel >= 50
  Rarity <= Rare
  BaseType "Large Cluster Jewel"
  EnchantmentPassiveNode "Minion Damage"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"

Show
  ItemLevel >= 68
  Rarity <= Rare
  BaseType "Medium Cluster Jewel"
  EnchantmentPassiveNode "Minion Life"
  SetFontSize 45
  SetTextColor 150 0 255 255
  ##DefaultBackground
  SetBorderColor 240 100 0 255
  MinimapIcon 0 Red Star
  PlayEffect Red
  CustomAlertSound "sounds/ding.mp3"
`;

export default function getFilter() {
  return [cortexDivinationCards, custom].join("\n\n");
}
