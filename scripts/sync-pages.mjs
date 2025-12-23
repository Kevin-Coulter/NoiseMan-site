import { promises as fs } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const assetsDir = path.join(root, 'assets')

async function syncPages() {
  const entries = await fs.readdir(distDir, { withFileTypes: true })

  await fs.rm(assetsDir, { recursive: true, force: true })

  for (const entry of entries) {
    const srcPath = path.join(distDir, entry.name)
    const destPath = path.join(root, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'assets') {
        await fs.cp(srcPath, destPath, { recursive: true })
      }
      continue
    }

    await fs.copyFile(srcPath, destPath)
  }
}

syncPages().catch((error) => {
  console.error(error)
  process.exit(1)
})
