/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com', 'pbs.twimg.com', 'cdn.sstatic.net'],
  },
};

module.exports = nextConfig;
