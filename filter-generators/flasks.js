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

function makeLifeFlaskBlock(maxAreaLevel, baseType, sound = false) {
  return `Show
  AreaLevel <= ${maxAreaLevel}
  BaseType == "${baseType}"
  SetFontSize ${sound ? 45 : 30}
  Rarity <= Rare
  SetBackgroundColor 200 0 0 255
  ${sound ? "MinimapIcon 2 Red Raindrop" : ""}
  ${sound ? `CustomAlertSound "sounds/${sound}.mp3"` : ""}
`;
}

export default function getFlaskFilter() {
  return lifeFlasks.map((a) => makeLifeFlaskBlock(...a)).join("\n\n");
}
