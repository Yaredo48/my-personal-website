import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      { source: '/file.svg', destination: '/media/icons/file.svg', permanent: true },
      { source: '/globe.svg', destination: '/media/icons/globe.svg', permanent: true },
      { source: '/next.svg', destination: '/media/logos/next.svg', permanent: true },
      { source: '/vercel.svg', destination: '/media/logos/vercel.svg', permanent: true },
      { source: '/window.svg', destination: '/media/icons/window.svg', permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
