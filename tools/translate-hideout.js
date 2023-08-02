import { readFileSync, writeFileSync } from "fs";

const main = ({ targetX, targetY }) => {
  const hideoutJSON = readFileSync("./input.hideout", {
    encoding: "utf-8",
  });

  const hideout = JSON.parse(hideoutJSON);

  const { doodads: prevDoodads } = hideout;

  let currX = 0;
  let currY = 0;

  Object.entries(prevDoodads).forEach(([key, value]) => {
    if (key === "Waypoint") {
      currX = value.x;
      currY = value.y;
    }
  });

  const dx = targetX - currX;
  const dy = targetY - currY;

  const doodads = {};

  Object.entries(prevDoodads).map(([key, value]) => {
    doodads[key] = {
      ...value,
      x: value.x + dx,
      y: value.y + dy,
    };
  });

  const newHideout = {
    ...hideout,
    doodads,
  };

  writeFileSync("./output.hideout", JSON.stringify(newHideout, null, "  "));
};

main({
  targetX: 242,
  targetY: 271,
});
