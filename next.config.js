const { default: next } = require('next');

/** @type {import('next').NextConfig} */

 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig 

// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://firebase-mongo-three.vercel.app/:path*',
          },
        ]
      },
  };
