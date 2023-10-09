import getTRLeveling from "./tr-leveling.js";

const custom = `
Show
  Rarity Unique
  BaseType == "Legion Boots"
  SetFontSize 45
  SetBackgroundColor 255 255 255 255
  PlayAlertSound 3 300
  PlayEffect Brown
  MinimapIcon 2 Brown Star

Show
  BaseType == "Legion Boots"
  Rarity Normal
  BaseDefencePercentile >= 70
  Corrupted False
  SetFontSize 45
  ##GoodBaseBorder
  ##DefaultBackground

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
  Class == "Sceptres"
  Corrupted False
  Rarity <= Rare
  ItemLevel = 2 # +1 <type> Spells
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star
  ##DefaultBackground

Show
  Corrupted False
  BaseType "Bone Ring" "Bone Ring" "Fossilised Spirit Shield" "Ivory Spirit Shield" "Ghastly Eye Jewel"
  ##GoodBaseBorder
  ##DefaultBackground
  Continue

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
  ItemLevel >= 81
  Rarity <= Rare
  Corrupted False
  BaseType "Fossilised Spirit Shield" "Ivory Spirit Shield"
  SetFontSize 45
  PlayEffect Yellow
  MinimapIcon 1 Yellow Star
  ##DefaultBackground

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

// https://textreader.pro/
export default function getFilter() {
	return [custom, getTRLeveling()].join("\n\n");
}
