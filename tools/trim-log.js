import {
  statSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  readFileSync,
} from "fs";
import { join } from "path";

const LOG_FILENAME = "Client.txt";
const MAX_LOG_LENGTH = 10000;
const IGNORE_REGEX = [
  /\] \[vulkan\]/i,
  /\] \[job\]/i,
  /\] \[startup\]/i,
  /\] \[bundle.*\]/i,
  /\] \[shader\]/i,
  /\] \[engine\]/i,
  /\] \[device\]/i,
  /\] \[sound\]/i,
  /\] \[eos sdk\]/i,
  /\[debug client /i,
  /\*{5} log file opening \*{5}/i,
  /\.pathofexile\.com/i,
  /\] connecting to instance server at (\d{1,3}\.){3}\d{1,3}:\d+$/i,
  /\] tile hash: \d+$/i,
  /\] doodad hash: \d+$/i,
  /\] send patching protocol version \d+$/i,
  /\] precalc\w+$/i,
  /\] Enumerated adapter: /i,
  /\] Requesting root contents/i,
  /\] Got file list for "/i,
  /\] Requesting folder Redist/i,
  /\] Finished checking files$/i,
  /\] Changing to device "/i,
  /\] Generated Entitlement Data$/i,
  /\] Redeeming \d+ Epic Entitlements$/i,
  /\] : Redeemed Entitlements Successfully$/i,
  /\] Generated Offer Data$/i,
];

function trimLog(logDir) {
  const logFilePath = join(logDir, LOG_FILENAME);

  const fileStats = statSync(logFilePath, { throwIfNoEntry: false });

  if (fileStats) {
    const logContents = readFileSync(logFilePath).toString().split("\r\n");

    const logContents2 = logContents
      .filter((a) => {
        for (const r of IGNORE_REGEX) {
          if (a.match(r)) {
            return false;
          }
        }

        return true;
      })
      .slice(-MAX_LOG_LENGTH);

    if (logContents.length <= logContents2.length) {
      return;
    }

    console.info(
      `Trimmed ${
        logContents.length - logContents2.length
      } lines from ${logFilePath}.`
    );
    const newLogContents = `${logContents2.join("\r\n")}`;
    writeFileSync(logFilePath, newLogContents);
  }
}

export default function trimLogs() {
  trimLog(process.env.STAND_ALONE_PATH);
  trimLog(process.env.STEAM_PATH);
  trimLog(process.env.EPIC_PATH);
}
