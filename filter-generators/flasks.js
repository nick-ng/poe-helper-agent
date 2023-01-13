const lifeFlasks = [
  [12, "Small Life Flask", false],
  [12, "Medium Life Flask", false],
  [12, "Large Life Flask", "life-flask-large"],
  [18, "Large Life Flask", false],
  [18, "Greater Life Flask", "life-flask-greater"],
  [24, "Greater Life Flask", false],
  [24, "Grand Life Flask", "life-flask-grand"],
  [30, "Grand Life Flask", false],
  [30, "Giant Life Flask", "life-flask-giant"],
  [36, "Giant Life Flask", false],
  [36, "Colossal Life Flask", "life-flask-colossal"],
  [42, "Colossal Life Flask", false],
  [42, "Sacred Life Flask", "life-flask-sacred"],
  [60, "Sacred Life Flask", false],
  [44, "Hallowed Life Flask", "life-flask-hallowed"],
  [60, "Hallowed Life Flask", false],
  [65, "Divine Life Flask", "life-flask-divine"],
  [77, "Divine Life Flask", false],
];

const manaFlasks = [
  [12, "Small Mana Flask", false],
  [12, "Medium Mana Flask", false],
  [12, "Large Mana Flask", true],
  [18, "Large Mana Flask", false],
  [18, "Greater Mana Flask", true],
  [24, "Greater Mana Flask", false],
  [24, "Grand Mana Flask", true],
  [30, "Grand Mana Flask", false],
  [30, "Giant Mana Flask", true],
  [36, "Giant Mana Flask", false],
  [36, "Colossal Mana Flask", true],
  [42, "Colossal Mana Flask", false],
  [42, "Sacred Mana Flask", true],
  [50, "Sacred Mana Flask", false],
  [44, "Hallowed Mana Flask", true],
  [60, "Hallowed Mana Flask", false],
  [50, "Sanctified Mana Flask", true],
  [65, "Sanctified Mana Flask", false],
  [65, "Divine Mana Flask", true],
  [70, "Divine Mana Flask", false],
  [68, "Eternal Mana Flask", true],
  [70, "Eternal Mana Flask", false],
];

function makeLifeFlaskBlock(maxAreaLevel, baseType, sound = false) {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  SetFontSize ${sound ? 45 : 30}
  Rarity <= Rare
  SetBorderColor 255 0 0 200
  ##DefaultBackground
  ${sound ? "MinimapIcon 2 Red Raindrop" : ""}
  ${sound ? `CustomAlertSound "sounds/${sound}.mp3"` : ""}
`;
}

function makeManaFlaskBlock(maxAreaLevel, baseType, big) {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  SetFontSize ${big ? 45 : 30}
  Rarity <= Rare
  SetBorderColor 80 150 255 200
  ##DefaultBackground
  ${big ? "MinimapIcon 2 Blue Raindrop" : ""}
`;
}

export default function getFlaskFilter() {
  return lifeFlasks.map((a) => makeLifeFlaskBlock(...a)).join("\n\n");
}

export const getManaFlaskFilter = () =>
  manaFlasks.map((a) => makeManaFlaskBlock(...a)).join("\n\n");
