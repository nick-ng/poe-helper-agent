import { readFileSync, writeFileSync } from "fs";

const main = ({ dx, dy }) => {
  const hideoutJSON = readFileSync("./input.hideout", {
    encoding: "utf-8",
  });

  const hideout = JSON.parse(hideoutJSON);

  const { doodads: prevDoodads } = hideout;

  const doodads = {};

  Object.entries(prevDoodads).map(([key, value]) => {
    doodads[key] = {
      ...value,
      x: value.x - dx,
      y: value.y - dy,
    };
  });

  const newHideout = {
    ...hideout,
    doodads,
  };

  writeFileSync("./output.hideout", JSON.stringify(newHideout, null, "  "));
};

main({
  dx: 149 - 242,
  dy: 149 - 271,
});
