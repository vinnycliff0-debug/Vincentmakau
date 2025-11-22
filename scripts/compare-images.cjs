const fs = require('fs')
const path = require('path')
const PNG = require('pngjs').PNG
const pixelmatch = require('pixelmatch')

const screenshotsDir = path.join(__dirname, '..', 'screenshots')
const baselineDir = path.join(screenshotsDir, 'baseline')
const diffDir = path.join(screenshotsDir, 'diff')

if (!fs.existsSync(screenshotsDir)) {
  console.error('No screenshots found. Run the screenshots script first.')
  process.exit(1)
}

if (!fs.existsSync(baselineDir)) {
  console.error('No baseline screenshots found. To accept current screenshots as baseline run: npm run visual:accept')
  process.exit(1)
}

if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir, { recursive: true })

const viewports = ['lg','md','sm']
let failed = false

for (const v of viewports) {
  const currPath = path.join(screenshotsDir, `screenshot_${v}.png`)
  const basePath = path.join(baselineDir, `screenshot_${v}.png`)
  if (!fs.existsSync(currPath) || !fs.existsSync(basePath)) {
    console.warn(`Missing screenshot for ${v}. Skipping.`)
    continue
  }
  const img1 = PNG.sync.read(fs.readFileSync(basePath))
  const img2 = PNG.sync.read(fs.readFileSync(currPath))
  const {width, height} = img1
  const diff = new PNG({width, height})
  const mismatched = pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.12})
  const diffPath = path.join(diffDir, `diff_${v}.png`)
  fs.writeFileSync(diffPath, PNG.sync.write(diff))
  console.log(`${v}: ${mismatched} pixels differ — diff saved to ${diffPath}`)
  if (mismatched > 0) failed = true
}

if (failed) process.exit(2)
console.log('Visual compare passed — no diffs detected')
