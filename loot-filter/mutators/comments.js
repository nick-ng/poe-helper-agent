export const cleanComments = (filter) => {
  const filterLines = filter.split("\n");

  const nonCommentLines = filterLines.filter((line) => {
    return !line.match(/^\s*#([^#]|$)/i);
  });

  return nonCommentLines
    .join("\n")
    .replaceAll(/\r/g, "")
    .replaceAll(/\n{2,}/g, "\n\n");
};
