/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "plus.unsplash.com", "t4.ftcdn.net"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
