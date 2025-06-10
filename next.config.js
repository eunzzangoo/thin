/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thin',
  assetPrefix: '/thin/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 