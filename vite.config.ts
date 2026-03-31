import { defineConfig, type Plugin, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { generateProfileData } = require('./scripts/generate-data.cjs') as {
  generateProfileData: (projectRoot?: string) => string
}

function profileMdSyncPlugin(): Plugin {
  return {
    name: 'profile-md-sync',
    configureServer(server: ViteDevServer) {
      const profilePath = path.join(server.config.root, 'profile.md')
      server.watcher.add(profilePath)

      server.watcher.on('change', (changedPath: string) => {
        if (path.resolve(changedPath) !== path.resolve(profilePath)) {
          return
        }

        generateProfileData(server.config.root)
        server.config.logger.info('profile.md changed; regenerated src/data/generated.ts')
        server.ws.send({ type: 'full-reload' })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), profileMdSyncPlugin()],
  // CI sets VITE_BASE_PATH to /<repo-name>/ so the deployed site matches GitHub Pages URL
  base: process.env.VITE_BASE_PATH ?? '/portfolio/',
})
