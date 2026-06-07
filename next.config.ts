import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 kräver att icke-standard kvalitetsvärden tillåts explicit.
    // 90 används för skarpa hero-/foto-bakgrunder.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Old slug used on karlacleaningcrew.se — permanent redirect to new canonical URL
      {
        source: '/hemstad',
        destination: '/hemstadning',
        permanent: true,
      },
      {
        source: '/hemstad/:path*',
        destination: '/hemstadning/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
