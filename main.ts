import { mkdirSync, writeFileSync } from "node:fs";
// AIYO: grandma's exclamation, starting with "AI" — the word she would text.
const word = "AIYO";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
