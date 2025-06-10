/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thin',
  assetPrefix: '/thin/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  // GitHub Pages에서 SPA 라우팅을 위한 설정
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
      },
    ]
  },
}

module.exports = nextConfig 