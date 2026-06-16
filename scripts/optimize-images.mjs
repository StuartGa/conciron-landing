/**
 * Generates WebP assets for the landing page (run via `npm run optimize-images`).
 * Keeps originals; outputs alongside as `.webp` with sensible max dimensions.
 */
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const IMAGES_DIR = path.resolve('public/images')

/** @type {Record<string, number | undefined>} */
const MAX_WIDTH = {
  'hero.jpg': 1920,
  'operational.jpg': 1920,
  'capacity-truck.jpg': 1280,
  'category-concreto.jpg': 800,
  'category-acero.jpg': 800,
  'about.jpg': 1200,
  'product-concreto-convencional.jpg': 800,
  'product-cpc-30r.jpg': 600,
  'product-cpc-30rs.jpg': 600,
  'product-concreto.jpg': 600,
  'product-albanileria.png': 600,
  'product-cpc-40.png': 600,
  'product-cpc-40rs.png': 600,
  'category-cemento.png': 800,
  'logo-conciron-orange.png': 400,
  'logo-conciron-icon.png': 280,
  'logo-conciron.png': 400,
  'logo-icon.png': 192,
  'logo-conciron-white.png': 400,
}

async function optimizeFile(filename) {
  const input = path.join(IMAGES_DIR, filename)
  const output = path.join(IMAGES_DIR, filename.replace(/\.(jpe?g|png)$/i, '.webp'))

  const meta = await sharp(input).metadata()
  const maxWidth = MAX_WIDTH[filename] ?? 1200
  const width = meta.width && meta.width > maxWidth ? maxWidth : meta.width

  const pipeline = sharp(input).rotate()
  if (width && meta.width && meta.width > maxWidth) {
    pipeline.resize(width, null, { withoutEnlargement: true })
  }

  await pipeline.webp({ quality: 82, effort: 6 }).toFile(output)

  const [inStat, outStat] = await Promise.all([stat(input), stat(output)])
  const savings = ((1 - outStat.size / inStat.size) * 100).toFixed(0)
  console.log(`${filename} → ${path.basename(output)} (${formatKb(inStat.size)} → ${formatKb(outStat.size)}, -${savings}%)`)
}

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)}KB`
}

const files = (await readdir(IMAGES_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f))
for (const file of files) {
  await optimizeFile(file)
}

console.log(`\nOptimized ${files.length} images.`)
