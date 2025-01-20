/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { unoptimized: true }, // Disables Next.js built-in image optimization
  // output: "export", // Enables static export
  // trailingSlash: true, // Ensures URLs have trailing slashes for static hosting compatibility
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

module.exports = nextConfig;
