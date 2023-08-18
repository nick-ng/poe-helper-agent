import fs from "node:fs/promises";

const main = async (x, y) => {
  const file = await fs.readFile("./soycat.hideout", { encoding: "utf-8" });

  let counter = 0;
  let xTotal = 0;
  let yTotal = 0;

  const file2 = file
    .replaceAll(/"x": (\d+)/g, (_match, p1) => {
      counter++;
      const tempX = parseInt(p1, 10);
      xTotal += tempX;

      return `"x": ${tempX + x}`;
    })
    .replaceAll(/"y": (\d+)/g, (_match, p1) => {
      const tempY = parseInt(p1, 10);
      yTotal += tempY;
      return `"y": ${tempY + y}`;
    });

  await fs.writeFile("./movedcat.hideout", file2, { encoding: "utf-8" });

  console.log("average X", xTotal / counter);
  console.log("average Y", yTotal / counter);
};

const targetX = 161 - 10 - 5 - 10;
const targetY = 183 + 5 + 5;

main(targetX - 298, targetY - 378);
