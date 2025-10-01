/**
 * Crop the chordsongs_bigger_trans.png image centrally (trim top/bottom) and write
 * the result to public/chordsongs_cropped.png.
 *
 * Usage:
 *   npm install jimp --legacy-peer-deps
 *   node scripts/crop-image.cjs
 *
 * Note: this script is intentionally small and uses Jimp for portability.
 */
const path = require('path');
const fs = require('fs');

async function run() {
  let Jimp;
  try {
    Jimp = require('jimp');
    // Compat: some installs expose Jimp as default export
    if (Jimp && typeof Jimp.read !== 'function' && Jimp.default && typeof Jimp.default.read === 'function') {
      Jimp = Jimp.default;
    }
  } catch (err) {
    console.error('Jimp is not installed. Run: npm install jimp --legacy-peer-deps');
    process.exit(1);
  }

  const src = path.resolve(__dirname, '..', 'chordsongs_bigger_trans.png');
  const outDir = path.resolve(__dirname, '..', 'public');
  const out = path.join(outDir, 'chordsongs_cropped.png');

  if (!fs.existsSync(src)) {
    console.error('Source image not found at', src);
    process.exit(1);
  }

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const reader = Jimp.read || (Jimp.Jimp && Jimp.Jimp.read) || (Jimp.default && Jimp.default.read);
  if (typeof reader !== 'function') {
    console.error('Cannot find Jimp.read function on installed package.');
    process.exit(1);
  }
  const img = await reader(src);
  const w = img.bitmap.width;
  const h = img.bitmap.height;

  // Crop central 80% vertically (trim 10% from top and bottom)
  const cropTop = Math.round(h * 0.1);
  const cropHeight = Math.round(h * 0.8);

  img.crop(0, cropTop, w, cropHeight);
  await img.writeAsync(out);
  console.log('Wrote cropped image to', out);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
