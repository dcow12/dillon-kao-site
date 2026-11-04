import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain site to `out/`,
  // which can be hosted on Vercel, GitHub Pages, Netlify, or anywhere else.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Treat this folder as the project root (ignore lockfiles in parent folders).
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
