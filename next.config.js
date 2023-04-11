/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
