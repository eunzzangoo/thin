/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true, // 선택사항 (라우트에 `/` 붙이기 원할 때만)
};

module.exports = nextConfig;
