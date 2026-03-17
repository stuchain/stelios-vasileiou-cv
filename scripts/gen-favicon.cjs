const fs = require('fs')
const path = require('path')
// Minimal 16x16 32bpp ICO: header + entry + BITMAPINFOHEADER + image + AND mask
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)
const entry = Buffer.alloc(16)
entry.writeUInt8(16, 0)
entry.writeUInt8(16, 1)
entry.writeUInt8(0, 2)
entry.writeUInt8(0, 3)
entry.writeUInt16LE(1, 4)
entry.writeUInt16LE(32, 6)
const imageSize = 40 + 1024 + 32
entry.writeUInt32LE(imageSize, 8)
entry.writeUInt32LE(22, 12)
const dib = Buffer.alloc(40)
dib.writeUInt32LE(40, 0)
dib.writeInt32LE(16, 4)
dib.writeInt32LE(32, 8)
dib.writeUInt16LE(1, 12)
dib.writeUInt16LE(32, 14)
const pixels = Buffer.alloc(1024)
for (let i = 0; i < 1024; i += 4) {
  pixels[i] = 0x87
  pixels[i + 1] = 0xe7
  pixels[i + 2] = 0x7e
  pixels[i + 3] = 255
}
const andMask = Buffer.alloc(32)
const ico = Buffer.concat([header, entry, dib, pixels, andMask])
const outDir = path.join(__dirname, '..', 'public')
fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico)
