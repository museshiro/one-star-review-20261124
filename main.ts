// One-star review of the moon. Writes the entry line to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22 stdlib only, deterministic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The moon moves the entire ocean twice a day and won't move my laundry from the washer to the dryer.";

if (LINE.length > 160) {
  throw new Error(`line is ${LINE.length} characters, over the 160 limit`);
}
if (!LINE.trim()) {
  throw new Error("line must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read back and confirm the file holds exactly the line.
if (readFileSync(outPath, "utf8") !== LINE + "\n") {
  throw new Error("entry.txt does not match the line");
}
