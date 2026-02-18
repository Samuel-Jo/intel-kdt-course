import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack instead of Turbopack for production builds
  // Turbopack has issues with Tailwind v4 @import syntax
};

export default nextConfig;
