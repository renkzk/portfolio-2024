/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // localhost
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
}

export default nextConfig
