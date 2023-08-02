const adjustColour = (originalColour: number[], ratio: number): number[] =>
  originalColour.map((a) => Math.round(a * ratio));

const main = () => {
  const colour = [175, 96, 37];

  const ratio = 1.3;

  const yourColour = adjustColour(colour, ratio);

  console.log(
    "Your Colour",
    `rgb(${yourColour.join(", ")})`,
    yourColour.join(" ")
  );

  const maxRatio = 255 / Math.max(...colour);

  const brightestColour = adjustColour(colour, maxRatio);

  console.log(
    "Brightest",
    `rgb(${brightestColour.join(", ")})`,
    brightestColour.join(" ")
  );
};

main();
