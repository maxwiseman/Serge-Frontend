/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://192.168.0.45:8008/api/:path*'
//       }
//     ]
//   }
// }

const { default: next } = require('next')

// module.exports = nextConfig

const sergeURL = process.env.NEXT_PUBLIC_SERGE_URL

module.exports = {
  reactStrictMode: true,
}