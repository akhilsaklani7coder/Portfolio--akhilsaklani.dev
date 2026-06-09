/**
 * Favicon Generator Script
 * 
 * Generates favicon PNG files from the SVG source.
 * Creates: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, favicon.ico
 * 
 * Usage: node scripts/generate-favicons.js
 * Requires: sharp (installed as a dev dependency)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SVG_PATH = path.resolve(__dirname, '..', 'public', 'favicon.svg');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const svgContent = fs.readFileSync(SVG_PATH, 'utf-8');
const svgBuffer = Buffer.from(svgContent);

async function generate() {
  // favicon-16x16.png
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));
  console.log('✓ Generated favicon-16x16.png');

  // favicon-32x32.png
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));
  console.log('✓ Generated favicon-32x32.png');

  // apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png');

  // favicon.ico (use 32x32 PNG as ICO — modern browsers accept PNG-in-ICO)
  // For a proper .ico we create a 32x32 PNG and rename (most browsers handle this)
  const ico32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), ico32);
  console.log('✓ Generated favicon.ico');

  console.log('\n✓ All favicons generated successfully!');
}

generate().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
