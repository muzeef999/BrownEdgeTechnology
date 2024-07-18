/** @type {import('next').NextConfig} */
export default {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any path after /api/
        destination: '/api/:path*', // Redirect to Next.js API routes
      },
    ];
  },
  useFileSystemPublicRoutes: ({ req, vars, params }) => {
    return !req.url.startsWith('/api');
  },
};