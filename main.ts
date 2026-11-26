import { mkdirSync, writeFileSync } from "node:fs";

const line = "Sleep is available every night except " +
  "the one before my 3 a.m. shift.";

if (line.length > 160 || line.length < 1 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error("entry line invalid");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
