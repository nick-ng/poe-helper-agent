export const makeWeaponBlock = (maxAreaLevel, baseType, sound = true) => {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  Corrupted False
  SetFontSize ${sound ? 45 : 30}
  Rarity <= Rare
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Cross
  ${sound ? "PlayAlertSound 16 200" : ""}
`;
};

export const makeFullWeaponBlock = (weapons, maxLevel = 100) =>
  [
    `Show
  SetBorderColor 200 0 0
  SetFontSize 45
  ItemLevel >= 1
  BaseType "Rustic Sash"
  ItemLevel <= 44
  CustomAlertSound "sounds/rustic sash.mp3"`,
    ...weapons
      .filter(({ requiredLevel }) => requiredLevel <= maxLevel)
      .map(({ base, requiredLevel }) => {
        const safeZone = 3 + Math.floor(requiredLevel / 16);
        const highlight = requiredLevel + safeZone + 1;
        const hide = highlight + safeZone;
        return `Show
  AreaLevel <= ${highlight}
  BaseType == "${base}"
  Corrupted False
  SetFontSize 45
  Rarity <= Rare
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Cross
  CustomAlertSound "sounds/brian-weapon.mp3"

Show
  AreaLevel <= ${hide}
  BaseType == "${base}"
  Corrupted False
  SetFontSize 25
  Rarity <= Rare
  ##DefaultBackground
  ##GoodBaseBorder
  MinimapIcon 1 Pink Cross
`;
      }),
  ].join("\n\n\n");

export const make3LinkFilter = (
  socketGroup,
  itemClass,
  sound,
  minLevel = 1,
  maxLevel = 44
) => {
  // Level 45: < Act 6
  let shape = "Pentagon";

  switch (itemClass) {
    case "Wand":
      shape = "Cross";
      break;
    case "Helmets":
      shape = "Circle";
      break;
    case "Gloves":
      shape = "Triangle";
      break;
    case "Boots":
      shape = "Square";
      break;
    default:
      shape = "Pentagon";
  }

  const filterLines = [
    maxLevel ? `  AreaLevel < ${maxLevel}` : null,
    minLevel ? `  AreaLevel >= ${minLevel}` : null,
    "  Sockets < 6",
    "  Rarity <= Rare",
    "  LinkedSockets <= 4",
    `  SocketGroup = ${socketGroup}`,
    `  Class "${itemClass}"`,
    "  SetFontSize 45",
    "  SetBorderColor 200 0 0 255",
    "  ##DefaultBackground",
    "  SetBackgroundColor 88 0 87 255",
    `  MinimapIcon 0 Cyan ${shape}`,
    `  CustomAlertSound "sounds/${sound}.mp3"`,
  ].filter((a) => a);

  return ["", "", "Show", ...filterLines, "", ""].join("\n");
};

export const make3LinkFilterB = (socketGroup, sound) => {
  let shape = "Pentagon";

  return `
Show
  AreaLevel < 45 # < Act 6
  Sockets < 6
  Rarity <= Rare
  LinkedSockets <= 4
  SocketGroup = ${socketGroup}
  Class "Body Armours" "Boots" "Gloves" "Helmets"
  SetFontSize 45
  SetBorderColor 200 0 0 255
  ##DefaultBackground
  SetBackgroundColor 88 0 87 255
  MinimapIcon 0 Cyan ${shape}
  CustomAlertSound "sounds/${sound}.mp3"
`;
};

export const make4LinkFilter = (
  socketGroup,
  sound,
  minLevel = 1,
  maxLevel = 44
) => {
  // Blood Aqueduct: 61

  const filterLines = [
    maxLevel ? `  AreaLevel < ${maxLevel}` : null,
    minLevel ? `  AreaLevel >= ${minLevel}` : null,
    "  Sockets < 6",
    "  Rarity <= Rare",
    "  LinkedSockets >= 4",
    `  SocketGroup = ${socketGroup}`,
    '  Class "Body Armours" "Boots" "Gloves" "Helmets"',
    "  SetFontSize 45",
    "  SetBorderColor 200 0 0 255",
    "  ##DefaultBackground",
    "  SetBackgroundColor 88 0 87 255",
    "  MinimapIcon 0 Orange Pentagon",
    `  CustomAlertSound "sounds/${sound}.mp3"`,
  ].filter((a) => a);

  return ["", "", "Show", ...filterLines, "", ""].join("\n");
};

export const make4LinkFilter2 = (
  { armour, evasion, es },
  maxAreaLevel = 62, // Foothills
  increment = 5
) => {
  const allFilterLines = [];

  for (let n = maxAreaLevel; n >= 25; n -= increment) {
    const filterLines = [
      `  AreaLevel <= ${n}`,
      `  DropLevel >= ${n - 5}`,
      "  Sockets < 6",
      "  Rarity <= Rare",
      "  LinkedSockets >= 4",
      '  Class "Body Armours" "Boots" "Gloves" "Helmets"',
      "  SetFontSize 45",
      armour ? `  BaseArmour >= ${armour}` : null,
      evasion ? `  BaseEvasion >= ${evasion}` : null,
      es ? `  BaseEnergyShield >= ${es}` : null,
      "  SetBorderColor 200 0 0 255",
      "  ##DefaultBackground",
      "  SetBackgroundColor 88 0 87 255",
      "  MinimapIcon 0 Yellow Pentagon",
      '  CustomAlertSound "sounds/brian-03-bong.mp3"',
    ].filter((a) => a);

    allFilterLines.push(...["", "", "Show", ...filterLines, "", ""]);
  }

  return allFilterLines.join("\n");
};

export const makeBaseTypeFilter = (baseTypes, filterStyles) =>
  [
    "Show",
    `  BaseType == "${baseTypes.join('" "')}"`,
    ...filterStyles.map((s) => `  ${s.trim()}`),
  ].join("\n");
