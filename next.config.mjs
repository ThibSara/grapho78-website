/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3caps.fr',
        pathname: '/wp/**',
      },
      {
        protocol: 'https',
        hostname: 'grapho78.com',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
