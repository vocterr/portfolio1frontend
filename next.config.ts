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
  async headers() {
    return [
        {
            source: "/(.*)",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://portfolio1frontend.vercel.app" },
                { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,POST,PUT,DELETE" },
                { key: "Access-Control-Allow-Headers", value: "Content-Type,Authorization" },
            ],
        },
    ];
},

  
};

export default nextConfig;
