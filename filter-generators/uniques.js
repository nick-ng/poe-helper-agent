const goodUniqueBaseTypes = [
  // Amulets
  "Onyx Amulet", // Astramentis, Ashes, Omni, many others
  "Coral Amulet", // Primordial Chain
  "Jade Amulet", // Karui Ward
  "Paua Amulet", // Atziri's Foible
  "Turquoise Amulet", // Ungil's Harmony, Badge of the Brotherhood
  // Belts
  "Stygian Vise", // Darkness Enthroned
  "Heavy Belt", // Mageblood, Dyadian Dawn, others
  "Studded Belt", // Ryslatha's Coil
  "Cloth Belt", // Sunblast, Soul Tether
  "Leather Belt", // Headhunter
  "Vanguard Belt", // Perserverance
  "Crystal Belt", // The Burden of Truth
  // Rings
  "Two-Stone Ring", // Call of the Brotherhood, Berek's Respite
  "Iron Ring", // Le Heup of All
  "Amethyst Ring", // Death's Rush
  "Prismatic Ring", // Thief's Torment
  "Coral Ring", // Winterweave
  "Unset Ring", // Mark of Submission
  "Opal Ring", // Stormfire
  "Topaz Ring", // Storm Secret
  "Sapphire Ring", // Dream Fragments
  // Quiver
  "Ornate Quiver", // Maloney's Mechanism
  "Primal Arrow Quiver", // Voidfletcher
  // Body Armour
  "Crusader Plate", // Lioneye's Vision
  "Buckskin Tunic", // Ashrend
  "Astral Plate", // Blunderbore, Death's Oath
  "Gladiator Plate", // The Brass Dome
  "Destiny Leather", // Queen of the Forest
  "Zodiac Leather", // Hyrri's Ire
  "Spidersilk Robe", // Soul Mantle
  "Wyrmscale Doublet", // Gruthkul's Pelt
  "Triumphant Lamellar", // Farrul's Fur
  "Crusader Chainmail", // Ambu's Charge
  "Saint's Hauberk", // Doryani's Prototype, Sporeguard
  "Saintly Chainmail", // Chains of Command
  "Lacquered Garb", // Cloak of Defiance
  "Varnished Coat", // The Admiral, Carcass Jack
  "Sadist Garb", // Inpulsa's Broken Heart
  "Carnal Armour", // Shroud of the Lightless, Stasis Prison
  "Sacrificial Garb", // Shadowstitch
  // Boots
  "Deerskin Boots", // Deerstalker
  "Rawhide Boots", // Seven-League Step
  "Nubuck Boots", // Goldwyrm
  "Slink Boots", // Atziri's Step, others
  "Wool Shoes", // Wanderlust - Leveling
  "Bronzescale Boots", // Lioneye's Paws
  "Wyrmscale Boots", // Legacy of Fury (Maven boots)
  "Strapped Boots", // Nomic's Storm - Leveling
  "Assassin's Boots", // The Stampede - Blight boots
  // Gloves
  "Iron Gauntlets",
  "Deerskin Gloves",
  "Silk Gloves",
  "Serpentscale Gauntlets",
  "Wyrmscale Gauntlets",
  "Hydrascale Gauntlets",
  "Legion Gloves",
  "Crusader Gloves",
  "Strapped Mitts",
  "Carnal Mitts",
  "Assassin's Mitts",
  // Helmets
  "Samnite Helmet",
  "Leather Cap",
  "Sinner Tricorne",
  "Mind Cage",
  "Lacquered Helmet",
  "Fluted Bascinet",
  "Nightmare Bascinet",
  "Praetor Crown",
  "Raven Mask",
  "Callous Mask",
  // Shields
  "Painted Tower Shield",
  "Colossal Tower Shield",
  "Pinnacle Tower Shield",
  "Lacquered Buckler",
  "Ivory Spirit Shield",
  "Elegant Round Shield",
  "Cardinal Round Shield",
  "Branded Kite Shield",
  "Mosaic Kite Shield",
  "Archon Kite Shield",
  "Golden Buckler",
  // Axes
  "Siege Axe",
  "Jade Hatchet",
  "Infernal Axe",
  "Vaal Axe",
  // Bows
  "Bone Bow",
  "Long Bow",
  "Short Bow",
  // Claws
  "Throat Stabber",
  "Terror Claw",
  // Daggers & Rune Daggers
  "Ezomyte Dagger",
  "Slaughter Knife",
  "Imperial Skean",
  "Demon Dagger",
  // Maces
  "War Hammer",
  // Sceptres
  "Ritual Sceptre",
  "Crystal Sceptre",
  "Tyrant's Sekhem",
  "Void Sceptre",
  "Vaal Sceptre",
  // Staves & War Staves
  "Highborn Staff",
  "Quarterstaff",
  "Military Staff",
  "Ezomyte Staff",
  "Serpentine Staff",
  "Judgement Staff",
  // Swords
  "Cutlass",
  "Twilight Blade",
  "Gladius",
  "Vaal Blade",
  "Basket Rapier",
  "Vaal Rapier",
  "Jewelled Foil",
  "Reaver Sword",
  "Infernal Sword",
  // Wands
  "Carved Wand",
  "Demon's Horn",
  // Flasks
  "Sanctified Life Flask",
  "Hallowed Hybrid Flask",
  "Bismuth Flask",
  "Sapphire Flask",
  "Granite Flask",
  "Sulphur Flask",
  "Quicksilver Flask",
  "Stibnite Flask",
  "Silver Flask",
  "Iron Flask",
  "Amethyst Flask",
  "Ruby Flask",
  "Topaz Flask",
  // Jeweles
  "Small Cluster Jewel",
  "Medium Cluster Jewel",
  "Large Cluster Jewel",
  "Crimson Jewel",
  "Cobalt Jewel",
  "Viridian Jewel",
  "Timeless Jewel",
  "Ghastly Eye Jewel",
  "Hypnotic Eye Jewel",
  "Murderous Eye Jewel",
  "Searching Eye Jewel",
];

export const getSsfUniquesFilter = () => {
  return `
Show
  Rarity Unique
  BaseType == "Champion Kite Shield" "Fiend Dagger" "Charan's Sword" "Prophecy Wand"
  SetFontSize 45
  SetTextColor 175 96 37 255
  ##BrightBackground
  SetBorderColor 255 0 0 255
  CustomAlertSound "sounds/brian-06-shing.mp3"
  PlayEffect Brown
  MinimapIcon 0 Brown Star

Show
  Rarity Unique
  SynthesisedItem True
  SetFontSize 45
  SetTextColor 175 96 37 255
  SetBorderColor 255 0 0 255
  CustomAlertSound "sounds/brian-03-bong.mp3"
  PlayEffect Brown
  MinimapIcon 0 Brown Star

Show
  Rarity Unique
  HasInfluence "Crusader" "Elder" "Hunter" "Redeemer" "Shaper" "Warlord"
  SetFontSize 45
  SetTextColor 175 96 37 255
  SetBorderColor 255 0 0 255
  CustomAlertSound "sounds/brian-03-bong.mp3"
  PlayEffect Brown
  MinimapIcon 0 Brown Star

Show
  Rarity Unique
  Identified True
  LinkedSockets < 5
  SetFontSize 45
  SetTextColor 175 96 37 255
  SetBorderColor 255 0 0 255
  CustomAlertSound "sounds/brian-03-bong.mp3"
  PlayEffect Brown
  MinimapIcon 0 Brown Star

Show
  Rarity Unique
  BaseType == "${goodUniqueBaseTypes.join('" "')}"
  LinkedSockets < 5
  SetFontSize 45
  SetTextColor 175 96 37 255
  SetBorderColor 255 255 0 255
  CustomAlertSound "sounds/brian-03-bong.mp3"
  PlayEffect Brown
  MinimapIcon 0 Brown Star

Show
  Rarity Unique
  Sockets < 6
  SetFontSize 40
  SetTextColor 175 96 37 255
  SetBorderColor 175 96 37 255
  PlayEffect Brown
  MinimapIcon 2 Brown Star
`;
};
