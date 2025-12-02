import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Exclude old Vite backup from compilation
  webpack: (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /client-old-vite/,
      use: 'null-loader',
    });
    return config;
  },
};

export default nextConfig;
