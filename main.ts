import { mkdirSync, writeFileSync } from "node:fs";
const word = "AIYO"; // one word from grandma about AI — her warm, puzzled "Aiyo!" that literally starts with AI
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
