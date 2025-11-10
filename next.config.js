/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com",
        port: "",
      },
    ],
  },
  // Exclude API routes from static export
  async generateBuildId() {
    return "static-build";
  },
};

module.exports = nextConfig;
