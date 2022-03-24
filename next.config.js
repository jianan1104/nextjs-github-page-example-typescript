/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
  }
}

module.exports = nextConfig
