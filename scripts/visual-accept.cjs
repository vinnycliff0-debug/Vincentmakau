const fs = require('fs')
const path = require('path')

const screenshotsDir = path.join(__dirname, '..', 'screenshots')
const baselineDir = path.join(screenshotsDir, 'baseline')

if (!fs.existsSync(screenshotsDir)) {
  console.error('No screenshots found. Run the screenshots script first.')
  process.exit(1)
}

if (!fs.existsSync(baselineDir)) fs.mkdirSync(baselineDir, { recursive: true })

const files = fs.readdirSync(screenshotsDir).filter(f => f.startsWith('screenshot_') && f.endsWith('.png'))
for (const f of files) {
  const src = path.join(screenshotsDir, f)
  const dst = path.join(baselineDir, f)
  fs.copyFileSync(src, dst)
  console.log('Copied', f, 'to baseline')
}
console.log('Baselines accepted.')
