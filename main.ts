// Invent a Word We Need — make.fun bounty u-deranalabs-invent-a-word-we-need-17a020e0
// The entry is one invented word with a one-line definition (76 characters).
// This program writes that text to /output/entry.txt, where the sealed
// scorer reads it. It refuses to write anything that would fail the
// gate (UTF-8 text, 1 to 140 characters, not only white space).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "stairwit: the perfect comeback you think of only after the argument is over.";

// The gate, checked here before anything is written.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
