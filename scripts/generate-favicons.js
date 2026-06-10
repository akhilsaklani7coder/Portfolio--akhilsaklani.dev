/**
 * Favicon Generator Script
 * 
 * Generates favicon PNG files from the SVG source.
 * Creates: favicon-16x16.png, favicon-32x32.png, favicon-48x48.png,
 *          apple-touch-icon.png (180x180),
 *          android-chrome-192x192.png, android-chrome-512x512.png,
 *          favicon.ico (multi-resolution: 16+32+48)
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

/**
 * Build a minimal ICO file from one or more PNG buffers.
 * ICO format: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function buildIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let dataOffset = headerSize + dirSize;

  // ICO header: reserved(2) + type(2, 1=ICO) + count(2)
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);       // reserved
  header.writeUInt16LE(1, 2);       // type = ICO
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  const imageDataParts = [];

  for (let i = 0; i < numImages; i++) {
    const png = pngBuffers[i];
    const size = sizes[i];

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);   // width  (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1);   // height (0 = 256)
    entry.writeUInt8(0, 2);                         // color palette
    entry.writeUInt8(0, 3);                         // reserved
    entry.writeUInt16LE(1, 4);                      // color planes
    entry.writeUInt16LE(32, 6);                     // bits per pixel
    entry.writeUInt32LE(png.length, 8);             // image size
    entry.writeUInt32LE(dataOffset, 12);            // data offset

    dirEntries.push(entry);
    imageDataParts.push(png);
    dataOffset += png.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageDataParts]);
}

async function generate() {
  // favicon-16x16.png
  const png16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-16x16.png'), png16);
  console.log('✓ Generated favicon-16x16.png');

  // favicon-32x32.png
  const png32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-32x32.png'), png32);
  console.log('✓ Generated favicon-32x32.png');

  // favicon-48x48.png
  const png48 = await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'), png48);
  console.log('✓ Generated favicon-48x48.png');

  // apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✓ Generated apple-touch-icon.png (180x180)');

  // android-chrome-192x192.png
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'));
  console.log('✓ Generated android-chrome-192x192.png');

  // android-chrome-512x512.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'));
  console.log('✓ Generated android-chrome-512x512.png');

  // favicon.ico — proper multi-resolution ICO (16 + 32 + 48)
  const icoBuffer = buildIco([png16, png32, png48], [16, 32, 48]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  console.log('✓ Generated favicon.ico (multi-resolution: 16x16, 32x32, 48x48)');

  console.log('\n✓ All favicons generated successfully!');
}

generate().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
