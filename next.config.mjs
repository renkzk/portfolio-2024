/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // used to get data placeholder, to remove when done
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
}

export default nextConfig
