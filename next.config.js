/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/users',
            destination: 'https://firebase-mongo-three.vercel.app/posts',
          },
        ]
      },
  };