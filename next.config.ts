import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any API path
        destination: "https://portfolio1-1-el53.onrender.com/api/:path*", // Proxy to the backend
      },
    ];
  },
};

export default nextConfig;
