import fetch from "node-fetch";
import { resolve } from "path";
import { readFileSync, readdirSync, writeFileSync } from "fs";

const DATA_AGE_THRESHOLD = 1000 * 60 * 60; // 1 hour

export const getUniquesValue = async () => {
  const rootDir = readdirSync(resolve("."));

  let prevUniquesData = { updatedAt: 0 };

  if (rootDir.includes("poe-ninja-uniques.json")) {
    const uniquesDataPath = resolve(".", "poe-ninja-uniques.json");
    const uniquesDataJsonString = readFileSync(uniquesDataPath, "utf-8");
    console.log("uniquesDataJsonString", uniquesDataJsonString);
    prevUniquesData = JSON.parse(uniquesDataJsonString);
  }

  if (prevUniquesData.updatedAt < Date.now() - DATA_AGE_THRESHOLD) {
    console.log("update stuff");
  }
};
