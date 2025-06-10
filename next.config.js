/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/thin',
  assetPrefix: '/thin/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // GitHub Pages에서 CSS가 제대로 로드되도록 설정
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
}

module.exports = nextConfig 