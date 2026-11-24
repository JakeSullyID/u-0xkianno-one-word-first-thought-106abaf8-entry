// Defenestration delivers a thunderous phonetic impact and shocking visual action through sudden unexpected expulsion.
import * as fs from 'node:fs';
import * as path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
const filePath = path.join(outputDir, 'entry.txt');
// Omit trailing newline to ensure the output file contains strictly the word itself.
fs.writeFileSync(filePath, 'defenestration', 'utf8');
