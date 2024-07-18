/** @type {import('next').NextConfig} */
export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any path after /api/
        destination: '/.netlify/functions/:path*', // Redirect to Netlify functions
      },
      // Add other rewrites here if needed
    ];
  },
  useFileSystemPublicRoutes: true,
};