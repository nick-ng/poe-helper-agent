import { levelingBaseFilter } from "../filters.js";
import { make3LinkFilter, make4LinkFilter } from "../common/generators.js";
import { claws } from "../common/weapons.js";
import { getFilterFragment } from "../filter-loader.js";
import getFlaskFilter, {
	getManaFlaskFilter,
} from "../../filter-generators/flasks.js";

const amulets = '"Amber Amulet" "Citrine Amulet"';

const custom = `
Show
  ItemLevel >= 78
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris"
  SetFontSize 40
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  ItemLevel >= 64
  Rarity <= Rare
  BaseType "Copper Kris" "Golden Kris"
  SetFontSize 35
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star

Show
  Class == "Rune Daggers"
  Corrupted False
  Rarity <= Rare
  ItemLevel = 12 # T4 DoT Multi
  ##GoodBaseBorder
  MinimapIcon 1 Pink Star
  ##DefaultBackground

Hide
  AreaLevel >= 55
  Rarity < Rare
  BaseType "Calling Wand" "Convening Wand" "Convoking Wand"
  SetFontSize 30
  ##DefaultBackground

Hide
  AreaLevel > 3
  ItemLevel < 43
  Rarity = Normal
  Class "Quivers" "One Hand" "Daggers" "Rune Dagger" "Staves" "Two Hand" "Bows" "Warstaves"
`;

// https://textreader.pro/
export default function getFilter() {
	return [
		claws(60),
		make4LinkFilter("BBBG", "3b1g"),

		// 3-Links
		make3LinkFilter("GGG", "Boots", "3g boots"),
		make3LinkFilter("GGG", "Gloves", "3g gloves"),
		make3LinkFilter("GGG", "Helmets", "3g helm"),
		make3LinkFilter("GGG", "Body Armours", "3g body"),

		make3LinkFilter("BGG", "Boots", "2g1b boots"),
		make3LinkFilter("BGG", "Gloves", "2g1b gloves"),
		make3LinkFilter("BGG", "Helmets", "2g1b helm"),
		make3LinkFilter("BGG", "Body Armours", "2g1b body"),
		make3LinkFilter("BGG", "Wand", "2g1b wand"),

		levelingBaseFilter(),
		getFilterFragment("ssf-bases", { amulets }),
		getFlaskFilter(),
		getManaFlaskFilter(),
		custom,
	].join("\n\n");
}
