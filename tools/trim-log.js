import {
  statSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  readFileSync,
} from "fs";
import { join } from "path";

const LOG_FILENAME = "Client.txt";

function trimLog(logDir) {
  const logFilePath = join(logDir, LOG_FILENAME);

  const fileStats = statSync(logFilePath, { throwIfNoEntry: false });

  if (fileStats) {
    const logContents = readFileSync(logFilePath).toString().split("\r\n");

    if (logContents.length <= 1000) {
      return;
    }

    console.info(`Trimming ${logFilePath}. Had ${logContents.length} lines.`);
    const newLogContents = `${logContents.slice(-1000).join("\r\n")}`;
    writeFileSync(logFilePath, newLogContents);
  }
}

export default function trimLogs() {
  trimLog(process.env.STAND_ALONE_PATH);
  trimLog(process.env.STEAM_PATH);
  trimLog(process.env.EPIC_PATH);
}
