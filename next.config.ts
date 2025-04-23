import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Added placeholder hostname
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Added alternative placeholder service
        port: '',
        pathname: '**',
      },
      // Add other domains here if needed in the future
    ],
  },
  /* config options here */
  // Add other configurations here if needed
};

export default nextConfig;
