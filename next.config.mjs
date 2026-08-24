/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/instagram-2',
        destination: '/instagram',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
