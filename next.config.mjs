/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.brownedgetechnology.com', // Replace '*' with your specific domain for security
          },
        ],
      },
    ];
  },
  };
  
  export default nextConfig;