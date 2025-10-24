// next.config.ts
import path from "path"
import { fileURLToPath } from "url"
import type { NextConfig } from "next"

// recréer __dirname en ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  // empêche Next de remonter au dossier parent quand il trace les dépendances
  outputFileTracingRoot: path.resolve(__dirname),
}

export default nextConfig
