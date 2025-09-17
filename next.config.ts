import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "js", "jsx"],
  images: {
    domains: ["ffo3gv1cf3ir.merlincdn.net"],
  },
};

export default nextConfig;

