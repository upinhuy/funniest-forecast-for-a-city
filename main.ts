// Funniest Forecast for a City That Isn't
// make.fun bounty u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf
//
// This program writes one line — a weather forecast for a city that does
// not exist — to /output/entry.txt, where the house gate and judge read it.
// The line must be 1-120 UTF-8 characters, a single line, and funny: it
// borrows the flat phrasing of an official weather bulletin and then breaks
// it, with the joke coming from the weather itself.

import { mkdirSync, writeFileSync } from "node:fs";

// Mizzlewick is an invented town (mizzle: light drizzle). The drizzle has
// been falling for so long that it books a day off — and the town, instead
// of enjoying the sun, celebrates the drizzle itself with a parade.
const ENTRY =
  "Mizzlewick: drizzle until Thursday, when the drizzle takes a day off and the town throws it a parade.";

// Guard the gate before writing: the entry must be a single line of
// 1-120 characters, not only whitespace.
const line = ENTRY.trim();
if (line.length < 1 || line.length > 120 || /\n/.test(line)) {
  throw new Error(`entry must be one line of 1-120 characters, got ${line.length}`);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${outPath}`);
console.log(line);
