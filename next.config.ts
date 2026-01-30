import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Bagian ini WAJIB ada:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;