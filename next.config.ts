import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ Solo temporal
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Solo temporal
  },
}

export default nextConfig