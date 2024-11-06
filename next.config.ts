import type { NextConfig } from "next/types"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

export default nextConfig
