import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Configure basePath if you're not deploying to the root of your domain
  // For GitHub Pages with a custom domain, you can remove this
  // For GitHub Pages with a project site (username.github.io/repo-name), uncomment:
  // basePath: '/portfolio',
  
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
};

export default nextConfig;
