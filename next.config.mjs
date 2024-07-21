/** @type {import('next').NextConfig} */
export default {
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  useFileSystemPublicRoutes: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/src/app/api/:path*'
      }
    ];
  }
};