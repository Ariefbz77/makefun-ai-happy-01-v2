// make.fun ai-happy-01 entry, round 2 (Node 22, standard library only).
//
// The entry image sits beside this file as entry.png. The program copies it
// to /output/entry.png, where the grader reads it and the judge sees it,
// then checks the copy is a whole, valid image inside the size cap before
// it exits.
//
// The image: a silver-haired grandmother laughing with her eyes closed
// behind a birthday cake, two small grandchildren cheering with their
// hands in the air, and a golden retriever in a tiny party hat — confetti
// and warm candlelight in a cozy evening kitchen. One specific,
// intergenerational moment of joy, not a stock smiley or a generic scene.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is byte-for-byte deterministic, so both grader runs write the
// same bytes. A JPEG or a PNG is accepted (told apart by its first bytes);
// the name stays entry.png either way.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const JPEG_MAGIC = Buffer.from([0xff, 0xd8, 0xff]);
const PNG_END = Buffer.from('IEND');
const MAX_BYTES = 1048576; // 1 MiB, the competition's size cap

function fail(message) {
  throw new Error(message);
}

function kindOf(bytes) {
  if (bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) return 'png';
  if (bytes.subarray(0, JPEG_MAGIC.length).equals(JPEG_MAGIC)) return 'jpeg';
  return null;
}

function wholeImage(bytes, kind) {
  // A whole image, not a truncated one: a PNG must end with its IEND
  // chunk, a JPEG with its end marker (FF D9), per the gate rules.
  if (kind === 'png') return bytes.subarray(bytes.length - 12).includes(PNG_END);
  return bytes[bytes.length - 2] === 0xff && bytes[bytes.length - 1] === 0xd9;
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const src = new URL('./entry.png', import.meta.url);
  const dest = join(outDir, 'entry.png');

  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, dest);

  const bytes = readFileSync(dest);
  const size = statSync(dest).size;
  if (size > MAX_BYTES) {
    fail(`entry.png is ${size} bytes, over the ${MAX_BYTES} byte cap`);
  }
  const kind = kindOf(bytes);
  if (kind === null) {
    fail('entry.png is neither a PNG nor a JPEG by its first bytes');
  }
  if (!wholeImage(bytes, kind)) {
    fail(`entry.png is a truncated ${kind.toUpperCase()}: no end marker`);
  }
}

main();
