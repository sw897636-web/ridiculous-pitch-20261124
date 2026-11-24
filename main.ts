// Ridiculous at First Glance, Real by the Second — entry program (v1).
// Writes one original one-line startup pitch (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node stdlib.
//
// The pitch: pre-dented rental cars — laugh first (who rents a damaged
// car?), nod second (rental damage fees are the anxiety every nervous
// driver already pays for).
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We rent out cars that are already dented, so you will never pay for the first scratch \u2014 nervous drivers pay extra for a car nobody can blame them for damaging.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
