/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "modelhomes1dev.wpenginepowered.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
