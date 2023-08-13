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

Show  # +1 all Physical Gems recipe
  Quality >= 1
  BaseType == "Sweep" "Cleave" "Shield Charge" "Added Fire Damage Support" "Melee Physical Damage Support" "Punishment" "Bloodlust Support" "Molten Shell" "Vaal Molten Shell" "Determination" "Iron Grip Support" "Shockwave Totem" "Holy Flame Totem" "Animate Guardian" "Herald of Purity" "Reckoning" "Vengeance" "Summon Stone Golem" "Chance to Bleed Support" "Maim Support" "Brutality Support" "Vulnerability" "War Banner" "Dread Banner" "Perforate" "Pride" "Awakened Added Fire Damage Support" "Awakened Brutality Support" "Awakened Melee Physical Damage Support" "Intimidating Cry" "Exsanguinate" "Corrupting Fever" "Bloodthirst Support" "Reap" "Defiance Banner" "Absolution" "Shield Crush" "Boneshatter" "Blade Flurry" "Double Strike" "Vaal Double Strike" "Lacerate" "Unearth" "Split Arrow" "Blood Rage" "Phase Run" "Puncture" "Bear Trap" "Ethereal Knives" "Cyclone" "Vaal Cyclone" "Spectral Shield Throw" "Animate Weapon" "Vicious Projectiles Support" "Herald of Agony" "Riposte" "Bladefall" "Blade Vortex" "Vaal Blade Vortex" "Explosive Trap" "Seismic Trap" "Withering Touch Support" "Lancing Steel" "Shattering Steel" "Impale Support" "Shrapnel Ballista" "Awakened Vicious Projectiles Support" "Blade Blast" "Splitting Steel" "Tornado" "Storm Burst" "Glacial Cascade" "Physical to Lightning Support" "Purifying Flame" "Wave of Conviction" "Divine Ire" "Summon Carrion Golem" "Penance Brand" "Void Sphere" "Hydrosphere" "Summon Reaper"
  SetFontSize 45
  SetTextColor 30 190 190 255
  SetBorderColor 255 255 0 255
  MinimapIcon 1 Yellow Triangle
  PlayEffect Grey
  PlayAlertSound 2 300
`;

export default function getFilter() {
  return [getPhase2(), custom, get2hMeleeFilter()].join("\n\n");
}
