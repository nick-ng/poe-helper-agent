import fetch from "node-fetch";

export const getTrackerUrl = (size = 2) => {
  const trackerUrl = new URL("https://tracker.poe-racing.com/");
  trackerUrl.searchParams.set("character", process.env.CHARACTER_NAME);
  // trackerUrl.searchParams.set("event", process.env.LEAGUE);
  trackerUrl.searchParams.set("size", size);
  trackerUrl.searchParams.set("special", process.env.POE_RACING_SPECIAL);

  return `${trackerUrl.toString()}&event=${encodeURIComponent(
    process.env.LEAGUE
  )}`;
};

export default function getTracker() {
  return `
<html>

<head>
  <style>
    iframe {
      border: none;
      width: 100vw;
      height: 100vh;
    }

    body {
      padding: 0;
      margin: 0;
    }
  </style>
</head>

<body>
  <iframe src="${getTrackerUrl()}" />
</body>

</html>
`;
}

export async function getTracker2() {
  const res = await fetch(getTrackerUrl());
  console.log("res", res);
  const resText = await res.text();
  console.log("res.text", resText);
  return resText;
}
