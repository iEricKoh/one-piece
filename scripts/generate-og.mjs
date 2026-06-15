// Regenerate the social share image + apple touch icon:
//   node scripts/generate-og.mjs   (or `pnpm og`)
import sharp from "sharp"
import { fileURLToPath } from "node:url"

const resolve = (p) => fileURLToPath(new URL(p, import.meta.url))

const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="630" fill="#2dd4bf"/>
  <text x="90" y="300" font-family="Helvetica, Arial, sans-serif" font-size="128" font-weight="800" letter-spacing="2" fill="#f8fafc">ERIC KOH</text>
  <text x="94" y="372" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="500" fill="#2dd4bf">AI-Augmented Full Stack Developer</text>
  <text x="94" y="540" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#94a3b8">10+ years building interactive web &amp; mobile apps</text>
</svg>`

const touchSvg = `<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#0f172a"/>
  <text x="50%" y="50%" dy=".34em" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="96" font-weight="800" fill="#2dd4bf">EK</text>
</svg>`

await sharp(Buffer.from(ogSvg)).png().toFile(resolve("../public/og.png"))
await sharp(Buffer.from(touchSvg))
  .png()
  .toFile(resolve("../public/apple-touch-icon.png"))
console.log("Wrote public/og.png and public/apple-touch-icon.png")
