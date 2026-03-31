const fs = require('fs')
const path = require('path')

const root = process.cwd()
const heroPath = path.join(root, 'src', 'components', 'Hero.tsx')
const hero = fs.readFileSync(heroPath, 'utf-8')

const requiresBioImport = /import\s+\{\s*bio,\s*profile\s*\}\s+from\s+"..\/data\/generated";?/.test(hero)
const usesBioIndex = /bio\[0\]|bio\[1\]/.test(hero)
const hasOldHardcoded = hero.includes(
  'Software Developer, based in Athens, Greece with experience in the Danish banking sector, UI architecture, and enterprise integrations'
)

if (!requiresBioImport || !usesBioIndex || hasOldHardcoded) {
  console.error('Hero content source check failed: Hero.tsx must use bio[0]/bio[1] from generated data and not contain old hardcoded copy.')
  process.exit(1)
}

console.log('Hero content source check passed.')
