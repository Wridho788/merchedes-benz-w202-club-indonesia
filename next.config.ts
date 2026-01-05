import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests"
          },
          {
            key: 'Permissions-Policy',
            value: 'unload=()'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
