import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio1-1-el53.onrender.com",
        port: "3001",
        pathname: "/**", // Allows loading images from your backend
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy API requests
        destination: "https://portfolio1-1-el53.onrender.com/api/:path*", // Your backend URL
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Applies headers to all API requests
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://portfolio1frontend.vercel.app" }, // Frontend origin
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,POST,PUT,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type,Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
