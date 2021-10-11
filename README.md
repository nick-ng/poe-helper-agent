# poe-helper-agent

Local agent to use with [PoE Helper](https://poe.pux.one)

## Features

- Auto-updating Chaos loot filter
- Optional leveling filter (item links, vendor recipe ingredients)
- Keeps filters up to date with [FilterBlast's API](https://filterblast.xyz/filterblast-api.html)

## Instructions

1. `npm install` once

2. Copy `.env.example` to `.env` and add the path to your Path of Exile settings directory (Usually `C:\Users\<your-name-here>\Documents\My Games\Path of Exile`)
   - If you want the leveling filter as well, change `CHAOS_FILTER_ONLY` to `FALSE` if you want the leveling filter and copy `sounds` directory to your Path of Exile settings directory (Usually you will end up with `C:\Users\<your-name-here>\Documents\My Games\Path of Exile\sounds\*.mp3`)
3. Run `poe-helper-agent.bat`
4. Go to https://poe.pux.one/settings and add the Agent Port (default `8910`)
