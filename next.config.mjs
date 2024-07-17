/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Match all routes
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.brownedgetechnology.com', // Your specific domain
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
