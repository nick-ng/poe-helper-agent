const allColours = {
  DefaultBackground: "SetBackgroundColor 0 0 0 77",
};

export const applyColours = (filter) => {
  let newFilter = `
Show
  ${allColours.DefaultBackground}
  Continue

${filter}`;

  Object.entries(allColours).forEach((entry) => {
    const [key, value] = entry;
    newFilter = newFilter.replaceAll(`##${key}`, `${value} # colours.js`);
  });

  return newFilter;
};
