/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com"],
    unoptimized: true,
  },
};

export default nextConfig;
