const allColours = {
  DefaultBackground: "SetBackgroundColor 0 0 0 120",
  BrightBackground: "SetBackgroundColor 255 255 255 200",
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
    newFilter = newFilter.replaceAll(`##${key}`, `${value} # colours.js`);
  });

  return newFilter;
};
