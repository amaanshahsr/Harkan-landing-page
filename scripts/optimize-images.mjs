/**
 * One-off image optimizer.
 *   node scripts/optimize-images.mjs
 *
 * Reads the large source images in public/img and writes compressed .webp
 * versions next to them (resized to a sensible max width for the web).
 * Originals are kept so you can re-run with different settings.
 */
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'

// Sources live in raw-assets/ (kept out of the build); optimized .webp is
// written into public/img/ where the app references it.
const JOBS = [
  // product renders — transparent PNGs, displayed ~max 600px wide
  { in: 'raw-assets/products/icer-alpha.png', out: 'public/img/products/icer-alpha.webp', width: 900 },
  { in: 'raw-assets/products/icer-beta.png', out: 'public/img/products/icer-beta.webp', width: 900 },
  { in: 'raw-assets/products/zwooper.jpeg', out: 'public/img/products/zwooper.webp', width: 700 },
  { in: 'raw-assets/products/warehouse-robot.jpeg', out: 'public/img/products/warehouse-robot.webp', width: 700 },
  // scene photos — opaque, full-bleed
  { in: 'raw-assets/scenes/hero-home.jpeg', out: 'public/img/scenes/hero-home.webp', width: 1600 },
  { in: 'raw-assets/scenes/about-tech.png', out: 'public/img/scenes/about-tech.webp', width: 1100 },
  { in: 'raw-assets/scenes/footer-bg.png', out: 'public/img/scenes/footer-bg.webp', width: 1600 },
]

let totalIn = 0
let totalOut = 0

for (const job of JOBS) {
  await mkdir(dirname(job.out), { recursive: true })
  const img = sharp(job.in)
  const meta = await img.metadata()
  const pipeline = img.resize({
    width: Math.min(job.width, meta.width),
    withoutEnlargement: true,
  })
  const info = await pipeline.webp({ quality: 82, effort: 5 }).toFile(job.out)
  const inSize = meta.size ?? 0
  totalIn += inSize
  totalOut += info.size
  const pct = inSize ? Math.round((1 - info.size / inSize) * 100) : 0
  console.log(
    `${job.out.padEnd(40)} ${(info.size / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`,
  )
}

console.log(
  `\nTotal: ${(totalIn / 1024 / 1024).toFixed(1)} MB → ${(totalOut / 1024 / 1024).toFixed(2)} MB`,
)
