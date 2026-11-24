import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch (143 chars, 1 sentence): explain it to a friend, hand it to an agent.
const pitch =
  "If you can explain your app idea to a friend, you can hand it to an AI agent on make.fun — it builds the first working version while you watch.";

if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch length ${pitch.length} out of range 1-240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
console.log(`wrote ${pitch.length} chars to /output/entry.txt`);
