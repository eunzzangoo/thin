/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thin',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 