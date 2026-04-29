/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      new URL("https://assets.prebuiltui.com/**"),
    ],
    qualities: [60, 70, 75, 80, 85, 90],
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;