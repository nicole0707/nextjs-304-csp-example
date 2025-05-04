import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async headers() {
      return [
        {
          source: '/trusted-lib.js',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' https://cdn.example.com;",
            },
          ],
        },
      ];
    }
};

export default nextConfig;
