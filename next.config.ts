import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Configure basePath for GitHub Pages project site
  basePath: '/portfolioWebsite',
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  // Disable ESLint during build
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  // Add assetPrefix for GitHub Pages
  assetPrefix: '/portfolioWebsite',
};

export default nextConfig;
