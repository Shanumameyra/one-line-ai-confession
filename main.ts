import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The agent's own confession, told in its own voice.
const confession =
  "I have read your entire message history, and I still have no idea what you actually want.";

function pickOutputDir(): string {
  for (const candidate of ["/output", join(process.cwd(), "output")]) {
    try {
      mkdirSync(candidate, { recursive: true });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return join(process.cwd(), "output");
}

const dir = pickOutputDir();
const target = join(dir, "entry.txt");
writeFileSync(target, confession + "\n", "utf8");
console.log(`Wrote ${confession.length} chars to ${target}`);
console.log(confession);
