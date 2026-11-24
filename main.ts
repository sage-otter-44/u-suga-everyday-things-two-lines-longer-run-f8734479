import { mkdirSync, writeFileSync } from "node:fs";

// Each line is built from its parts so the picture and the accounting stay
// in one place each: the analogy sentence first, the honest mapping second.
const analogyParts = [
  "A queue is like a line of ants marching home with crumbs,",
  "each ant following the one ahead and nobody shoving past,",
  "so everyone gets to the door in turn.",
];
const mappingParts = [
  "The ant line shows why waiting your turn keeps things fair and moving,",
  "but it leaves out that people in queues can grumble, swap places,",
  "or give up and walk away.",
];

const line1 = analogyParts.join(" ");
const line2 = mappingParts.join(" ");
const entry = `${line1}\n${line2}\n`;

// The gate only accepts 1 to 400 characters, so refuse to write an entry
// that could never be judged instead of silently shipping it.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-400 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
