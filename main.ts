import { mkdirSync, writeFileSync } from "node:fs";

// One Line of Earned Pride: a quiet, earned moment of pride.
// After three years of evening classes, a mother reads her granddaughter's
// birthday card aloud without stopping once — then folds it, smooths the
// crease, and tucks it into her apron pocket. The effort is the pride;
// nothing in the line says so.
const LINE: string =
  "After three years of evening classes, my mother read her granddaughter's birthday card aloud without stopping once, then folded it, smoothed the crease, and slipped it into her apron pocket.";

// The gate: /output/entry.txt must be 1-240 characters of UTF-8 text.
if (LINE.length === 0 || LINE.length > 240) {
  throw new Error(
    `entry line is ${LINE.length} characters; the gate allows 1-240`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
