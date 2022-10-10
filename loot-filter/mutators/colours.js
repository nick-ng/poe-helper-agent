const allColours = {
  DefaultBackground: "SetBackgroundColor 0 0 0 120",
  BrightBackground: "SetBackgroundColor 255 255 255 200",
  ScrollOfWisdomText: "SetTextColor 210 178 135 220",
  PortalScrollText: "SetTextColor 50 240 240 220",
  T0CurrencyText: "SetTextColor 255 0 0 255",
  T1CurrencyText: "SetTextColor 255 255 0 255",
  T2CurrencyText: "SetTextColor 0 255 0 255",
  T3CurrencyText: "SetTextColor 0 255 0 255",
  T9CurrencyText: "SetTextColor 190 178 135 255",
  CurrencyBorder: "SetBorderColor 0 255 0 255",
  GoodBaseBorder: "SetBorderColor 255 88 255 200",
};

export const applyColours = (filter) => {
  let newFilter = `
Show
  AreaLevel >= 43
  ${allColours.DefaultBackground}
  Continue

${filter}`;

  Object.entries(allColours).forEach((entry) => {
    const [key, value] = entry;
    newFilter = newFilter.replaceAll(`##${key}`, `${value}`);
  });

  return newFilter;
};
