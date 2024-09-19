import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.pexels.com' },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/list/teachers',
        permanent: true, // Permanent redirect (status code 308)
      },
    ];
  },
};

export default nextConfig;
