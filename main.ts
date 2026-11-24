// Ridiculous at First Glance, Real by the Second — entry program (v3 final).
// Writes one original one-line startup pitch (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node stdlib.
//
// The pitch: pre-dented rental cars — laugh first (who rents a damaged
// car?), nod second (rental damage fees are the anxiety every nervous
// driver already pays for).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We rent cars that are already dented, so nervous drivers pay extra for the one rental nobody can blame them for scratching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
